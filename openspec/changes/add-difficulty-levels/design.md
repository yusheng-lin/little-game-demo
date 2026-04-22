## Context

The game currently uses hardcoded constants for mole appearance duration: `MIN_SHOW_MS (450)` and `MAX_SHOW_MS (950)`. These are set globally and cannot be changed by the user. The UI lacks any mechanism for user configuration.

## Goals / Non-Goals

**Goals:**
- Provide three distinct difficulty levels: Easy, Medium (Current), and Hard.
- Update the UI to include a difficulty selector.
- Dynamically adjust mole speed based on the selected difficulty.
- Ensure difficulty is locked once the game starts to prevent cheating.

**Non-Goals:**
- Changing the game duration (30s) based on difficulty.
- Changing the grid size (9) based on difficulty.
- Adding complex scoring multipliers (though this could be a future enhancement).

## Decisions

### 1. Difficulty Setting Definitions
We will define difficulty as follows:
- **Easy**: `min: 800ms`, `max: 1500ms` (Slower, more time to react)
- **Medium**: `min: 450ms`, `max: 950ms` (Default balanced experience)
- **Hard**: `min: 200ms`, `max: 600ms` (Fast, requires quick reflexes)

*Rationale*: These ranges provide a clear progression in challenge.

### 2. UI Component for Selection
Use an HTML `<select>` element labeled "Difficulty".
*Rationale*: Standard, accessible, and takes up minimal space in the control area. Alternative considered: Radio buttons, but `<select>` is more compact for a simple setting.

### 3. State Management
- Introduce a `currentDifficulty` variable in `script.js` (defaulting to 'medium').
- Update the `showNextMole` function to use `DIFFICULTY_SETTINGS[currentDifficulty]` instead of global constants.
- Disable the difficulty selector when `gameRunning` is true.

## Risks / Trade-offs

- **[Risk] State Desync** → If the selector is changed right as a game starts, the first mole might use the old setting while subsequent ones use the new one.
  - *Mitigation*: Read the difficulty setting explicitly at the start of `startGame()` and lock the UI immediately.
- **[Risk] UI Clutter** → Adding more controls might make the small mobile view cramped.
  - *Mitigation*: Ensure the selector is styled to fit neatly within the existing `.controls` flex container.
