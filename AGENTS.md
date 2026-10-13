# PBS Member Portal Frontend Redesign Guardrails

## Scope

These rules apply to the entire repository. They govern the PBS Member Portal frontend redesign and remain in force unless the user explicitly authorizes an exception for a specific task.

## Project goal

Modernize the PBS Member Portal UI and UX substantially while preserving all existing Laravel backend behavior and existing functionality.

The phase-one target is approximately 50–70% UX improvement through Blade, CSS, and carefully scoped frontend JavaScript changes. The initial redesign is a presentation modernization, not a backend rewrite or SPA migration.

## Existing user-owned changes

The working tree contains user-owned modifications to:

- `routes/web.php`
- `app/Models/DobNowApprovedPermits.php`

Never overwrite, revert, reformat, stage, or otherwise change these files as part of the frontend redesign. Treat any other pre-existing working-tree changes as user-owned unless the user states otherwise.

## Backend: strictly off limits unless explicitly authorized

Do not modify:

- `app/Http/Controllers/**`
- `app/Models/**`
- `app/User.php`
- `app/Http/Middleware/**`
- `app/Helpers/**`
- `app/Filters/RolesFilter.php`
- `routes/**`
- `database/**`
- jobs
- queues
- notifications
- console commands
- service providers
- authentication logic
- authorization logic
- database queries in backend PHP
- migrations
- database schema
- API behavior or contracts
- backend validation
- Ticketit backend or package logic
- storage data
- generated documents
- `composer.lock`
- `package-lock.json`

Do not alter existing route names, URLs, HTTP methods, form field names, CSRF behavior, authentication rules, authorization levels, or middleware requirements.

Do not modify dependency manifests, Vite configuration, or the asset-loading architecture unless the user explicitly approves that work. This includes:

- `package.json`
- `composer.json`
- `vite.config.js`
- `webpack.mix.js`

Do not install or update dependencies unless explicitly instructed.

## Frontend areas generally safe

The following may be modified during an explicitly approved implementation phase:

- `resources/css/app-optimized.css`
- portal-specific styling in `public/css/pbs-theme.css`
- `resources/views/portal/partials/footer.blade.php`
- new Blade partials or components created specifically for the redesign
- presentational wrappers, headings, grid structures, typography, cards, badges, spacing, and responsive markup inside approved Blade templates

Even in these areas, preserve all existing IDs, `name` attributes, route helpers, data attributes, form fields, CSRF fields, and JavaScript hooks unless a specific change is approved.

Use scoped portal selectors. Avoid adding broad global rules or more `!important` declarations when a narrowly scoped rule will work.

## Proceed with caution: mixed presentation and functionality

Treat these as mixed files:

- `resources/views/portal/master.blade.php`
- `config/adminlte.php`
- `resources/views/vendor/adminlte/**`
- `public/css/karbonsoft.css`
- `resources/js/app.js`
- `resources/views/portal/profile.blade.php`
- `resources/views/portal/content/building-quickview.blade.php`
- `resources/views/portal/content/singleBuildingProfile.blade.php`
- all compliance table Blade templates
- `resources/views/vendor/ticketit/**`
- `resources/views/portal/hpdmailing/**`
- `resources/views/portal/settings/**`

Do not change functional JavaScript, Blade-side queries or mutations, form submission behavior, AJAX behavior, data mapping, storage handling, map data, or filtering semantics in these files merely to improve appearance.

Before editing an approved mixed file, consult `docs/pbs-redesign/frontend-contracts.md` and inspect the current implementation again. The contract document is a safety guide, not a substitute for checking the live file.

## DataTables safety

Many compliance pages and summary tables rely on hard-coded table column indexes.

- Do not reorder, add, or remove table columns without reviewing every associated DataTables initializer, footer callback, custom search function, filter button, export definition, and AJAX data mapping.
- Do not rename IDs or classes used by DataTables initialization.
- Do not change AJAX response keys or DataTables data keys.
- Do not change search or filter semantics.
- Do not change default filters.
- Do not change pagination, sorting, page length, export behavior, or server-side/client-side mode unless explicitly approved.
- Visual styling of tables, toolbars, overflow containers, badges, and responsive presentation is permitted in an approved phase.

After any table-related change, verify row count, column order, default filter, manual filters, global search, sorting, pagination, totals, building-specific links, and exports where present.

## JavaScript safety

`resources/js/app.js` is currently not loaded by the main portal layout.

- Do not enable it during the initial redesign phases.
- Do not change the asset-loading architecture.
- Do not migrate inline JavaScript merely for cleanup.
- Do not introduce React, Vue, Alpine, Livewire, Inertia, or another frontend framework.
- Do not replace jQuery or Bootstrap behavior.
- Do not rename selectors used by existing inline handlers.
- Preserve existing AJAX methods, payload keys, response expectations, CSRF headers/tokens, and reload behavior.

JavaScript changes require explicit approval and must be limited to the approved screen and behavior.

## AdminLTE strategy

AdminLTE remains the underlying compatibility layer during the frontend-only redesign.

- Do not remove AdminLTE.
- Do not rewrite the shell architecture.
- Preserve AdminLTE menu generation, treeview, pushmenu, cards, plugin sections, active-route handling, and user menu behavior.
- Preserve all menu URLs and `level` values in `config/adminlte.php`.
- Preserve `RolesFilter` behavior.
- Treat files under `resources/views/vendor/adminlte/**` as published package overrides and edit them only when an approved shell change cannot be implemented safely through portal CSS or the portal master layout.

The goal is to modernize AdminLTE's presentation while retaining it as a compatibility layer.

## Design principles

The redesigned portal should feel like a modern NYC property-compliance SaaS platform rather than an internal government or database administration screen.

Prioritize:

- clarity over raw data density
- property-owner mental models over agency bureaucracy
- strong visual hierarchy
- actionable information
- clear severity and status treatment
- responsive layouts
- accessible typography and interaction states
- consistent spacing
- minimal visual clutter
- a premium but conservative B2B visual language

Avoid:

- excessive gradients
- excessive glassmorphism
- decorative animation
- trendy styling that reduces information clarity
- invented metrics or statuses
- unnecessary changes to functional workflows

## Phase implementation rule

Work one explicitly approved phase at a time. Do not redesign multiple major modules in one uncontrolled pass.

Before modifying a screen:

1. Identify its current Blade file and route.
2. Identify its data source and role/middleware requirements.
3. Inventory IDs, classes, links, route helpers, forms, field names, CSRF usage, AJAX calls, JavaScript hooks, DataTables configuration, and map/plugin dependencies.
4. Compare the inventory with `docs/pbs-redesign/frontend-contracts.md` and update documentation if an approved implementation reveals a missing contract.
5. Preserve all functional contracts.
6. Change presentation only unless the user explicitly authorizes a functional change.
7. Run the relevant verification checklist after the change.

## Verification and repository hygiene

- Inspect `git status --short` before and after each implementation phase.
- Do not revert or reformat unrelated changes.
- Do not run migrations, destructive commands, or commands that modify data.
- Do not create commits unless explicitly requested.
- Do not stage unrelated files.
- Do not run a production build when the task is audit or documentation only because Vite may write generated assets.
- For implementation phases, run only the checks appropriate to the authorized scope and report any environment or database boot blockers.
- Confirm that authenticated navigation, role visibility, forms, AJAX, tables, maps, and links still behave as before.

## Source of truth

The current application behavior is the source of truth. Documentation describes the contracts observed during Phase 0, but it does not authorize changing those contracts. If documentation and implementation disagree, stop, inspect the relevant route/view/controller without modifying backend code, document the conflict, and ask for direction when the safe presentation-only path is unclear.
