# Portfolio Preview Design

## Direction
Updated frontend design: bold uppercase sans-serif display, full-width photography, alternating dark/light sections, generous spacing, and Berdason's own portfolio content.

## Tokens
- Ink #171717; dark #1b2125; navigation #030501; paper #f7f9fb; gray #d3dae5; muted #4a555d; divider #c9ccd2.
- Fonts: Zalando Sans Expanded 400/500/600/700 for display, Inter Tight 500/600/700 for navigation and controls, Inter 400 for body. Locally hosted with OFL licenses.
- Hero title 84px desktop, 60px tablet, 48px mobile with narrow-phone adjustments. Section headings 48px desktop, 36px tablet, 34px mobile. Body 18px desktop and 16px mobile.
- Content width 1208px maximum with 20px minimum gutters. Navigation uses 48px desktop gutters and a 75px height. Navigation links are 16px with an 18px line height; the first name is regular and the last name bold.
- Section spacing 80px desktop, 60px tablet, 40px small phone.
- Buttons use 15px Inter Tight, 36px desktop height, 5px radius, and 44px mobile touch targets. Text links have underlines, no arrows.
- Responsive adjustments at 1025px, 1024px, 768px, 515px and 380px. Letter spacing stays zero.

Layout is adapted for Berdason's content and accessible mobile targets.

## Composition
Home: photographic introduction, compact project cards, background/career, contact.
Homepage project cards use translucent surfaces, 16px radii, white borders and 340px minimum height (380px on phones). Monochrome images sit above the names, with separate small GitHub links below. Full descriptions reveal on hover and keyboard focus without resizing cards, and stay visible on touch devices and phone layouts. The main card target opens the live website, falling back to GitHub for projects without a live site. Screenshots remain on the Projects page.
Projects: dark title band, project showcase, contact.
About: dark title band, original portrait and biography, career, skills, contact.
Mission: dark title band, unframed principle rows, project link, contact.

## Motion and Accessibility
One brief hero entrance; subtle project-image hover. Reduced-motion support.
Semantic headings and landmarks, skip link, focus rings, keyboard menu dismissal, aria-current navigation.

## Assets
Original portrait is preserved. Studio image is an AI background edit and canvas extension from that portrait, compressed to JPEG.
Project screenshots are captures of citytireshop.com, eternalbotanic.com and the public TriviaBot GitHub repository on 2026-09-14. No running Discord demo image was available.

## Verification
Five component tests and production build pass. All four routes checked at widths 1440, 820, 390 and 320 for overflow, image loading and browser errors. Card hover, focus, touch behavior and separate GitHub targets are checked. Menu navigation and Escape dismissal checked at phone widths.
