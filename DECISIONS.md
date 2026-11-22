# Frontend decisions

These are implementation decisions. Reference-site observations and screenshots still require the student's own investigation.

1. **Comparable cards.** Problem: essential booking facts can be difficult to compare. Decision: show price, time, duration, level, and remaining seats in each card. Alternative: show these only on the detail page. Reason: customers can shortlist before opening details. Tradeoff: denser cards on narrow screens. Code: `src/main.jsx`, `Home`. Evidence: schedule screenshot; compare two cards.
2. **Early rule disclosure.** Problem: conditions discovered late interrupt booking. Decision: show limits on details and plan and disable capacity-exceeding controls. Alternative: explain only on form submit. Reason: prevents wasted input. Tradeoff: repeated messaging. Code: `Detail`, `Plan`, `src/rules.js`. Evidence: detail and plan screenshots; add four seats and observe disabled increment.
3. **Recoverable plan.** Problem: changing availability can invalidate a saved selection. Decision: retain it with a specific conflict and quantity/removal controls, while blocking confirmation. Alternative: silently delete it. Reason: preserves customer context. Tradeoff: a conflict state needs explanation. Code: `Plan` in `src/main.jsx`. Evidence: add Kettlebell Lab, enable availability demo, open plan.
