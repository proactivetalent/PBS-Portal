# PBS Portal Frontend Contracts

## Purpose

This document records the frontend contracts that must survive the PBS Member Portal redesign. It is a Phase 0 safety reference, not an authorization to change implementation.

The portal is a Laravel 10 server-rendered Blade application using AdminLTE 3, Bootstrap 4, jQuery, and DataTables. AdminLTE remains the compatibility layer. `resources/js/app.js` is configured as a Vite input but is not loaded by the portal layout; current behavior comes from AdminLTE assets and inline Blade scripts.

All `/portal` routes below are registered through `app/Providers/RouteServiceProvider.php` with the `web` middleware stack and the `/portal` prefix. Most routes are additionally inside the authenticated group in `routes/portal.php`.

## Cross-screen contracts

These invariants apply to every priority screen:

- Preserve route names, URLs, parameters, HTTP methods, middleware, and authorization levels.
- Preserve all CSRF tokens and `X-CSRF-TOKEN` headers.
- Preserve existing form field names and hidden identifiers.
- Preserve IDs, classes, and data attributes referenced by jQuery, AdminLTE, DataTables, Select2, SweetAlert2, or inline JavaScript.
- Preserve the order of DataTables columns unless every index-based dependency has been reviewed and the change is explicitly approved.
- Preserve existing data values and meanings; visual badges must not invent status or severity semantics.
- Keep AdminLTE, Bootstrap, jQuery, and existing page plugin sections active.
- Do not enable `resources/js/app.js` or migrate inline scripts during the initial phases.

---

## 1. Application shell and sidebar

### Files

- `resources/views/portal/master.blade.php`
- `resources/views/vendor/adminlte/master.blade.php`
- `resources/views/vendor/adminlte/page.blade.php`
- `resources/views/vendor/adminlte/partials/navbar/navbar.blade.php`
- `resources/views/vendor/adminlte/partials/sidebar/left-sidebar.blade.php`
- `resources/views/vendor/adminlte/partials/footer/footer.blade.php`
- `resources/views/portal/partials/footer.blade.php`
- `config/adminlte.php`
- `app/Filters/RolesFilter.php` — read-only and never part of frontend implementation
- `resources/css/app-optimized.css`
- `public/css/pbs-theme.css`

### Routes and data source

The shell wraps all portal pages. Navigation data comes from the `menu` array in `config/adminlte.php`, then passes through AdminLTE filters including `RolesFilter`.

`RolesFilter` returns a menu item only when the authenticated user's numeric level is at least the item's `level`. Menu `url`, `route`, `submenu`, `topnav`, `topnav_user`, and `level` values are functional contracts.

### Important selectors and data attributes

- `.wrapper`
- `.main-header`
- `.navbar-nav`
- `.main-sidebar`
- `.brand-link`
- `.sidebar`
- `.nav-sidebar`
- `.nav-item`
- `.nav-link`
- `.content-wrapper`
- `.main-footer`
- `[data-widget="pushmenu"]`
- `[data-widget="treeview"]`
- `[data-widget="collapse"]` on collapsible cards throughout the portal
- `body.sidebar-open`
- `body.sidebar-collapse`
- dynamically created `#sidebar-overlay`

### JavaScript hooks

Inline JavaScript in `portal/master.blade.php` defines and invokes:

- `setupSidebar()`
- `addSidebarOverlay()`
- `removeSidebarOverlay()`
- `fixSidebarMenuItems()`
- a `DOMContentLoaded` handler
- a window `resize` handler

The script locates `[data-widget="pushmenu"]`, clones/replaces the toggle element, manipulates `.main-sidebar`, and toggles `sidebar-open` or `sidebar-collapse`. Those hooks must survive shell styling.

AdminLTE also depends on its own pushmenu, treeview, card-widget, active-menu, navbar, and user-menu conventions. Do not remove them even where portal code appears to duplicate AdminLTE behavior.

### Assets and plugin loading

`portal/master.blade.php` loads only the Vite CSS entry:

- `resources/css/app-optimized.css`

It does not load `resources/js/app.js`. AdminLTE's published master supplies jQuery, Bootstrap/AdminLTE JavaScript, Font Awesome, OverlayScrollbars, plugin sections, and other configured assets.

### Forms and links

The shell itself has no portal content form, but it includes:

- user menu and logout behavior
- impersonation exit route when impersonating
- top navigation items
- all sidebar URLs and route-based active states

### Permission contract

- Portal screens are authenticated unless a route explicitly says otherwise.
- Menu visibility is not permission enforcement by itself; route middleware remains authoritative.
- Preserve every configured `level` value.
- Do not modify `RolesFilter`.

### Functionality that must survive

- desktop expand/collapse
- mobile open/close and overlay dismissal
- menu hierarchy and accordion behavior
- active-route highlighting
- user menu and logout
- impersonation exit
- role-specific menu visibility
- fixed navbar/sidebar behavior
- content and footer rendering
- page-level `@section('css')`, `@section('js')`, and plugin sections
- Google Tag Manager markup and IDs

---

## 2. Dashboard container

### Blade file

- `resources/views/portal/profile.blade.php`

`resources/views/portal/index.blade.php` is not the active `/portal` dashboard. `PortalController::index()` delegates to `profile()`.

### Routes

- `GET /portal` — route name `portal.index`; `auth`, `bronze`, and `paid` context
- `GET /portal/profile` — route name `profile`; `auth`, `gold`, `level:4`, and `paid` context
- `POST /portal/profile/update` — route name `profile.update`; `auth`, `gold`, `level:4`, and `paid`

### Data source

`PortalController::profile()` loads the authenticated user and `properties`, retaining the `address`, `ecbViolations`, and `dobComplaints` relationships through the model's `withoutAll()` behavior. Existing relationship counts remain part of the property model contract.

The Blade template also creates missing `notifySettings`, `reminderSettings`, and `summarySettings` records during render. This is existing functional behavior inside the view and must not be moved, removed, or rewritten during presentation-only work.

### Important dashboard selectors

Primary tabs:

- `#propertyList`
- `#manageproperty`
- `#propertySummary`
- `#settings`
- Bootstrap tab links using `data-toggle="tab"`

Profile/sidebar hooks:

- `#profilephoto`
- `#editprofile`
- `#balance`
- `#totalecb`
- SweetAlert-generated fields `#email`, `#company`, `#address`, and `#phone`

Settings hooks inside the dashboard:

- `#notifications`, `#notificationgroup`, `#editnotifications`, `#savenotifications`
- `#reminders`, `#remindergroup`, `#editreminders`, `#savereminders`
- notification inputs `notificationsentby`, `dobnotification`, `ecbnotification`, `fdnynotification`, `hpdnotification`, `inspectionnotification`, `permitsnotification`
- reminder inputs `remindersentby`, `dobreminder`, `ecbreminder`, `fdnyreminder`, `hpdreminder`, `inspectionreminder`, `permitsreminder`
- currently commented summary hooks `summarysentby`, `week1`, `month1`, `month3`, and `savereports`

### Forms and AJAX

Profile photo and user details use `POST` AJAX to route `profile.update` with `FormData` and an `X-CSRF-TOKEN` header.

Payload keys used by the current profile handlers:

- profile image: `image`
- profile details: `email`, `phone`, `company`, `address`

Settings handlers dynamically create and submit normal `POST` forms:

- `settings.notify.update`: `_token`, `sent_by`, `dob`, `ecb`, `fdny`, `hpd`, `inspections`, `permits`
- `settings.reminder.update`: `_token`, `sent_by`, `dob`, `ecb`, `fdny`, `hpd`, `inspections`, `permits`
- `settings.summary.update`: `_token`, `sent_by`, `weekly`, `monthly`, `quarterly`

### Functionality that must survive

- all four primary dashboard tabs
- property table and profile deep links
- manage-property workflows
- summary totals and agency drill-down links
- settings enable/edit/save behavior
- profile image upload
- profile detail update
- user/account details and subscription presentation
- current creation of missing settings records during render

---

## 3. Property List

There are two different current Property List experiences. They must not be conflated.

### A. Dashboard Property List tab

#### Blade file and route

- `resources/views/portal/profile.blade.php`
- `GET /portal`, route `portal.index`
- also present at `GET /portal/profile`, route `profile`

#### Data source

`$user->properties` from `PortalController::profile()`.

#### Important selectors and links

- tab pane `#propertyList`
- table `#resultstable`
- DataTables reads `data-order='[[ 0, "desc" ]]'`
- each View link uses route `singleBuildingProfile` with `buildingid=$property->id`
- sync state depends on `$property->sync_at`

#### DataTables contract

- client-side table
- paging: on
- length change: on
- searching: on
- ordering: on
- info: on
- responsive: requested
- page length: 50
- copy, Excel, CSV, and PDF buttons requested
- existing custom `dom` layout

#### Functionality that must survive

- address display
- synchronized versus synchronizing indicator
- property-profile deep link
- search, sort, page length, pagination, information, and export controls where runtime assets support them

### B. Level-6 administrative Property List

#### Blade file and route

- `resources/views/portal/content/property-list.blade.php`
- `GET /portal/list`, route `property.list`
- `auth` plus `level:6`

#### Data source

`PropertyListController::index()` loads the authenticated user's properties with `withoutAll()->get()`. The table renders numerous Eloquent `*_count` attributes covering DOB, ECB, HPD, OATH, DEP, DOT, landmarks, permits, and 311 records.

These counts are not interchangeable with the active-summary values used elsewhere.

#### Important hooks

- table `#resultstable`
- DataTables client-side paging, search, sorting, responsive option, exports, and custom `dom`
- the table has a fixed semantic column order; no columns may be reordered without an explicit count-field review

#### Functionality that must survive

- all count fields and their current ordering
- level-6 restriction
- client-side table operations

---

## 4. Manage Properties

### Blade file and route context

- `resources/views/portal/profile.blade.php`
- dashboard tab `#manageproperty`
- available through the dashboard routes described above

### Data source

- current `$user->properties` for deletion
- property-address search results from web AJAX routes
- selected property objects stored in JavaScript before submission

### Tabs and important selectors

- `#manageproperty`
- `#addwithaddress`
- `#addwithbinnumber`
- `#deleteproperty`
- form wrapper `#alert-subscribe-form`
- address form `#PaneldenPropertyEkleme`
- address fields `#panel-boro`, `#panel-house-no`, `#panel-street-name2`
- add button `#subscribealertbtn`
- BIN selector `#search-by-bin`
- BIN add button `#addbybin`
- delete table `#resultstable3`
- legacy/stale script hooks `#PanelPropertyListesi`, `#addPropertyButton`, `#target`, and `table1`

Do not remove apparently stale hooks until the live production workflow has been exercised. The current file contains references whose corresponding active markup or initializer is not obvious.

### Address search AJAX

Select2 initializes `#panel-boro` and `#panel-street-name2`.

- Method: `POST`
- Route helper: `property.search.ac`
- Current URL: `/api/search-property`
- Payload: `borough`, `house`, `term`, `_token`
- Search begins after at least four typed characters and requires borough and house number
- Response records are expected to expose at least `bin`, `lhnd`, `hhnd`, `stname`, and, after selection, `zipcode`
- `processResults` maps `bin` to Select2 `id` and builds display text from address range and street name

### Add-property AJAX

- Method: `POST`
- Route helper: `add.property.to.user`
- Current URL: `/api/add-property-to-user`
- Authentication required
- Payload: `properties` array plus `_token`
- Selected address object uses keys including `id`/BIN, `house`, `street`, `zipcode`, and `text`
- Current response handling compares plain response text with `success` and `Email already in use.` and otherwise shows a generic error
- Successful address addition reloads the page

The address form's literal `action="include/form.php"` is bypassed by JavaScript with `preventDefault()`. Do not make that literal action active.

### Delete-property AJAX

- Trigger: inline `onclick="propertyDelete(propertyId)"`
- Confirmation: SweetAlert2
- Method: `POST`
- Route helper: `delete.single.property.from.user`
- Current URL: `/api/delete-single-property-from-user`
- Payload: `id`, `_token`
- Expected response strings: `success` or `fail`
- Successful deletion reloads the page

### Add-by-BIN caution

The UI contains `#search-by-bin` and `#addbybin`, but no complete active Select2 initializer or click handler for those selectors was found in the current `profile.blade.php`. The redesign must preserve the markup and verify production behavior before changing or removing it. The backend route `property.searchbybin.ac` exists, but wiring it is a functional change and is outside presentation-only phases.

### Other links and plugins

- `addpropertyrequest` opens “Add Property For Me” in a new tab
- page imports tagsinput, a local typeahead script, Select2 CSS, and Select2 JavaScript
- SweetAlert2 is used for confirmation, success, and error states
- delete table `#resultstable3` uses the same main client-side DataTables settings as `#resultstable`

### Functionality that must survive

- address search payload and result mapping
- property selection state
- add-property payload and plain-text response handling
- delete confirmation and deletion payload
- CSRF behavior
- post-success reload behavior
- existing tab navigation and “Add Property For Me” link
- current add-by-BIN markup pending baseline verification

---

## 5. Property Summary

### Blade file and route context

- `resources/views/portal/profile.blade.php`
- dashboard tab `#propertySummary`
- `GET /portal`, route `portal.index`, and `/portal/profile`, route `profile`

### Data source

The Blade template directly queries `property_active_summary` for the authenticated `user_id`. This query is existing mixed presentation/functionality and must not be moved or changed during a presentation-only phase.

Current columns, in order:

1. Address
2. DOB violations
3. DOB complaints
4. ECB hearings
5. ECB violations
6. ECB penalty amount
7. HPD violations
8. HPD complaints
9. HPD emergency repairs
10. 311 service requests

### Important selectors

- tab `#propertySummary`
- table `#resultstable2`
- external total targets `#totalecb` and `#balance` in the profile summary card

### DataTables contract

- client-side, `serverSide: false`
- paging, length change, searching, ordering, and info enabled
- responsive requested
- page length 50
- export buttons requested
- footer callback sums columns 1–9 by hard-coded index
- column 5 is formatted as currency
- footer totals also populate `#totalecb` from column 3 and `#balance` from column 5

Do not change the column order or link markup without reviewing `$.parseHTML()` usage in the footer callback.

### Links

- `downloadSummary` — `GET /portal/summary`; generates/returns the existing PDF summary and is level-3 gated
- `liveViolationSingle`
- `DOBcomplaintsSingle`
- `ECBliveHearingsSingle`
- `ECBviolationsSingle`
- `HPDliveViolationsSingle`
- `HPDcomplaintsSingle`
- `HPDrepairsSingle`
- `SERVICErequests311Single`

Every agency drill-down passes `buildingid=$property->id`.

### Functionality that must survive

- exact active-summary values
- exact property IDs used by agency links
- PDF summary link
- totals and currency formatting
- table operations and export controls
- external profile-card totals

---

## 6. Property Overview

### Blade file and route

- `resources/views/portal/content/building-quickview.blade.php`
- `GET /portal/buildingQuickview`, route `buildingQuickview`
- `auth`, `gold`, and `level:4`

### Data sources

`PortalController::buildingQuickview()` loads the authenticated user and properties while retaining address and ECB-violation relationships.

The Blade view then:

- directly queries `property_active_summary` for the authenticated user
- loops over `$user->properties` to emit Leaflet marker data from each property's latitude, longitude, address, borough, and image

### Important selectors and classes

- `#map_wrapper`
- `#map_canvas`
- `.mapping`
- `.info_content`
- `.leaflet-popup-content`
- table `#resultstable2`
- AdminLTE card collapse hook `data-card-widget="collapse"`

### Map contract

- Leaflet 1.9.4 CSS and JavaScript are loaded from `unpkg.com`
- the map is initialized against `map_canvas`
- OpenStreetMap tiles and attribution are used
- markers are created only for properties with usable latitude and longitude
- popup HTML contains the property address and image
- marker bounds are fitted and zoom is capped at 15

Do not change the Blade-to-JavaScript data mapping, coordinate interpretation, marker condition, tile provider, or popup data contract during a visual-only phase.

### Table and links

`#resultstable2` renders the same ten active-summary columns and agency drill-down route helpers documented for Property Summary.

Its DataTables footer callback also relies on hard-coded columns 1–9. Client-side paging, searching, sorting, information, page length 50, export buttons, and responsive behavior are requested.

### Forms and AJAX

None in the current Property Overview view. Map data is server-rendered, not fetched through a browser AJAX endpoint.

### Functionality that must survive

- all property markers and popup content
- fit-bounds and zoom behavior
- summary values, totals, currency, agency links, and table behavior
- level-4/gold access
- Leaflet and OpenStreetMap attribution requirements

---

## 7. Building Profiles

### Blade file and route

- `resources/views/portal/content/buildingProfiles.blade.php`
- `GET /portal/buildingProfiles`, route `buildingProfiles`
- `auth`, `gold`, and `level:4`

### Data source

`BuildingProfileController::buildingProfiles()` loads the authenticated user and their properties, retaining the address relationship.

### Important selectors and links

- wrapper `#propertyList`
- table `#resultstable`
- property links use `singleBuildingProfile` with `buildingid=$property->id`
- card collapse uses `data-card-widget="collapse"`

Large portions of this file are commented legacy profile UI. Do not reactivate, delete, or use that commented markup as a redesign source without a separate decision.

### DataTables contract

- paging: on
- length change: on
- searching: off
- ordering: on
- info: on
- responsive: requested
- page length: 50
- default table `data-order` is ascending on column 0

### Forms and AJAX

None in the active portion of the view.

### Functionality that must survive

- complete authenticated property list
- row numbering
- address display
- profile deep links with the current property ID
- search remaining disabled unless explicitly approved
- role and membership restrictions

---

## 8. Single Property Profile

### Blade file and route

- `resources/views/portal/content/singleBuildingProfile.blade.php`
- `GET /portal/buildingProfiles/{buildingid}`, route `singleBuildingProfile`
- `auth`, `gold`, and `level:4`

### Data sources

`BuildingProfileController::singleBuildingProfile()`:

1. Loads the authenticated user's properties while retaining addresses.
2. Selects the requested property from that user's collection. An unowned/missing ID redirects to `buildingProfiles`.
3. Performs a server-side Guzzle `GET` to the ArcGIS MAPPLUTO FeatureServer using the property's BBL.
4. Passes `$user`, `$property`, and `$features` to the Blade view.

The Blade view directly queries `property_active_summary` for the selected property and user. It also reads property notes, documents, image/contact data, helper-derived links, Laravel Storage URLs, file sizes, and the ArcGIS feature properties.

Do not alter ownership selection, the ArcGIS request/data mapping, the direct summary query, or storage behavior during the frontend phase.

### Important layout and plugin hooks

- property selector wrapper `#propertyList`
- property selector table `#resultstable`
- selected property row class `.selected`
- photo card `#ortakolon`
- main photo `#photo`
- secondary photo `#photo2`
- summary table `#resultstable2`
- details card `#sagkolon`
- AdminLTE `data-card-widget="collapse"`
- notes tabs `#notlar`, `#takenote-tab`, `#mynotes-tab`, `#notlarContent`, `#newnote`, `#savednotes`
- document tabs `#documents`, `#uploadfile-tab`, `#myuploadedfiles-tab`, `#filesContent`, `#newfile`, `#uploadedfiles`
- file input `#document`
- delete button `#document-delete`
- repeated legacy collapse hooks `#accordion` and `#collapseOne`
- PLUTO/display IDs beginning with `js`, including `#jspropertyadres`, `#jsboro`, `#jsblock`, `#jslot`, `#jsZoneDist1`, `#BBL`, `#jsowner`, `#jslanduse`, `#jsyearbuilt`, and `#jsbisweb`

### Navigation and detail links

- property selector: `singleBuildingProfile` with `buildingid`
- agency summary links use the same building-specific route helpers as Property Summary
- `#jsbisweb` links to `$property->bisweb()` and opens the existing external BIS destination
- document downloads use `Storage::url($doc->path)`

### Photo forms

Photo recovery/delete-style action:

- Method: `POST`
- Route: `property.photo.delete`
- Parameter: selected property ID in the route

Photo upload:

- Method: `POST`
- Route: `property.photo.update`
- Parameter: selected property ID in the route
- Encoding: multipart
- Field: `photo`
- submit hook: `#inputGroupFileAddon04`

The `.custom-file-input` change handler updates the neighboring `.custom-file-label` text.

### Support ticket form

- Method: `POST`
- Route: `building.ticket.post`
- CSRF required
- Hidden field: `address`

### Dedicated-contact AJAX

- Trigger: inline `onclick="dedicatedcontact(name, phone, address, propertyId)"`
- UI: SweetAlert2-generated form
- Method: `POST`
- Route: `property.dedicatedcontact.update`
- Header: `X-CSRF-TOKEN`
- `FormData` keys: `property_id`, `contact_name`, `contact_number`, `contact_address`
- SweetAlert field IDs: `#contact_name`, `#contact_number`, `#contact_address`
- success reloads the page

Important implicit dependency: the handler reads `$('#property_id')`. The SweetAlert hidden `property_id` input has a `name` but no `id`, while the New Note form has `id="property_id"`. The current handler can therefore depend on the note form's hidden field. Preserve that ID and DOM availability during visual work; correcting the coupling is a functional JavaScript change requiring explicit approval and dedicated testing.

### Notes forms

Create note:

- Method: `POST`
- Route: `property.notes.store` with `buildingid`
- CSRF required
- Fields: `property_id`, `title`, `content`
- IDs: `#property_id`, `#title`, `#content`

Delete note:

- Method: `POST`
- Route: `property.notes.destroy` with `buildingid`
- CSRF required
- Hidden field: `note_id`

### Document forms

Upload document:

- Method: `POST`
- Route: `property.documents.store` with `buildingid`
- CSRF required
- Encoding: multipart/form-data
- Fields: `property_id`, `type`, `document`

Delete document:

- Method: `POST`
- Route: `property.documents.destroy` with `buildingid`
- CSRF required
- Hidden field: `document_id`

### DataTables contract

Property selector `#resultstable`:

- paging and length change enabled
- searching disabled
- ordering and info enabled
- responsive requested
- page length 50

Summary `#resultstable2`:

- paging disabled
- length change disabled
- searching enabled
- ordering and info enabled
- responsive requested
- page length option remains 50 even though paging is off

### Functionality that must survive

- ownership protection and redirect for invalid property IDs
- property switching and selected-row state
- building photos and photo actions
- active compliance summary and agency drill-downs
- ArcGIS/PLUTO property and neighborhood values
- external BIS link
- dedicated-contact display/update
- support-ticket creation
- notes create/list/delete
- documents upload/list/download/delete and file-size display
- all CSRF, field-name, route, storage, and reload behavior

---

## Known contract conflicts and unresolved observations

These are documentation findings, not authorization to fix them:

1. `profile.blade.php` performs database mutations and a direct summary query inside the view, so the dashboard cannot be treated as presentation-only at whole-file scope.
2. Property Overview and Single Property Profile also query `property_active_summary` directly in Blade.
3. Dashboard Property Summary and Property Overview use active-summary rows, while the level-6 Property List uses Eloquent relationship counts. Their figures may have different meanings.
4. The add-by-BIN controls are present, but complete active JavaScript wiring was not found in `profile.blade.php`.
5. Manage Properties contains references to apparently stale selectors and variables such as `#PanelPropertyListesi` and `table1`.
6. The dedicated-contact handler has an implicit dependency on the New Note form's `#property_id`.
7. Repeated IDs such as `#accordion` and `#collapseOne` exist in property notes/documents and must not be “cleaned up” during visual work without behavioral testing.
8. Several pages request DataTables Buttons and responsive behavior, while `config/adminlte.php` appears to configure only core DataTables assets. Verify actual production runtime before changing table controls.
9. `resources/js/app.js` duplicates sidebar-oriented behavior but is not loaded by the portal.
10. AdminLTE menu configuration contains both presentation and authorization-sensitive `level` metadata.

Resolve or baseline these observations before the phase that touches the corresponding screen. Do not fix them opportunistically during visual work.
