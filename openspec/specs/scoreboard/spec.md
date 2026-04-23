### Requirement: Scoreboard Display
The system SHALL display the current score, the remaining time, and the best score.

#### Scenario: Initial scoreboard values
- **WHEN** the page is loaded
- **THEN** the current score SHALL display as 0
- **AND** the remaining time SHALL display as 30 seconds
- **AND** the best score SHALL display the stored best score or 0 when none exists

#### Scenario: Updating the current score
- **WHEN** the player successfully hits an active mole
- **THEN** the displayed current score SHALL increase by 1

#### Scenario: Updating the remaining time
- **GIVEN** a game session is active
- **WHEN** one second passes
- **THEN** the displayed remaining time SHALL decrease by 1 second

### Requirement: Best Score Persistence
The system SHALL persist the best score across page reloads using browser storage.

#### Scenario: Saving a new best score
- **WHEN** a game session ends with a score greater than the current best score
- **THEN** the system SHALL store the new best score in browser storage
- **AND** the best score display SHALL update to the new value

#### Scenario: Keeping the previous best score
- **WHEN** a game session ends with a score that does not exceed the best score
- **THEN** the system SHALL preserve the existing stored best score

### Requirement: End-of-game Message
The system SHALL display an end-of-game message when the session ends.

#### Scenario: Session ends without a new record
- **WHEN** the session ends and the score does not exceed the best score
- **THEN** the system SHALL show a message containing the final score

#### Scenario: Session ends with a new record
- **WHEN** the session ends and the score exceeds the best score
- **THEN** the system SHALL show a message indicating a new record and the final score
