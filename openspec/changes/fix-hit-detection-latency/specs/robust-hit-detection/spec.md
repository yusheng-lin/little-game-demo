## ADDED Requirements

### Requirement: State-based Hit Validation
The system SHALL validate hits based on whether the clicked hole has the "up" state, rather than relying on a global index.

#### Scenario: Successful hit detection
- **WHEN** the user clicks a hole that has the "up" class
- **THEN** the system SHALL increment the score and trigger the "hit" animation

#### Scenario: Ignoring hits on inactive holes
- **WHEN** the user clicks a hole that does NOT have the "up" class
- **THEN** the system SHALL NOT increment the score

### Requirement: Single Score per Appearance
The system SHALL ensure that each mole appearance can only be scored once.

#### Scenario: Preventing double scoring
- **WHEN** a hole is hit and the score is incremented
- **THEN** the "up" class SHALL be removed immediately to prevent subsequent hits for the same appearance
