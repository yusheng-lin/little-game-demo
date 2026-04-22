## ADDED Requirements

### Requirement: Difficulty Selection UI
The system SHALL provide a user interface element to select between three difficulty levels: "Easy", "Medium", and "Hard".

#### Scenario: Selecting difficulty before starting
- **WHEN** the game is not running
- **THEN** the user can interact with the difficulty selector to choose a level

#### Scenario: Default difficulty
- **WHEN** the page is loaded for the first time
- **THEN** the default difficulty SHALL be "Medium"

### Requirement: Difficulty-based Timing
The system SHALL adjust the mole appearance duration based on the selected difficulty level.

#### Scenario: Easy mode timing
- **WHEN** "Easy" difficulty is selected and the game starts
- **THEN** moles SHALL appear for a duration between 800ms and 1500ms

#### Scenario: Medium mode timing
- **WHEN** "Medium" difficulty is selected and the game starts
- **THEN** moles SHALL appear for a duration between 450ms and 950ms

#### Scenario: Hard mode timing
- **WHEN** "Hard" difficulty is selected and the game starts
- **THEN** moles SHALL appear for a duration between 200ms and 600ms

### Requirement: State Locking during Gameplay
The system SHALL prevent changing the difficulty level while a game session is active.

#### Scenario: Selector disabled during game
- **WHEN** the user clicks "Start Game"
- **THEN** the difficulty selector SHALL be disabled and remain disabled until the game ends
