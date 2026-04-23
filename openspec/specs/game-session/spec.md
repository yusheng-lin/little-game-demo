### Requirement: Session Lifecycle
The system SHALL provide controls to start a game session, restart a session, and end the session automatically when the game timer reaches zero.

#### Scenario: Starting a new game from idle
- **GIVEN** the game is idle
- **WHEN** the user clicks the start button
- **THEN** the system SHALL reset the score to 0
- **AND** the system SHALL reset the remaining time to 30 seconds
- **AND** the system SHALL begin a new active game session

#### Scenario: Restarting while a session is active or after it ends
- **WHEN** the user clicks the restart button
- **THEN** the system SHALL reset the score to 0
- **AND** the system SHALL reset the remaining time to 30 seconds
- **AND** the system SHALL immediately begin a new active game session

#### Scenario: Ending when time expires
- **WHEN** the remaining time reaches 0 seconds
- **THEN** the system SHALL stop the active session
- **AND** the system SHALL remove any visible active mole
- **AND** the system SHALL enable starting another session
