Brazzaville Tech Learners Hub

This folder contains a small static site for a community hub:

- `index.html` — overview and mission
- `resources.html` — curated learning links
- `events.html` — loads events from `data/events.json` using `scripts/events.js`
- `styles/hub.css` — styling for the hub pages
- `scripts/events.js` — client-side loader and renderer for events
- `data/events.json` — example events (replace or configure Google Calendar integration to load live data)

Notes:
- To integrate Google Calendar, replace the fetch in `scripts/events.js` to call the Google Calendar API (requires API key/OAuth and CORS handling).
- Link these pages from your main site navigation using `chamber/brazzaville-hub/index.html`.
