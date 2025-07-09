<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Session;
use Storage;

class NewsletterController extends Controller
{
    //
    public function index(Request $request)
    {
        try {
            $mailchimp = Helper::getMailChimpInstance();
            $campaigns = $mailchimp->campaigns->list()->campaigns;
            return view('portal.newsletter.campaigns.index')->withCampaigns($campaigns);
        } catch (\Exception $e) {
            // Log the error
            \Log::error('Mailchimp API Error: ' . $e->getMessage());
            
            // Return error view with message
            return view('portal.newsletter.campaigns.index')
                ->withCampaigns([])
                ->withErrors(['mailchimp' => 'Unable to connect to Mailchimp API: ' . $e->getMessage()]);
        }
    }

    public function create()
    {
        try {
            $mailchimp = Helper::getMailChimpInstance();
            $recipient_list = collect($mailchimp->lists->getAllLists()->lists)->pluck('name', 'id');
            return view('portal.newsletter.campaigns.create')->withRecipients($recipient_list);
        } catch (\Exception $e) {
            // Log the error
            \Log::error('Mailchimp API Error in create: ' . $e->getMessage());
            
            // Return error view with message
            return view('portal.newsletter.campaigns.create')
                ->withRecipients([])
                ->withErrors(['mailchimp' => 'Unable to connect to Mailchimp API: ' . $e->getMessage()]);
        }
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'subject_line' => 'required',
            'from_name' => 'required',
            'to_name' => 'required',
            'list_id' => 'required',
            'content' => 'required'
        ]);

        try {
            $data = $request->only(['title', 'subject_line', 'from_name', 'to_name', 'reply_to', 'list_id', 'content']);

            $mailchimp = Helper::getMailChimpInstance();
            //GET CAMPAIGN INFO
            $campaign = $mailchimp->campaigns->create([
                "type" => "regular",
                "recipients" => [
                    "list_id" => $data["list_id"],
                ],
                "settings" => [
                    "title" => $data["title"],
                    "subject_line" => $data["subject_line"],
                    "reply_to" => $data["reply_to"] ?? "newsletter@pbs.nyc",
                    "from_name" => $data["from_name"],
                    "to_name" => $data["to_name"],
                ],
            ]);

            $content = view('portal.newsletter.campaigns.template')->withContent($data["content"])->render();
            $response = $mailchimp->campaigns->setContent($campaign->id, [
                "html" => $content
            ]);

            Session::flash('success', "Campaign: <i>" . $data["title"] . "</i> successfully updated.");
            return redirect()->route('campaign.show', $campaign->id);
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to create campaign: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }
    }

    public function show($id)
    {
        try {
            $mailchimp = Helper::getMailChimpInstance();
            //GET CAMPAIGN INFO
            $campaign = $mailchimp->campaigns->get($id);
            //dd($campaign);
            $content = $mailchimp->campaigns->getContent($id);

            $recipient_list = collect($mailchimp->lists->getAllLists()->lists)->pluck('name', 'id');

            return view('portal.newsletter.campaigns.show')->withCampaign($campaign)->withContent($content)->withRecipients($recipient_list);
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to load campaign: ' . $e->getMessage());
            return redirect()->route('campaign.index');
        }
    }


    public function edit($id)
    {
        try {
            $mailchimp = Helper::getMailChimpInstance();
            //GET CAMPAIGN INFO
            $campaign = $mailchimp->campaigns->get($id);
            $campaign->title = $campaign->settings->title;
            //dd($campaign);
            $content = $mailchimp->campaigns->getContent($id);
            $campaign->content = isset($content->html) ? $content->html : ' ';
            return view('portal.newsletter.campaigns.edit')->withCampaign($campaign)->withContent($content);
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to load campaign for editing: ' . $e->getMessage());
            return redirect()->route('campaign.index');
        }
    }


    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        try {
            $data = $request->only(['title', 'content']);
            $data["content"] = str_replace("<p><br></p>", "", $data["content"]);
            $content = view('portal.newsletter.campaigns.template')->withContent($data["content"])->render();

            $mailchimp = Helper::getMailChimpInstance();
            //GET CAMPAIGN INFO
            $response = $mailchimp->campaigns->update($id, [
                "settings" => [
                    "title" => $data["title"],
                    "subject_line" => $data["title"],
                    "reply_to" => "newsletter@pbs.nyc",
                    "from_name" => "PBS Test",
                    "to_name" => "Reply to PBS",
                ],
            ]);

            $response = $mailchimp->campaigns->setContent($id, [
                "html" => $content
            ]);

            Session::flash('success', "Campaign: <i>" . $data["title"] . "</i> successfully updated.");
            return redirect()->route('campaign.show', $id);
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to update campaign: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }
    }


    public function destroy(Request $request, $id)
    {
        try {
            $title = $request->title;

            $mailchimp = Helper::getMailChimpInstance();
            $response = $mailchimp->campaigns->remove($id);

            Session::flash('success', "Campaign <i>" . ($title ?? 'N/A') . "</i> successfully deleted.");
            return redirect()->route('campaign.index');
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to delete campaign: ' . $e->getMessage());
            return redirect()->route('campaign.index');
        }
    }

    public function sendTest(Request $request, $id)
    {
        $this->validate($request, [
            'test_email' => 'required',
        ]);
        
        try {
            $mailchimp = Helper::getMailChimpInstance();
            $test_email = $request->test_email;
            $mailchimp->campaigns->sendTestEmail($id, [
                "test_emails" => [$test_email],
                "send_type" => "html"
            ]);

            Session::flash('success', "Test e-mail sent successfully to <i>" . $test_email . "</i>");
            return redirect()->route('campaign.index');
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to send test email: ' . $e->getMessage());
            return redirect()->route('campaign.index');
        }
    }

    public function send(Request $request, $id)
    {
        $this->validate($request, [
            'recipient_id' => 'required',
        ]);

        try {
            $listid = $request->recipient_id;
            //SEND CAMPAIGN
            $mailchimp = Helper::getMailChimpInstance();
            $mailchimp->campaigns->update($id, ['recipients' => ['list_id' => $listid]]);
            $response = $mailchimp->campaigns->send($id);

            Session::flash('success', "Campaign: <i>" . $response . "</i> successfully sent.");
            return redirect()->route('campaign.index');
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to send campaign: ' . $e->getMessage());
            return redirect()->route('campaign.index');
        }
    }

    public function replicateCampaign(Request $request, $id)
    {
        try {
            $mailchimp = Helper::getMailChimpInstance();
            $response = $mailchimp->campaigns->replicate($id);

            Session::flash('success', "Campaign: <i>" . $response->settings->title . "</i> successfully replicated from old one.");
            return redirect()->route('campaign.index');
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to replicate campaign: ' . $e->getMessage());
            return redirect()->route('campaign.index');
        }
    }

    public function imageupload(Request $request)
    {
        $path = $request->file('file')->store('public/newsletterimages');
        return url(Storage::url($path));
    }

    public function report($id)
    {
        try {
            $mailchimp = Helper::getMailChimpInstance();
            $campaignReport = $mailchimp->reports->getCampaignReport($id);
            $campaignClickReport = $mailchimp->reports->getCampaignClickDetails($id);
            $campaignLocationReport = $mailchimp->reports->getLocationsForCampaign($id,[],[],1000);
            $campaignDomainPerformanceReport = $mailchimp->reports->getDomainPerformanceForCampaign($id);
            $campaignOpenReport = $mailchimp->reports->getCampaignOpenDetails($id, [], [], 1000);
            $campaignUnsubscribedReport = $mailchimp->reports->getUnsubscribedListForCampaign($id, [], [], 1000);

            return view('portal.newsletter.campaigns.report')
                ->withCampaignReport($campaignReport)
                ->withCampaignClickReport($campaignClickReport)
                ->withCampaignLocationReport($campaignLocationReport)
                ->withCampaignDomainPerformanceReport($campaignDomainPerformanceReport)
                ->withCampaignOpenReport($campaignOpenReport)
                ->withCampaignUnsubscribedReport($campaignUnsubscribedReport);
        } catch (\Exception $e) {
            Session::flash('error', 'Failed to load campaign report: ' . $e->getMessage());
            return redirect()->route('campaign.index');
        }
    }


}
