### Requirement: Play Arena Layout
The system SHALL render a 3 by 3 play arena containing 9 clickable holes.

#### Scenario: Rendering the arena
- **WHEN** the page is loaded
- **THEN** the system SHALL display 9 holes in the play grid
- **AND** each hole SHALL be individually clickable

### Requirement: Single Active Mole Appearance
The system SHALL display at most one active mole at a time during an active game session.

#### Scenario: Showing the next mole
- **GIVEN** a game session is active
- **WHEN** the system selects the next hole
- **THEN** the newly selected hole SHALL gain the active state
- **AND** the previously active hole SHALL lose the active state before the new one appears

### Requirement: State-based Hit Scoring
The system SHALL award a point only when the player clicks a hole that is currently in the active state.

#### Scenario: Successful hit on an active mole
- **GIVEN** a hole is currently active
- **WHEN** the user clicks that hole
- **THEN** the system SHALL remove the active state immediately
- **AND** the system SHALL increase the score by 1

#### Scenario: Ignoring inactive holes
- **WHEN** the user clicks a hole that is not currently active
- **THEN** the system SHALL NOT increase the score

#### Scenario: Preventing double scoring for one appearance
- **GIVEN** a hole has already been scored for its current appearance
- **WHEN** the user clicks the same hole again before the next mole appears
- **THEN** the system SHALL NOT award an additional point

### Requirement: Hit Feedback
The system SHALL provide visual feedback when a player successfully hits a mole.

#### Scenario: Showing hit feedback
- **WHEN** the player successfully hits an active mole
- **THEN** the system SHALL show a temporary hole flash effect
- **AND** the mole SHALL play a hit animation
- **AND** the system SHALL show a temporary "+1" score pop-up
