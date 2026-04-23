## Status

This design has been realized in the codebase and its normative behavior is now captured in `openspec/specs/mole-arena/spec.md`.

## Context

The earlier `hitMole(index)` logic relied on `activeIndex`, which could be reset before a delayed click event was processed. That created a race condition where visible, intended hits were ignored.

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

## Archive Note

No open design delta remains after the baseline merge. Keep this document as implementation history until the change is archived.
