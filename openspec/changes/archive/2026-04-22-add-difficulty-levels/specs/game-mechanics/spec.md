# Game Mechanics Specification - Delta (Difficulty Levels)

## ADDED Requirements

### Requirement: Difficulty Selection

The player SHALL select a difficulty level before starting a new game.

#### Scenario: Difficulty selector visible at initialization

- WHEN the page loads or game ends
- THEN the difficulty selector SHALL be displayed and enabled
- AND the player SHALL see three options: "Easy", "Medium", "Hard"
- AND "Medium" SHALL be pre-selected as the default difficulty

#### Scenario: Player selects difficulty

- WHEN the player selects a difficulty level
- THEN the selection SHALL be stored
- AND the selector SHALL remain visible until the game starts

#### Scenario: Difficulty locked during game

- WHEN the game is running
- THEN the difficulty selector SHALL be disabled
- AND the player cannot change difficulty mid-game

#### Scenario: Difficulty reset after game

- WHEN the game ends
- THEN the difficulty selector SHALL be re-enabled
- AND the previously selected difficulty SHALL remain selected
- AND the player can select a new difficulty for the next game

### Requirement: Difficulty-Based Game Duration

Each difficulty level SHALL have a different game duration.

#### Scenario: Easy difficulty duration

- WHEN the player selects "Easy" and starts the game
- THEN the timer SHALL be set to 45 seconds
- AND the timer SHALL count down from 45 to 0
- AND the game SHALL end when the timer reaches 0 seconds

#### Scenario: Medium difficulty duration

- WHEN the player selects "Medium" and starts the game
- THEN the timer SHALL be set to 30 seconds
- AND the timer SHALL count down from 30 to 0
- AND the game SHALL end when the timer reaches 0 seconds

#### Scenario: Hard difficulty duration

- WHEN the player selects "Hard" and starts the game
- THEN the timer SHALL be set to 20 seconds
- AND the timer SHALL count down from 20 to 0
- AND the game SHALL end when the timer reaches 0 seconds

### Requirement: Difficulty-Based Mole Timing

Each difficulty level SHALL have different mole appearance/disappearance timings.

#### Scenario: Easy mole timing

- WHEN the player selects "Easy" difficulty
- THEN each mole SHALL:
  - Display for a duration between 600ms and 1200ms (slower, longer visibility)
  - Have more spacing between appearances
  - Give the player more time to react

#### Scenario: Medium mole timing

- WHEN the player selects "Medium" difficulty
- THEN each mole SHALL:
  - Display for a duration between 450ms and 950ms (standard timing)
  - Have standard spacing between appearances
  - Match the original game difficulty

#### Scenario: Hard mole timing

- WHEN the player selects "Hard" difficulty
- THEN each mole SHALL:
  - Display for a duration between 250ms and 600ms (faster, shorter visibility)
  - Have faster spawn frequency with less spacing between appearances
  - Require quick reflexes from the player

### Requirement: Difficulty-Based Best Score Tracking

Best scores SHALL be tracked and displayed separately for each difficulty level.

#### Scenario: Initialize best scores by difficulty

- WHEN the game first loads
- THEN the system SHALL:
  - Load best scores from localStorage with keys: "best-score-easy", "best-score-medium", "best-score-hard"
  - Display "0" for any difficulty with no previous score
  - Maintain separate best score records for each difficulty

#### Scenario: Display correct best score for difficulty

- WHEN the page is displayed or difficulty is changed
- THEN the best score display SHALL:
  - Show the best score for the currently selected difficulty
  - Update immediately when difficulty selection changes
  - Clearly indicate which difficulty's best score is shown

#### Scenario: Update best score for difficulty

- WHEN a game ends
- THEN the system SHALL:
  - Compare the current score with the best score for that difficulty
  - Update the best score if the current score is higher
  - Save the new best score to localStorage with the difficulty-specific key

#### Scenario: Best score persistence per difficulty

- WHEN the player closes and reopens the game page
- THEN each difficulty's best score SHALL:
  - Be retrieved from localStorage independently
  - Be preserved without loss
  - Display correctly for each difficulty level

## MODIFIED Requirements

### Requirement: Game Initialization

The game interface SHALL display a playable grid, difficulty selector, and initialization controls.

#### Scenario: Initial state with difficulty selector

- WHEN the page loads
- THEN the player SHALL see:
  - A difficulty selector with options: Easy, Medium, Hard (Medium pre-selected)
  - A 3x3 grid of holes arranged in a game arena
  - A "開始遊戲" (Start Game) button enabled
  - A "重新開始" (Restart) button disabled
  - Score display showing "0"
  - Time display showing appropriate duration for selected difficulty
  - Best score display for the selected difficulty from localStorage
  - Instructional message: "按下「開始遊戲」後，地鼠會隨機出現。"

### Requirement: Game Start

The player SHALL be able to start a new game with the selected difficulty.

#### Scenario: Player clicks start button with selected difficulty

- WHEN the player clicks the "開始遊戲" button
- THEN the system SHALL:
  - Disable the "開始遊戲" button
  - Disable the difficulty selector
  - Enable the "重新開始" button
  - Initialize score to 0
  - Set timer to the duration for the selected difficulty (Easy: 45s, Medium: 30s, Hard: 20s)
  - Apply mole timing parameters for the selected difficulty
  - Begin displaying moles at random locations with difficulty-appropriate timing

#### Scenario: Game timer begins with difficulty duration

- WHEN the game starts
- THEN the timer SHALL:
  - Count down from the difficulty-specific duration to 0 every second
  - Update the time display in real-time
  - Trigger game end when reaching 0

### Requirement: Mole Appearance

Moles SHALL appear randomly in the grid with timing based on selected difficulty.

#### Scenario: Mole appears with difficulty-based timing

- WHEN the game is running
- THEN a mole SHALL:
  - Appear in a random hole that is not currently showing a mole
  - Become visible to the player
  - Display for a duration specific to the difficulty:
    - Easy: 600ms to 1200ms
    - Medium: 450ms to 950ms
    - Hard: 250ms to 600ms
  - Disappear automatically after its display duration ends
  - Be followed by a new mole appearing in a different random location with difficulty-appropriate spacing

#### Scenario: Continuous mole spawning with difficulty variation

- WHEN one mole disappears
- THEN the system SHALL:
  - After a delay appropriate to the difficulty, display a new mole
  - Continue this cycle until the game timer reaches zero
  - Never show more than one mole at a time
  - Provide faster spawning for Hard difficulty and slower spawning for Easy difficulty

### Requirement: Game Restart

The player SHALL be able to restart the game with the same or different difficulty.

#### Scenario: Click restart button with difficulty selection

- WHEN the player clicks the "重新開始" button after game end
- THEN the system SHALL:
  - Reset score to 0
  - Reset timer to 30 seconds (or last selected difficulty duration)
  - Clear all active mole displays
  - Disable the "重新開始" button
  - Enable the "開始遊戲" button
  - Enable the difficulty selector
  - Allow the player to select a new difficulty
  - Return to the initial game state
  - NOT reset the best scores

---

## Archive Note

Delta spec created April 22, 2026
Successfully merged into main `specs/game-mechanics/spec.md`
