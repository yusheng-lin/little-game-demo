# Game Mechanics Specification

## Purpose
This specification defines the core mechanics of the whack-a-mole game, including how moles appear, how scoring works, and the overall game flow.

## Requirements

### Requirement: Game Initialization

The game interface SHALL display a playable grid and initialization controls.

#### Scenario: Initial state
- WHEN the page loads
- THEN the player SHALL see:
  - A 3x3 grid of holes arranged in a game arena
  - A "開始遊戲" (Start Game) button enabled
  - A "重新開始" (Restart) button disabled
  - Score display showing "0"
  - Time display showing "30" seconds
  - Best score display from localStorage
  - Instructional message: "按下「開始遊戲」後，地鼠會隨機出現。"

### Requirement: Game Start

The player SHALL be able to start a new game.

#### Scenario: Player clicks start button
- WHEN the player clicks the "開始遊戲" button
- THEN the system SHALL:
  - Disable the "開始遊戲" button
  - Enable the "重新開始" button
  - Initialize score to 0
  - Set timer to 30 seconds
  - Begin displaying moles at random locations

#### Scenario: Game timer begins
- WHEN the game starts
- THEN the timer SHALL:
  - Count down from 30 to 0 every second
  - Update the time display in real-time
  - Trigger game end when reaching 0

### Requirement: Mole Appearance

Moles SHALL appear randomly in the grid at unpredictable intervals.

#### Scenario: Mole appears randomly
- WHEN the game is running
- THEN a mole SHALL:
  - Appear in a random hole that is not currently showing a mole
  - Become visible to the player
  - Display for a duration between 450ms and 950ms
  - Disappear automatically after its display duration ends
  - Be followed by a new mole appearing in a different random location

#### Scenario: Continuous mole spawning
- WHEN one mole disappears
- THEN the system SHALL:
  - After a short delay, display a new mole
  - Continue this cycle until the game timer reaches zero
  - Never show more than one mole at a time

### Requirement: Hitting a Mole

The player SHALL be able to hit moles by clicking on them.

#### Scenario: Successful hit
- WHEN a visible mole is clicked
- THEN the system SHALL:
  - Increase score by 1 point
  - Update the score display immediately
  - Hide the mole
  - Display visual feedback (white flash overlay on the hole)
  - Show "+1" floating text indicating points gained
  - Create a brightness effect on the mole

#### Scenario: Missed mole
- WHEN the player clicks an empty hole
- THEN no score change occurs
- AND no visual feedback is displayed

#### Scenario: Mole disappears before click
- WHEN the player clicks a hole after the mole has disappeared
- THEN the click is treated as hitting an empty hole
- AND no score is awarded

### Requirement: Best Score Tracking

The system SHALL track and persist the player's best score.

#### Scenario: Initialize best score
- WHEN the game first loads
- THEN the best score SHALL:
  - Load from browser localStorage under key "best-score"
  - Display "0" if no previous score exists
  - Be displayed in the "最高分" (Best Score) stat card

#### Scenario: Update best score
- WHEN a game ends with a score higher than the current best score
- THEN the system SHALL:
  - Update the best score display
  - Save the new best score to localStorage

#### Scenario: Best score persistence
- WHEN the player closes and reopens the game page
- THEN the previous best score SHALL be retrieved from localStorage
- AND displayed without loss

### Requirement: Game End

The game SHALL terminate when the timer reaches zero.

#### Scenario: Timer expires
- WHEN the countdown timer reaches 0 seconds
- THEN the system SHALL:
  - Stop spawning new moles
  - Hide any currently visible mole
  - Clear the game timer
  - Enable the "重新開始" button
  - Display the final score to the player

#### Scenario: Final score display
- WHEN the game ends
- THEN the message area SHALL display the final score
- AND provide an option to restart the game

### Requirement: Game Restart

The player SHALL be able to restart the game at any time after it ends.

#### Scenario: Click restart button
- WHEN the player clicks the "重新開始" button after game end
- THEN the system SHALL:
  - Reset score to 0
  - Reset timer to 30 seconds
  - Clear all active mole displays
  - Disable the "重新開始" button
  - Enable the "開始遊戲" button
  - Return to the initial game state
  - NOT reset the best score

### Requirement: User Interface Display

The game interface SHALL display current game status clearly.

#### Scenario: Score display
- WHEN the game is running
- THEN the score display SHALL:
  - Show the current accumulated score
  - Update immediately when a mole is successfully hit
  - Be visible in a stat card labeled "分數"

#### Scenario: Timer display
- WHEN the game is running
- THEN the timer display SHALL:
  - Show remaining seconds with format: "[number] 秒"
  - Update every second
  - Be visible in a stat card labeled "剩餘時間"
  - Reach "0 秒" when game ends

#### Scenario: Best score display
- WHEN viewing the game interface
- THEN the best score display SHALL:
  - Show the highest score achieved
  - Be visible in a stat card labeled "最高分"
  - Persist across sessions via localStorage

### Requirement: Visual Feedback on Hit

Hitting a mole SHALL provide three layers of visual feedback.

#### Scenario: Hit feedback layers
- WHEN a mole is successfully hit
- THEN the system SHALL display:
  1. A white flash overlay on the entire hole area
  2. A brightness effect on the mole itself (filter: brightness)
  3. A floating "+1" text that appears and fades away
  4. All effects complete within 300ms

### Requirement: Game Grid Layout

The game grid SHALL be properly structured and responsive.

#### Scenario: Grid display
- WHEN the page loads
- THEN the grid SHALL:
  - Display 9 holes (3x3 arrangement) by default
  - Use equal spacing between holes
  - Be responsive and adapt to different screen sizes
  - Have each hole be a clickable button element
  - Include mole graphics inside each hole

#### Scenario: Responsive design
- WHEN viewed on mobile devices
- THEN the game interface SHALL:
  - Maintain proper layout on screens as small as 320px
  - Adjust grid size proportionally to viewport
  - Remain fully functional and clickable
