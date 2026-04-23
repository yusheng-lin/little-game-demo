### Requirement: Difficulty Selection UI
The system SHALL provide a difficulty selector with Easy, Medium, and Hard options.

#### Scenario: Default difficulty on first load
- **WHEN** the page is loaded
- **THEN** the default selected difficulty SHALL be Medium

#### Scenario: Choosing a difficulty before the game starts
- **GIVEN** the game is not currently running
- **WHEN** the user changes the selected difficulty
- **THEN** the system SHALL use the newly selected difficulty for the next session

### Requirement: Difficulty-based Mole Timing
The system SHALL determine mole appearance timing from the selected difficulty.

#### Scenario: Easy difficulty timing
- **WHEN** Easy difficulty is selected during a session
- **THEN** each mole appearance duration SHALL be randomized between 800ms and 1500ms

#### Scenario: Medium difficulty timing
- **WHEN** Medium difficulty is selected during a session
- **THEN** each mole appearance duration SHALL be randomized between 450ms and 950ms

#### Scenario: Hard difficulty timing
- **WHEN** Hard difficulty is selected during a session
- **THEN** each mole appearance duration SHALL be randomized between 200ms and 600ms

### Requirement: Difficulty Locking During Active Play
The system SHALL prevent changing the selected difficulty while a session is active.

#### Scenario: Selector disabled during play
- **WHEN** a game session starts
- **THEN** the difficulty selector SHALL be disabled until the session ends
