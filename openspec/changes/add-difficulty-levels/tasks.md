# Implementation Tasks: Add Difficulty Levels

## Difficulty Selector UI

- [ ] Add difficulty selector HTML (radio buttons or button group)
- [ ] Style difficulty selector with CSS
- [ ] Ensure difficulty selector is disabled once game starts
- [ ] Make difficulty selector re-enable on game restart/end

## JavaScript Difficulty Configuration

- [ ] Define DIFFICULTY_SETTINGS object with Easy/Medium/Hard configurations
- [ ] Create function to get current difficulty settings
- [ ] Create function to apply difficulty settings when game starts
- [ ] Update GAME_SECONDS constant handling to use difficulty-based value
- [ ] Update MIN_SHOW_MS and MAX_SHOW_MS to use difficulty-based values

## Game Initialization Logic

- [ ] Read selected difficulty from radio button/button state
- [ ] Store selected difficulty in variable
- [ ] Apply difficulty-based parameters before game starts
- [ ] Update timer display based on difficulty duration

## Best Score Tracking by Difficulty

- [ ] Update localStorage key to include difficulty: "best-score-easy", "best-score-medium", "best-score-hard"
- [ ] Load correct best score for selected difficulty on page load
- [ ] Update best score tracking to save per-difficulty scores
- [ ] Display best score for current difficulty in UI

## Mole Appearance Timing

- [ ] Update mole show/hide timing to use difficulty-based MIN_SHOW_MS and MAX_SHOW_MS
- [ ] Test that Easy difficulty shows moles longer (600-1200ms)
- [ ] Test that Medium difficulty shows moles at default (450-950ms)
- [ ] Test that Hard difficulty shows moles faster (250-600ms)

## Game Flow Updates

- [ ] Update Game Start to read difficulty settings
- [ ] Ensure difficulty applies correctly before first mole appears
- [ ] Test that difficulty cannot be changed during active game
- [ ] Test that difficulty resets/can be changed after game ends

## Testing

- [ ] Test Easy: Game runs for 45 seconds with slower moles
- [ ] Test Medium: Game runs for 30 seconds with default timing
- [ ] Test Hard: Game runs for 20 seconds with faster moles
- [ ] Test best scores are saved separately per difficulty
- [ ] Test best scores persist across page reload
- [ ] Test difficulty selector disabled during game
- [ ] Test switching difficulties between games
- [ ] Test on mobile devices for accessibility and layout
