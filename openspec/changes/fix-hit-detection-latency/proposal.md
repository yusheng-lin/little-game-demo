## Status

This change has been implemented and its resulting behavior is now represented in the baseline capability spec at `openspec/specs/mole-arena/spec.md`.

## Why

On slower devices, there was a race condition between the user clicking a mole and the timer advancing to the next appearance. That timing gap could cause valid hits to be ignored.

## What Changes

- **State-based Hit Detection**: Switched hit validation to the clicked hole's `up` state.
- **Improved Responsiveness**: Ensured valid hits still register under slower event processing.
- **Race Condition Fix**: Decoupled hit validation from a single global index.
- **Baseline Merge**: Folded the resulting requirements into the formal baseline spec.

## Capabilities

### Modified Capabilities
- `mole-arena`: The baseline now captures state-based hit scoring and single-score behavior in `openspec/specs/mole-arena/spec.md`.

### Remaining Delta
- None. This change is ready to archive.

## Impact

- `script.js`: Updated hit validation to use per-hole state and prevent double-scoring.
- `openspec/specs/mole-arena/spec.md`: Captures the merged baseline behavior.
