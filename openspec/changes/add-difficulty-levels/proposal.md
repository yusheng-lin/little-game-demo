## Why

The current game has a fixed difficulty level, which may be too fast for new players or too slow for experienced ones. Adding difficulty levels (Easy, Medium, Hard) improves the game's accessibility, player engagement, and replayability by allowing users to choose a challenge that matches their skill level.

## What Changes

- **Difficulty Selection UI**: Add a selector (dropdown or radio group) in the control area to allow players to choose between Easy, Medium, and Hard before starting a game.
- **Dynamic Speed Constants**: Refactor the mole appearance timing logic to use variables derived from the selected difficulty level instead of global constants.
- **Game State Integration**: Ensure difficulty cannot be changed while a game is in progress.
- **Persistent Preference**: (Optional) Save the last selected difficulty to local storage.

## Capabilities

### New Capabilities
- `difficulty-levels`: Handles the UI selection, state management, and logic for adjusting game speed parameters (min/max show duration) based on player choice.

### Modified Capabilities
- None. (The project currently has no existing formal specifications).

## Impact

- `index.html`: New UI elements for difficulty selection.
- `script.js`: Update `showNextMole` logic and `startGame` to respect the selected difficulty. Refactor hardcoded timing constants.
- `styles.css`: Styling for the new difficulty selection components.
