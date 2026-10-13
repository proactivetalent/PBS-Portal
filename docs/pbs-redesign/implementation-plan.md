# PBS Portal Frontend Redesign Implementation Plan

## Objective

Deliver approximately 50–70% of the desired PBS Member Portal UX improvement through presentation-only changes while preserving Laravel behavior, routes, permissions, forms, AJAX, DataTables semantics, maps, storage actions, and backend contracts.

This plan does not authorize implementation. Each phase requires separate approval and must be completed and verified before the next major phase begins.

## Permanent phase gates

Before every phase:

1. Read the root `AGENTS.md`.
2. Review `docs/pbs-redesign/frontend-contracts.md` for every screen in scope.
3. Run `git status --short` and record all pre-existing changes.
4. Re-inspect current selectors, routes, forms, scripts, and plugin configuration; documentation may lag behind user changes.
5. Capture baseline screenshots and behavior for the approved screens at desktop, tablet, and mobile widths.
6. Identify representative users for every relevant role, membership, and `level` gate.
7. Define the exact files authorized for modification.

After every phase:

1. Review the diff and confirm no backend or unrelated file changed.
2. Verify authenticated navigation and role visibility.
3. Exercise every form, AJAX action, table, link, map, and modal touched by the phase.
4. Compare row counts, values, totals, default filters, links, and payloads with the baseline.
5. Run the approved build/test checks in a prepared environment.
6. Record known regressions or blockers before moving on.

Do not run migrations or modify database data as part of verification.

---

## Phase 1: Design system and application shell

### Scope

- Establish portal color, typography, spacing, radius, elevation, focus, form, badge, alert, and responsive tokens.
- Modernize the visual treatment of the fixed navbar, sidebar, brand area, content wrapper, page headers, and footer.
- Improve mobile sidebar presentation and responsive content widths.
- Keep AdminLTE as the structural and behavioral compatibility layer.
- Prefer CSS and portal-level wrappers over vendor-template changes.

### Files likely involved

- `resources/css/app-optimized.css`
- portal-specific portions of `public/css/pbs-theme.css`
- `resources/views/portal/partials/footer.blade.php`
- `resources/views/portal/master.blade.php` only if approved CSS/wrapper changes cannot be made elsewhere
- `resources/views/vendor/adminlte/**` only as a last resort and with explicit file-level approval
- `config/adminlte.php` only for approved presentational configuration; menu URLs and `level` values remain immutable

### Major risks

- global CSS and existing `!important` rules causing regressions across unrelated modules
- breaking AdminLTE pushmenu/treeview/card behavior
- changing sidebar widths without matching content-wrapper offsets
- breaking mobile overlay/open-state behavior
- published AdminLTE overrides diverging from the package
- accidental changes to menu permissions while editing visual configuration

### Functionality that must remain unchanged

- all menu destinations and hierarchy
- all `level` values and `RolesFilter` behavior
- active-route highlighting
- desktop collapse and mobile open/close
- navbar user menu, logout, and impersonation exit
- page-level CSS, JS, and plugin sections
- fixed-layout behavior and content rendering
- GTM markup
- current asset loading; do not enable `resources/js/app.js`

### Verification checklist

- [ ] Compare full menu for representative level-3, level-4, level-5, and level-6 users.
- [ ] Verify every parent menu expands/collapses and every visible link retains its URL.
- [ ] Verify desktop expanded and collapsed sidebar states.
- [ ] Verify mobile open, overlay click, route navigation, resize, and back-button behavior.
- [ ] Verify navbar user menu, logout, impersonation exit, logo, preloader, content wrapper, and footer.
- [ ] Spot-check dashboard, property profile, one compliance table, support, and HPD mailing for CSS regressions.
- [ ] Check keyboard focus visibility, contrast, zoom, and long menu labels.
- [ ] Confirm Vite JavaScript remains unloaded.

---

## Phase 2: Shared visual primitives and table visual system

### Scope

- Create view-only primitives for page headings, section headers, KPI cards, alerts, empty states, status badges, form-group layout, modal chrome, and table containers.
- Establish a shared visual table toolbar and responsive overflow treatment.
- Standardize visual spacing without centralizing functional table JavaScript yet.
- Pilot primitives on low-risk markup before applying them broadly.

### Files likely involved

- `resources/css/app-optimized.css`
- portal-specific portions of `public/css/pbs-theme.css`
- new files under `resources/views/portal/partials/` or a separately approved Blade component directory
- one explicitly approved low-risk pilot view

### Major risks

- creating components whose markup changes existing IDs, names, data attributes, or DOM nesting expected by scripts
- applying one DataTables layout to pages with different functional configurations
- masking missing DataTables Buttons/Responsive assets through styling
- badges implying severity not defined by current data
- generic component selectors affecting Ticketit or HPD mailing forms

### Functionality that must remain unchanged

- every DataTables initializer and its target selector
- column order, filters, footer callbacks, exports, search, sorting, pagination, and page length
- all form fields and submission behavior
- Bootstrap tab, modal, collapse, and custom-file behavior
- displayed values and status meanings

### Verification checklist

- [ ] Confirm primitives render without changing generated form names or routes.
- [ ] Compare table header count and column order before/after.
- [ ] Verify search, sorting, pagination, length selector, information text, totals, and exports on the pilot table.
- [ ] Verify horizontal overflow and small-screen readability without removing data.
- [ ] Verify empty and populated states.
- [ ] Verify focus, hover, active, disabled, error, and validation styles.
- [ ] Confirm no functional JavaScript was migrated or consolidated.

---

## Phase 3: Dashboard

### Scope

- Modernize the dashboard page hierarchy and responsive composition.
- Improve the user/account summary card and existing portfolio/summary overview.
- Present existing values as clearer KPI or summary cards where no new calculation is needed.
- Improve the four primary tab controls and their empty states.
- Limit property-management workflow redesign to visual framing; its detailed interaction treatment belongs to Phase 4.

### Files likely involved

- `resources/views/portal/profile.blade.php`
- `resources/css/app-optimized.css`
- portal-specific portions of `public/css/pbs-theme.css`
- new view-only dashboard partials, if approved

### Major risks

- `profile.blade.php` creates settings records and queries `property_active_summary` during render
- multiple distinct workflows share one 1,500-line template
- changing tab IDs or DOM relationships
- breaking `#balance` and `#totalecb`, which are populated by the summary table footer callback
- profile and settings SweetAlert/AJAX handlers relying on exact selectors
- dashboard changes inadvertently altering Manage Properties before its baseline is complete

### Functionality that must remain unchanged

- `/portal` and `/portal/profile` behavior and access gates
- settings-record initialization in the Blade file
- all four tabs and their current content availability
- profile photo and profile detail AJAX
- notification/reminder/summary settings submissions
- property list, property management, active-summary data, links, totals, and PDF link
- all table configuration

### Verification checklist

- [ ] Load `/portal` for each supported membership/level combination.
- [ ] Verify Property List, Manage Properties, Property Summary, and Settings tabs.
- [ ] Verify displayed property count, balance, hearing total, account details, and subscription details.
- [ ] Upload a profile image in the approved test environment and verify the current response/reload path.
- [ ] Update each profile field independently and verify payload keys.
- [ ] Verify notification/reminder controls enable, save, and retain values.
- [ ] Compare property-summary values and footer totals with baseline.
- [ ] Verify PDF summary and every agency drill-down link.
- [ ] Confirm Manage Properties behavior is unchanged even if its presentation has not yet been redesigned.

---

## Phase 4: Properties portfolio experience

### Scope

- Create a consistent visual family for portfolio list, property management, compliance summary, map overview, and Building Profiles.
- Redesign the dashboard Property List and Manage Properties sections.
- Redesign Property Overview and its map/table composition.
- Redesign Building Profiles and the level-6 administrative Property List where approved.
- Visually clarify Portfolio, Compliance Summary, and Map experiences while retaining their existing routes and data sources.
- Do not consolidate routes or count sources.

### Files likely involved

- property-related regions of `resources/views/portal/profile.blade.php`
- `resources/views/portal/content/building-quickview.blade.php`
- `resources/views/portal/content/buildingProfiles.blade.php`
- `resources/views/portal/content/property-list.blade.php`, only if the level-6 screen is included
- `resources/css/app-optimized.css`
- portal-specific portions of `public/css/pbs-theme.css`
- new view-only property partials

### Major risks

- treating active-summary counts and Eloquent relationship counts as equivalent
- breaking Select2 address result mapping or add/delete payloads
- activating the literal `include/form.php` form action
- removing apparently stale hooks before verifying production use
- incomplete add-by-BIN wiring
- changing DataTables column order or footer totals
- changing Leaflet container IDs or emitting invalid Blade-generated JavaScript
- moving map DOM while initialization timing remains unchanged
- confusing user-facing visual consolidation with backend consolidation

### Functionality that must remain unchanged

- property search method, payload, result keys, and four-character threshold
- property add/delete route helpers, payload keys, response strings, CSRF, confirmations, and reloads
- “Add Property For Me” destination
- current add-by-BIN markup and behavior pending a separate decision
- profile deep links and property IDs
- active-summary values, links, and footer totals
- level-6 property count matrix and permissions
- Leaflet coordinates, markers, popups, fit-bounds, max zoom, tiles, and attribution
- Building Profiles search-off setting and profile links

### Verification checklist

- [ ] Compare portfolio property counts and addresses across all property views.
- [ ] Search by address and verify request payload and Select2 response mapping.
- [ ] Add a property in an approved test account and verify success/error handling and reload.
- [ ] Delete a property in an approved test account and verify confirmation, payload, response, and reload.
- [ ] Exercise or explicitly record the baseline status of add-by-BIN.
- [ ] Verify all property-profile and agency drill-down links.
- [ ] Compare Property Summary and Property Overview totals.
- [ ] Verify map marker count, popup address/image, missing coordinates, fit bounds, and zoom.
- [ ] Verify level-6 Property List count columns and role restriction.
- [ ] Confirm no controller, route, query, or data source was consolidated.

---

## Phase 5: Single Property Profile

### Scope

- Reorganize the selected property's identity, photo, compliance summary, PLUTO/building details, neighborhood details, dedicated contact, notes, and documents.
- Improve responsive layout, scanability, task prioritization, and empty states.
- Keep all current forms and server-side data paths intact.

### Files likely involved

- `resources/views/portal/content/singleBuildingProfile.blade.php`
- `resources/css/app-optimized.css`
- portal-specific portions of `public/css/pbs-theme.css`
- new property-profile presentation partials, if their inputs and form contracts remain unchanged

### Major risks

- synchronous ArcGIS request can block the entire page
- direct `property_active_summary` query in Blade
- implicit dedicated-contact dependency on the note form's `#property_id`
- repeated IDs in notes/documents
- multiple POST forms and multipart uploads in one page
- changing selected-row or property-switch behavior
- breaking Storage links or helper-generated external URLs
- AdminLTE tabs and collapsible cards relying on exact data attributes

### Functionality that must remain unchanged

- property ownership check and fallback redirect
- ArcGIS/PLUTO fields and external BIS link
- selected-property switcher
- photo recovery/upload
- compliance summary values and agency links
- ticket creation with hidden address
- dedicated-contact update payload and reload
- note create/list/delete
- document upload/list/download/delete and file-size display
- every CSRF token, route parameter, field name, enctype, and method

### Verification checklist

- [ ] Open each profile from Dashboard, Building Profiles, and direct URL.
- [ ] Verify an invalid or unowned property ID follows the existing redirect behavior.
- [ ] Compare all summary values and agency links.
- [ ] Verify PLUTO and neighborhood values plus external BIS link.
- [ ] Verify both building photos and photo forms.
- [ ] Create a ticket and confirm the address field survives.
- [ ] Update dedicated contact and inspect `property_id` handling.
- [ ] Create and delete a note.
- [ ] Upload, download, and delete a document; compare type and size display.
- [ ] Verify tabs, collapsible cards, selected row, empty notes, and empty documents.
- [ ] Test narrow mobile layout without moving functional forms outside their expected DOM context.

---

## Phase 6: DOB, ECB/OATH, FDNY, and HPD

### Scope

- Apply the approved table visual system to compliance modules.
- Improve agency navigation, page hierarchy, status/severity display, filters, empty states, and responsive table handling.
- Pilot one representative DOB page and one representative ECB page before broad rollout.
- Preserve existing agency terminology and all current filtering definitions.

### Files likely involved

- approved DOB, ECB, FDNY, and HPD Blade templates under `resources/views/portal/content/`
- the approved legacy exception under `resources/views/portal/models/`, if its route is included
- `resources/css/app-optimized.css`
- portal-specific portions of `public/css/pbs-theme.css`
- new view-only compliance/table partials

### Major risks

- hard-coded DataTables column indexes
- custom `$.fn.dataTable.ext.search` functions
- default OPEN/CLOSED or corrected/uncorrected filters
- date/90-day and multi-field classification rules embedded in JavaScript
- DOB live violations using AJAX data keys rather than server-rendered rows
- large client-side datasets
- visually invented severity that conflicts with agency status meaning

### Functionality that must remain unchanged

- every table's exact column/data-key mapping
- default filters and filter button semantics
- search, sort, page length, pagination, exports, totals, and responsive option
- AJAX URL and JSON structure for DOB live violations
- address/building-specific routes and IDs
- role and membership gates
- displayed source data and status logic

### Verification checklist

- [ ] Record a per-screen column-index and filter map before editing.
- [ ] Compare unfiltered and default-filtered row counts.
- [ ] Exercise every custom filter independently and in combinations.
- [ ] Verify search, sort, page length, pagination, reset, and exports.
- [ ] Verify DOB live-violation AJAX for portfolio and single-building routes.
- [ ] Compare OPEN/CLOSED, corrected/uncorrected, defaulted, imposed, and agency classifications with baseline.
- [ ] Verify every property/building link.
- [ ] Test large tables and narrow screens.
- [ ] Confirm no status logic was moved to CSS or changed for visual convenience.

---

## Phase 7: Inspections and Permits

### Scope

- Apply the proven compliance visual system to inspections and permits.
- Improve forms and detail/edit views for Other Inspections without altering their submission contracts.
- Standardize visual status, scheduling, date, document, and action treatments using existing data only.

### Files likely involved

- DOB, DEP, FDNY, facade, elevator, LL84, LL87, LL152, and other-inspection views under `resources/views/portal/content/`
- DOB/FDNY permit views under `resources/views/portal/content/`
- `resources/views/portal/content/Otherinspections.blade.php`
- `resources/views/portal/content/Otherinspections-edit.blade.php`
- approved legacy permit views under `resources/views/portal/models/`
- shared portal CSS and approved view-only partials

### Major risks

- inspection and permit screens reuse compliance relationships and count semantics
- create/edit forms may contain backend validation-coupled field names
- date and status filters may depend on column indexes
- file or action controls may use inline handlers
- inconsistent legacy views may not support a single markup abstraction

### Functionality that must remain unchanged

- all form methods, routes, CSRF, hidden IDs, field names, validation display, and redirects
- table columns and DataTables behavior
- building-specific routes
- existing date/status values and classifications
- role restrictions

### Verification checklist

- [ ] Inventory every approved form before changing markup.
- [ ] Submit valid and invalid forms in an approved test environment.
- [ ] Verify old-input and validation-error presentation.
- [ ] Verify edit, update, cancel/back, and destructive confirmation behavior.
- [ ] Compare table rows, filters, sorting, pagination, links, and exports.
- [ ] Test mobile forms and wide tables.
- [ ] Confirm no backend validation or date/status logic changed.

---

## Phase 8: Support, Settings, HPD Mailings, and secondary modules

### Scope

- Modernize Ticketit list/create/show/edit/comment workflows through published view overrides only.
- Modernize member and administrative settings presentation.
- Improve HPD mailing list, large multi-tab forms, show/print-style content, editable egress table, and file-management presentation.
- Apply established primitives to approved secondary modules.

### Files likely involved

- `resources/views/vendor/ticketit/**`
- settings regions of `resources/views/portal/profile.blade.php`
- `resources/views/portal/settings/**`
- `resources/views/portal/hpdmailing/**`
- approved secondary views under `resources/views/portal/`
- shared portal CSS and approved view-only partials

No Ticketit backend/package logic, settings controllers, HPD mailing controllers/models, validation, routes, or storage code may be changed.

### Major risks

- published Ticketit overrides depend on package route names, form helpers, permissions, Summernote, and modal lifecycle
- dashboard member settings dynamically build forms in JavaScript
- administrative settings are higher-role CRUD forms
- HPD mailing views are very large and combine government-form layout, editable DataTables state, JSON-backed egress data, uploads, and deletes
- print/document layout can be damaged by global portal styles
- secondary modules may contain additional undocumented inline behavior

### Functionality that must remain unchanged

- ticket list visibility, create, view, edit, reply, close/reopen, assignment, priority, category, and status behavior
- Summernote and modal lifecycle
- member and administrative settings field names, types, routes, methods, permissions, and validation
- HPD mailing create/show/edit/delete
- HPD mailing file upload/download/delete
- editable egress table and its serialized data
- all storage URLs and generated/printable document presentation

### Verification checklist

- [ ] Test tickets as member, agent, and administrator where supported.
- [ ] Verify create, edit modal, reply, complete/reopen, delete confirmation, and Summernote.
- [ ] Verify member notification/reminder/summary settings.
- [ ] Verify administrative settings CRUD with representative field types and role restrictions.
- [ ] Create, validate, edit, view, and delete an HPD mailing in an approved test environment.
- [ ] Verify mailing tabs, all retained inputs, editable egress data, and printable layout.
- [ ] Upload, download, and delete an HPD mailing PDF.
- [ ] Spot-check every secondary module affected by shared CSS.
- [ ] Confirm no Ticketit package/backend or storage behavior changed.

---

## Items to resolve before Phase 1

Phase 1 should not begin until the following are decided or baselined:

1. Identify representative test accounts for every member tier and numeric access level.
2. Establish a non-production environment with representative properties, compliance records, notes, documents, tickets, and mailings.
3. Confirm the supported browser/device matrix and accessibility target.
4. Capture baseline screenshots and behavior for the priority screens.
5. Confirm the current runtime availability of DataTables Buttons and Responsive extensions.
6. Establish a repeatable Laravel/Artisan test boot process; current application boot can attempt a PostgreSQL connection even for simple Artisan commands.
7. Decide whether Phase 1 may edit `portal/master.blade.php` or must be CSS-only.
8. Confirm whether portal-specific styles in `public/css/pbs-theme.css` are consumed outside the portal.
9. Decide how to measure success: task completion, mobile usability, accessibility, support burden, or another agreed rubric.
10. Keep route consolidation, server-side pagination, new KPIs, JavaScript architecture changes, and backend cleanup outside the frontend-only phase.
