<?php

namespace App\Models;


use App\Helpers\Helper;

class DobComplaints extends ODataModel
{
    public $subject = "New DOB Complaint Filed";
    public $updateSubject = "New DOB Complaint Status Update";
    public $mailview = 'mails.alerts.dobComplaints';
    protected $datasetId = "eabe-havv";
    protected $datasetName = "DOB Complaints Received";

    protected $dataColumn = "bin";
    protected $dataSocrataKey = "bin";
    protected $updateFrequency = 'daily';

    protected $primaryKey = 'complaint_bin_inspection';

    protected $table = 'dob_complaints';

    protected $notifiables = [
        'status',
        'disposition_date',
        'inspection_date',
        ];

    protected $selectables = [
        'complaint_number',
        'status',
        'date_entered',
        'house_number',
        'zip_code',
        'house_street',
        'bin',
        'community_board',
        'special_district',
        'complaint_category',
        'unit',
        'disposition_date',
        'disposition_code',
        'inspection_date',
        'dobrundate'];

    protected $fillable = [
        'complaint_bin_inspection',
        'complaint_number',
        'status',
        'date_entered',
        'house_number',
        'zip_code',
        'house_street',
        'bin',
        'community_board',
        'special_district',
        'complaint_category',
        'unit',
        'disposition_date',
        'disposition_code',
        'inspection_date',
        'dobrundate'];


    protected $casts = [
        'bin' => 'string',
    ];

    protected $with = ['complaintCode', 'dispositionCode'];

    public function complaintCode()
    {
        return $this->belongsTo('\App\Models\Codes\DobComplaintCodes', 'complaint_category', 'code');
    }

    public function dispositionCode()
    {
        return $this->belongsTo('\App\Models\Codes\DobComplaintDispositionCodes', 'disposition_code', 'code');
    }

//                     Asagidakiler daha once girilmis
    public function dateEntered()
    {
        return Helper::carbonParseYmd($this->date_entered);
    }

    public function getDispositionDate()
    {
        return Helper::carbonParseYmd($this->disposition_date);
    }

    public function inspectionDate()
    {
        return Helper::carbonParseYmd($this->inspection_date);
    }

    public function dobrunDate()
    {
        return Helper::carbonParseYmd($this->dobrundate)->format("Y-m-d");
    }

    public function insertData($result)
    {
        $result["complaint_bin_inspection"] = $result["complaint_number"] . "_" . $result["bin"];
        parent::insertData($result); // TODO: Change the autogenerated stub
    }

    public function scopeSummary($query)
    {
        return $query->where(function ($query) {
            $query->where('status', '=', 'CLOSED')
                ->where('date_entered', 'LIKE', now()->addMonths(-1)->format('m/%/Y'));
        })
            ->orWhere(function ($query) {
                $query->where('status', '=', 'CLOSED')->where('date_entered', 'LIKE', now()->format('m/%/Y'));
            })
            ->orWhere('status', '!=', 'CLOSED');
    }

//    protected function getWhereString()
//    {
//        return parent::getWhereString() . " and
//        (
//       (status = 'CLOSED' and date_entered LIKE '" . now()->addMonths(-1)->format('m/%/Y') . "')
//        or (status = 'CLOSED'  and date_entered LIKE '" . now()->format('m/%/Y') . "')
//        or status != 'CLOSED'
//        )"; // TODO: mevcut ay ve bir önceki aydaki closed olanlar ile tüm zamanlardaki closed olmayanları getiriyor.
//    }
}
