# Example: Adding Sound Effects Feature

This is an example of what an OpenSpec change proposal looks like.
You can use this as a template when creating your own proposals.

## What This Shows

- How a proposal is structured
- How to write requirement changes in Delta format
- How to list implementation tasks
- How to organize specs for multiple affected areas

## Example File Structure

```
openspec/changes/add-sound-effects/          ← Feature folder (created by AI)
├── proposal.md                              ← Why and what
├── tasks.md                                 ← Implementation checklist
├── design.md                                ← Optional: technical decisions
└── specs/
    └── game-mechanics/
        └── spec.md                          ← How requirements change
```

## proposal.md Example

```markdown
# Add Sound Effects to Game

## Why

Enhance player engagement and provide audio feedback for game interactions.

## What Changes

- Background music plays when game starts
- Mole hit sound plays when player successfully hits a mole
- Game end sound effect plays when timer expires
- Player can mute/unmute sounds with a button

## Impact

- New button in UI for sound control
- New game-mechanics requirements for audio feedback
- Possible new dependencies (audio library)
- Affects: HTML (button), CSS (button styling), JavaScript (audio logic)

## Affected Specs

- `specs/game-mechanics/spec.md` - New audio feedback requirements
```

## tasks.md Example

```markdown
# Implementation Tasks

## Audio Setup
- [ ] Choose audio library or use Web Audio API
- [ ] Create audio files for: hit, music, game-end
- [ ] Add audio files to project directory

## Mute Button
- [ ] Add mute button to HTML layout
- [ ] Style mute button with CSS
- [ ] Implement toggle functionality in JavaScript
- [ ] Save mute preference to localStorage

## Game Start Audio
- [ ] Play background music when game starts
- [ ] Pause music when game ends
- [ ] Add requirement to game-mechanics spec

## Hit Sound
- [ ] Play sound when mole is hit
- [ ] Add requirement to game-mechanics spec
- [ ] Update visual feedback timing if needed

## End Sound
- [ ] Play sound when game ends
- [ ] Add requirement to game-mechanics spec

## Testing
- [ ] Test audio plays on all browsers
- [ ] Test mute/unmute toggle works
- [ ] Test localStorage persistence
- [ ] Test on mobile devices
```

## specs/game-mechanics/spec.md Example (Delta Format)

```markdown
## ADDED Requirements

### Requirement: Audio Feedback

The game SHALL provide audio feedback for key interactions.

#### Scenario: Background music plays during game

- WHEN a new game starts
- THEN background music SHALL play continuously
- AND the music SHALL loop until game end

#### Scenario: Hit sound on mole click

- WHEN a mole is successfully hit
- THEN a hit sound effect SHALL play
- AND the sound SHALL complete before the next mole appears

#### Scenario: Game end sound

- WHEN the timer reaches zero
- THEN a game-end sound effect SHALL play
- AND background music SHALL stop

### Requirement: Sound Control

The player SHALL be able to mute and unmute sound effects.

#### Scenario: Mute button interaction

- WHEN the player clicks the mute button
- THEN all sound effects SHALL stop
- AND the button appearance SHALL indicate muted state

#### Scenario: Sound preference persistence

- WHEN the player closes and reopens the game
- THEN the previous mute/unmute preference SHALL be restored

## MODIFIED Requirements

### Requirement: Visual Feedback on Hit

The game SHALL provide multi-layer feedback when a mole is hit.

#### Scenario: Hit feedback layers

- WHEN a mole is successfully hit
- THEN the system SHALL display:
  1. A white flash overlay on the hole
  2. A brightness effect on the mole
  3. A floating "+1" text that fades
  4. A hit sound effect SHALL play
  5. All effects complete within 300ms

_[Rest of the requirement stays the same...]_
```

## When to Use This

This example shows:

1. **How to structure a proposal** - Why, What, Impact
2. **How to list tasks** - Clear, actionable, testable steps  
3. **How to use Delta format** - ADDED/MODIFIED/REMOVED sections
4. **How to write scenarios** - WHEN/THEN/AND structure
5. **How to preserve existing specs** - MODIFIED sections include full content

## Next: Create Your Own

To create your first proposal:

```
/openspec:proposal Add [your feature here]
```

Or in natural language:
```
Please create an OpenSpec change proposal for adding difficulty levels to the game.
```

The AI will create a similar structure for your feature!

---

**This example is for reference only. Don't implement these changes unless you actually want sound effects!**
