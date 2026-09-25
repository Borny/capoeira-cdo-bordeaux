# Current Feature

Landing page (vanilla JS)

## Status

<!-- Not Started|In Progress|Completed -->

Completed

## Goals

Ship a first version of the new site based on @context/screenshots/CDO-WebSite-dev.pdf and the style guide @context/screenshots/CDO-WebSite-Charte.pdf, in plain HTML/CSS/JS.

- Header: logo, Instagram + Facebook icons, nav (Accueil, Localisation)
- Hero: "CAPOEIRA / É MINHA VIDA" (Big Shoulders Stencil), intro text, "Trouver mon cours" button to the antennes, "Enseignement officiel Cordão de Ouro", hero photo
- Nos antennes: horizontal carousel of 6 cards (photo, name, teacher). "Cours et infos →" expands the card inline to show kids / adults schedules and a phone link
- Footer: logo, tagline, socials, © year
- Fonts: Big Shoulders Stencil, Barlow Condensed, Barlow, Inter
- Responsive, smooth scroll

## Notes

- Out of scope for now: Événements, Festival banner, Capoeira Kids badge, "Nouveau site en construction" banner
- YouTube, WhatsApp, Festival, À propos, Contact and legal links are hidden until URLs/pages exist
- Images extracted from the mockup PDF into `public/images/`. Card photos are low resolution (Le Porge especially) and should be replaced with real photos. Lormont uses an AI-generated photo (Pont d'Aquitaine)
- Antenne cards and schedules are static HTML in `index.html`; `src/main.js` only handles the expand toggle and carousel arrows

## History

<!-- Keep this updated. Earliest to latest -->

- Project setup and boilerplate cleanup
- **Landing page (vanilla JS)**: hero, antennes carousel with expandable schedules, sticky header, footer
