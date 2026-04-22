# Add Difficulty Levels (Easy, Medium, Hard)

## Why

The current game has only one difficulty level, which may be too easy for experienced players or too challenging for new players. By introducing three difficulty levels, we can:

- **Increase player retention** by allowing players to choose a challenge appropriate to their skill
- **Improve replayability** by giving players multiple difficulty tiers to master
- **Enhance accessibility** by letting new players start with easier settings and gradually increase difficulty
- **Provide clearer progression** for players to measure their improvement

## What Changes

The game SHALL allow players to select a difficulty level (Easy, Medium, Hard) before starting. Each level will have different game parameters:

- **Easy**: 
  - Game duration: 45 seconds
  - Mole visibility: 600ms - 1200ms (slower)
  - Mole spawn frequency: more spaced out
  - Grid: 3x3 (unchanged)

- **Medium** (current default):
  - Game duration: 30 seconds
  - Mole visibility: 450ms - 950ms (current)
  - Mole spawn frequency: current
  - Grid: 3x3 (unchanged)

- **Hard**:
  - Game duration: 20 seconds
  - Mole visibility: 250ms - 600ms (faster)
  - Mole spawn frequency: faster spawning
  - Grid: 3x3 (unchanged)

## Impact

### Files Affected
- `index.html` — Add difficulty selector UI (radio buttons or buttons)
- `styles.css` — Add styling for difficulty selector
- `script.js` — Add difficulty selection logic and parameter switching
- `openspec/specs/game-mechanics/spec.md` — Add difficulty-related requirements

### Behavior Changes
- Game initialization now includes difficulty selection
- Game parameters change based on selected difficulty
- Best score should be tracked per difficulty level (in localStorage)
- Game duration, mole timing, and spawn rates vary by difficulty

### User-Facing Changes
- New difficulty selector visible on the game initialization screen
- Different stat displays per difficulty (especially timer)
- Best score display updates to show scores grouped by difficulty

## Affected Specs

- `specs/game-mechanics/spec.md` — Adds difficulty selection and difficulty-specific game mechanics
