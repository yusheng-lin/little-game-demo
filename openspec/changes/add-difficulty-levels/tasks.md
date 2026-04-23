## 1. UI Implementation

- [x] 1.1 Add difficulty selection `<select>` to `index.html` within the controls section
- [x] 1.2 Add appropriate labels and accessibility attributes for the selector
- [x] 1.3 Add basic styling in `styles.css` to align the new selector with existing buttons

## 2. JavaScript Refactoring & Logic

- [x] 2.1 Define `DIFFICULTY_SETTINGS` object in `script.js` containing min/max values for each level
- [x] 2.2 Refactor `showNextMole` to use timing values based on the currently selected difficulty
- [x] 2.3 Update `startGame` and `stopGame` to disable/enable the difficulty selector
- [x] 2.4 Add event listener to update the current difficulty when the selector changes

## 3. Verification & Cleanup

- [x] 3.1 Verify "Easy" mode is noticeably slower and "Hard" mode is significantly faster
- [x] 3.2 Ensure difficulty cannot be changed while the game is running
- [x] 3.3 Remove old timing constants (`MIN_SHOW_MS`, `MAX_SHOW_MS`)

## 4. Archive Readiness

- [x] 4.1 Merge finalized requirements into `openspec/specs/difficulty-levels/spec.md`
- [x] 4.2 Confirm no remaining baseline-relative delta exists for this change
- [ ] 4.3 Archive the change
