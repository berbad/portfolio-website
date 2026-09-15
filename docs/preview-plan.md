# Portfolio Preview Plan

**Goal:** Update the portfolio frontend design and prepare a local preview for approval before publishing.
**Architecture:** Preserve the React/Vite application, route handling, project data, resume and external links. Replace the visual system and page compositions, retaining small shared components.
**Design:** Full-width photographic hero, bold uppercase geometric sans headings, black navigation, white and cool-gray project/story bands, black contact/footer. Real project imagery, no link arrows, no writing section.

## Implementation
- [x] Replace typography, color, layout and responsive tokens in App.css/index.css; self-host display and body fonts.
- [x] Rebuild hero with non-destructive studio portrait edit, project CTA and contact anchor.
- [x] Add compact homepage project cards with monochrome images and hover descriptions; preserve detailed screenshots and metadata on the Projects page.
- [x] Apply the same system to Projects, About, Mission, navigation and footer.
- [x] Preserve route scroll reset, resume access and modified-click navigation; make the mobile menu dismissible with Escape.
- [x] Test routes, contact links and keyboard menu; build and inspect all routes at desktop, tablet and mobile sizes.
- [x] Open the local preview for review and obtain approval to publish.

## Assets
Original portrait remains at public/berdason-portrait.jpeg. public/berdason-studio.jpg is an AI background replacement/extension derived from it for this preview. Project captures must come from the actual sites or repository; no fabricated product screenshots.
