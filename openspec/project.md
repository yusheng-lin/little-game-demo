# Project Information

## Project Name
打地鼠小遊戲 (Whack-A-Mole Game)

## Description
A simple whack-a-mole game where players click on randomly appearing moles within a time limit to score points. The game is built with vanilla HTML, CSS, and JavaScript, making it lightweight and accessible across different devices.

## Tech Stack

- **Frontend Framework**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Build Tools**: None (no build step required)
- **Deployment**: Static hosting (GitHub Pages, Zeabur, etc.)
- **Markup**: HTML with semantic elements and ARIA labels for accessibility
- **Styling**: CSS with CSS custom properties (variables) and modern layouts
- **Scripting**: Vanilla JavaScript with DOM manipulation

## Development Conventions

### Code Style
- Use semantic HTML elements for better accessibility
- Implement ARIA labels for game elements to support screen readers
- Use CSS custom properties (`--variable-name`) for themeable colors and values
- Use camelCase for JavaScript variable and function names
- Add comments for complex game logic

### File Organization
```
├── index.html          # Main game interface
├── styles.css          # All styling (single file for simplicity)
├── script.js           # All game logic
└── openspec/           # OpenSpec documentation
```

### Naming Patterns
- **Constants**: UPPERCASE_WITH_UNDERSCORES (e.g., `GAME_SECONDS`, `GRID_SIZE`)
- **HTML Elements**: kebab-case for CSS classes (e.g., `game-shell`, `stat-card`)
- **Game State**: Use descriptive variable names (e.g., `score`, `timeLeft`, `activeIndex`)

### Game Configuration
The game behavior is controlled by these constants in `script.js`:
- `GAME_SECONDS`: Duration of each game round (default: 30 seconds)
- `GRID_SIZE`: Number of holes in the grid (default: 9)
- `MIN_SHOW_MS`: Minimum time a mole shows (default: 450ms)
- `MAX_SHOW_MS`: Maximum time a mole shows (default: 950ms)

## Key Features (Current)
1. **Grid Display**: 3x3 grid of clickable holes (GRID_SIZE = 9)
2. **Score Tracking**: Real-time score display and best score persistence via localStorage
3. **Timer**: 30-second countdown for each game
4. **Visual Feedback**: Mole appears and disappears at random intervals
5. **Accessibility**: ARIA labels and semantic HTML
6. **Local Storage**: Saves best score between sessions

## Important Constraints
- Single-player game (no multiplayer)
- No external dependencies (vanilla JS only)
- No backend/server required
- Game state is not persisted (only best score)
- All game sounds and effects are CSS/JavaScript based (no audio files)

## UI/UX Guidelines
- Use color scheme defined in CSS custom properties
- Maintain responsive design for mobile and desktop
- Provide clear visual feedback for all interactions
- Use smooth animations for mole appearances/disappearances
- Display helpful messages to guide players

## Accessibility Requirements
- All interactive elements must have proper ARIA labels
- Game must be fully keyboard accessible
- Color contrast must meet WCAG standards
- Screen reader support for game status and score updates
