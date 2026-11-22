# Pulse Studio Islamabad — CS4032 Assignment 02
Student: Muhammad Kashan Ali (verify spelling); roll: 24i-2135; section: to confirm.

A fictional Islamabad fitness studio booking frontend with ten classes. Bookings are simulated; no payment or message is sent.

## Commands
`npm install` · `npm run dev` · `npm run build` · `npm test`

## Routes
`/` schedule, search, filter, sort; `/classes/:id` class details; `/plan` selection and booking form; `/confirmation` result.

## Rules
Maximum four attendees per class and never beyond remaining seats; intermediate classes require previous training; Islamabad only. `src/rules.js` contains rules. `src/main.jsx` applies them.

## Edge-case reproduction
On the schedule, open “Demo controls for edge cases.” Toggle loading failure and use Retry after turning it off. Add Kettlebell Lab, then toggle changed availability and inspect `/plan` for recovery. Search for an impossible phrase to see no matches. Visit `/classes/invalid` for an invalid URL. Enter invalid booking details to inspect validation.

## Concept map
React state, effects, callbacks, routes and forms: `src/main.jsx`; local records and async loader: `src/data.js`; rules: `src/rules.js`; capacity tests: `tests/rules.test.js`; responsive styles: `src/style.css`.

## Links
GitHub: not connected yet; source is provided as ZIP with local Git history. Deployment: https://pulse-studio-islamabad-24i2135.balancedbush16.chatgpt.site. Configure deployment to serve `index.html` for all application paths. Final commit: **add hash**.

## Limitations
No backend, actual availability, real payment, or email delivery. Booking confirmation exists in the current session only. The demo availability toggle does not persist across refreshes.
