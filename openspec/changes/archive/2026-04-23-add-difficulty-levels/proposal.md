## Status

This change has been implemented and its requirements are now represented in the baseline capability spec at `openspec/specs/difficulty-levels/spec.md`.

## Why

The game originally had a fixed difficulty level, which was too rigid for different player skill levels. This change introduced selectable difficulty levels to improve accessibility, engagement, and replayability.

## What Changes

- **Difficulty Selection UI**: Added a selector in the control area for Easy, Medium, and Hard.
- **Dynamic Speed Constants**: Refactored mole appearance timing to use values derived from the selected difficulty.
- **Game State Integration**: Locked difficulty changes during active play.
- **Baseline Merge**: Folded the resulting requirements into the formal baseline spec.

## Capabilities

### Modified Capabilities
- `difficulty-levels`: This capability now exists in the baseline at `openspec/specs/difficulty-levels/spec.md`.

### Remaining Delta
- None. This change is ready to archive.

## Impact

- `index.html`: Added UI elements for difficulty selection.
- `script.js`: Updated `showNextMole` and session state handling to respect the selected difficulty.
- `styles.css`: Added styling for the difficulty selection controls.
- `openspec/specs/difficulty-levels/spec.md`: Captures the merged baseline behavior.
