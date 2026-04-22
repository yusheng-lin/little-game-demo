## 1. UI Implementation

- [ ] 1.1 Add difficulty selection `<select>` to `index.html` within the controls section
- [ ] 1.2 Add appropriate labels and accessibility attributes for the selector
- [ ] 1.3 Add basic styling in `styles.css` to align the new selector with existing buttons

## 2. JavaScript Refactoring & Logic

- [ ] 2.1 Define `DIFFICULTY_SETTINGS` object in `script.js` containing min/max values for each level
- [ ] 2.2 Refactor `showNextMole` to use timing values based on the currently selected difficulty
- [ ] 2.3 Update `startGame` and `stopGame` to disable/enable the difficulty selector
- [ ] 2.4 Add event listener to update the current difficulty when the selector changes

## 3. Verification & Cleanup

- [ ] 3.1 Verify "Easy" mode is noticeably slower and "Hard" mode is significantly faster
- [ ] 3.2 Ensure difficulty cannot be changed while the game is running
- [ ] 3.3 Remove old timing constants (`MIN_SHOW_MS`, `MAX_SHOW_MS`)
