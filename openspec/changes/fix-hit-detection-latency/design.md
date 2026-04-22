## Context

The current `hitMole(index)` logic checks `if (index !== activeIndex)`. The `activeIndex` is updated by `showNextMole` via `clearActiveMole()`, which sets `activeIndex = -1`. This creates a race condition on slow devices where the click event might fire after `activeIndex` has been reset, even if the mole is still visually "up" or the user's intent was to hit it.

## Goals / Non-Goals

**Goals:**
- Eliminate the race condition by checking the actual state of the clicked hole.
- Ensure each mole can only be scored once.
- Maintain smooth animations.

**Non-Goals:**
- Changing the overall game flow.
- Modifying difficulty settings.

## Decisions

### 1. Shift from Index-based to State-based Detection
Instead of `index !== activeIndex`, we will check `hole.classList.contains('up')`.
*Rationale*: This directly checks the "source of truth" in the UI (is the mole actually up?).

### 2. Immediate State Transition on Hit
When a hit is detected, immediately remove the `up` class from the hole.
*Rationale*: Prevents double-scoring and provides instant feedback.

### 3. Keep `activeIndex` for `randomIndex`
We will keep `activeIndex` only to ensure the *next* mole doesn't appear in the *same* hole as the current one, but not for hit validation.

## Risks / Trade-offs

- **[Risk] Multiple hits during animation** → If not handled, a fast user could hit the same mole twice.
  - *Mitigation*: The `hitMole` function will immediately remove `up` so subsequent calls for the same hole will fail the `contains('up')` check.
