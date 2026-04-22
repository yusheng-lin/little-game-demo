## Why

On slower devices, there is a race condition between the user clicking a mole and the `showNextMole` function clearing the `activeIndex`. If the timer expires and `showNextMole` runs just as the user clicks, `activeIndex` is set to -1 before `hitMole` is called, causing the hit to be ignored.

## What Changes

- **State-based Hit Detection**: Instead of relying on a single `activeIndex`, check if the clicked hole currently has the `up` class.
- **Improved Responsiveness**: Ensure hit registration is prioritized even if a frame skip or delay occurs in the timer logic.
- **Race Condition Fix**: Decouple the "active" state of a mole from a single global index to allow for slight overlaps in event processing.

## Capabilities

### New Capabilities
- `robust-hit-detection`: Implements hole-specific state checking for hits instead of relying on a global index.

### Modified Capabilities
- None.

## Impact

- `script.js`: Update `hitMole` to check the DOM element state and prevent double-scoring. Update `clearActiveMole` to be more focused.
