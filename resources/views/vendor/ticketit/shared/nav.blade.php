@php
    // Get current user safely
    $u = $u ?? auth()->user();
@endphp

<nav style="background-color: #38403e; padding: 0.5rem; border-radius: 0.375rem; margin-bottom: 1rem;">
    <ul class="nav nav-pills">
        <li role="presentation" class="nav-item">
            <a class="nav-link {{ request()->routeIs('tickets.index') ? 'active' : '' }}"
                href="{{ route('tickets.index') }}"
                style="{{ request()->routeIs('tickets.index') ? 'background-color: #f8f9fa !important; color: #6ea665 !important;' : 'color: #dce2e1 !important;' }}">
                <i class="fas fa-ticket-alt"></i> Active Tickets
                <span class="badge badge-light ml-1" style="background-color: #6ea665; color: white;">
                     <?php 
                        try {
                            if ($u && method_exists($u, 'isAdmin') && $u->isAdmin()) {
                                echo Kordy\Ticketit\Models\Ticket::active()->count();
                            } elseif ($u && method_exists($u, 'isAgent') && $u->isAgent()) {
                                echo Kordy\Ticketit\Models\Ticket::active()->agentUserTickets($u->id)->count();
                            } elseif ($u) {
                                echo Kordy\Ticketit\Models\Ticket::userTickets($u->id)->active()->count();
                            } else {
                                echo 0;
                            }
                        } catch (Exception $e) {
                            echo 0;
                        }
                    ?>
                </span>
            </a>
        </li>
        <li role="presentation" class="nav-item ml-2">
            <a class="nav-link {{ request()->routeIs('tickets-complete') ? 'active' : '' }}"
                 href="{{ route('tickets-complete') }}"
                 style="{{ request()->routeIs('tickets-complete') ? 'background-color: #f8f9fa !important; color: #6ea665 !important;' : 'color: #dce2e1 !important;' }}">
                <i class="fas fa-check-circle"></i> Completed Tickets
                <span class="badge badge-light ml-1" style="background-color: #6ea665; color: white;">
                    <?php 
                        try {
                            if ($u && method_exists($u, 'isAdmin') && $u->isAdmin()) {
                                echo Kordy\Ticketit\Models\Ticket::complete()->count();
                            } elseif ($u && method_exists($u, 'isAgent') && $u->isAgent()) {
                                echo Kordy\Ticketit\Models\Ticket::complete()->agentUserTickets($u->id)->count();
                            } elseif ($u) {
                                echo Kordy\Ticketit\Models\Ticket::userTickets($u->id)->complete()->count();
                            } else {
                                echo 0;
                            }
                        } catch (Exception $e) {
                            echo 0;
                        }
                    ?>
                </span>
            </a>
        </li>

        @if($u && method_exists($u, 'isAdmin') && $u->isAdmin())
            <li role="presentation" class="nav-item ml-2">
                <a class="nav-link"
                    href="#"
                    style="color: #dce2e1 !important;">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                </a>
            </li>

            <li role="presentation" class="nav-item dropdown ml-2">
                <a class="nav-link dropdown-toggle"
                    data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"
                    style="color: #dce2e1 !important;">
                    <i class="fas fa-cog"></i> Settings
                </a>
                <div class="dropdown-menu" style="background-color: #f8f9fa; border: 1px solid #dce2e1;">
                    <a class="dropdown-item" href="#" style="color: #2c3430 !important;">
                        Statuses
                    </a>
                    <a class="dropdown-item" href="#" style="color: #2c3430 !important;">
                        Priorities
                    </a>
                    <a class="dropdown-item" href="#" style="color: #2c3430 !important;">
                        Agents
                    </a>
                    <a class="dropdown-item" href="#" style="color: #2c3430 !important;">
                        Categories
                    </a>
                    <a class="dropdown-item" href="#" style="color: #2c3430 !important;">
                        Configuration
                    </a>
                    <a class="dropdown-item" href="#" style="color: #2c3430 !important;">
                        Administrator
                    </a>
                </div>
            </li>
        @endif

    </ul>
</nav>
