            <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <th class="text-center">#</th>
          <th>Slug</th>
          <th>Default</th>
          <th>Value</th>
          <th class="text-center">Lang</th>
          <th class="text-center">Edit</th>
        </thead>
        <tbody>
@foreach($configurations_by_sections['init'] as $configuration)
          <tr>
            <td class="text-center">{!! $configuration->id !!}</td>
            <td>{!! $configuration->slug !!}</td>
            <td>{!! $configuration->default !!}</td>
            <td><a href="{!! route(\Kordy\Ticketit\Models\Setting::grab('admin_route').'.configuration.edit', [$configuration->id]) !!}" title="Edit {{ $configuration->slug }}" data-toggle="tooltip">{!! $configuration->value !!}</a></td>
            <td class="text-center">{!! $configuration->lang !!}</td>
            <td class="text-center">
              {!! link_to_route(
                  \Kordy\Ticketit\Models\Setting::grab('admin_route').'.configuration.edit', 'Edit', [$configuration->id],
                  ['class' => 'btn btn-info', 'title' => 'Edit '.$configuration->slug,  'data-toggle' => 'tooltip'] )
              !!}
            </td>
          </tr>
@endforeach
        </tbody>
      </table>
    </div>
