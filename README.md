# 打地鼠小遊戲 - OpenSpec Setup

Welcome! This project now follows **OpenSpec** - a lightweight Spec-Driven Development (SDD) framework.

## Quick Start

### What is OpenSpec?
OpenSpec helps you:
- Define features as specifications **before** coding
- Track proposed changes separately from current system specs
- Maintain a clear history of features and why they were added
- Work more effectively with AI coding tools

### Project Structure

```
├── index.html                    # Game UI
├── styles.css                    # Game styling
├── script.js                     # Game logic
├── openspec/                     # All spec documentation
│   ├── project.md               # Project info & conventions
│   ├── AGENTS.md                # AI workflow guide
│   ├── specs/                   # Current system specifications
│   │   └── game-mechanics/
│   │       └── spec.md          # Game rules and requirements
│   └── changes/                 # Proposed features
│       └── archive/             # Completed features
└── README.md                     # This file
```

## How to Add Features

### For Humans Working with AI

When you want to add a feature, here's the three-step workflow:

#### 1️⃣ **Draft Proposal** (Create a change proposal)
Ask your AI assistant (Claude Code, GitHub Copilot, etc.):
```
Please read openspec/AGENTS.md and create an OpenSpec change proposal for: [YOUR FEATURE]
```

Example:
```
Please create an OpenSpec change proposal for adding difficulty levels to the game.
```

The AI will create a new folder in `openspec/changes/` with:
- `proposal.md` - Why and what you're changing
- `tasks.md` - Step-by-step implementation checklist
- `specs/` - How the requirement changes (Delta format)

#### 2️⃣ **Implement** (Start building)
After reviewing the proposal:
```
/openspec:apply [feature-name]
```

Or in natural language:
```
Please implement the feature according to the proposal. Update tasks.md as you go.
```

The AI will implement each task and check them off one by one.

#### 3️⃣ **Archive** (Complete and record)
When everything is done and tested:
```
/openspec:archive [feature-name]
```

This moves the feature to the permanent record and updates the system spec.

## Key Files to Understand

### `openspec/project.md`
- **What it contains**: Project information, tech stack, development conventions
- **Who needs it**: AI assistants, so they understand your project constraints and style
- **Update it when**: You change tools, conventions, or project structure

### `openspec/specs/game-mechanics/spec.md`
- **What it contains**: Current game rules and requirements in detail
- **Who needs it**: AI assistants, when implementing features that might affect game behavior
- **It's the "ground truth"** - Everything the game currently does

### `openspec/AGENTS.md`
- **What it contains**: Instructions for AI on how to work with OpenSpec
- **Who needs it**: AI code assistants
- **Read this first** if you're new to OpenSpec

## Examples

### Adding Sound Effects
```
User: Create a proposal for adding background music and hit sound effects.

AI creates: openspec/changes/add-sound-effects/
  - Proposes where audio plays
  - Lists requirements
  - Creates implementation tasks

User: /openspec:apply add-sound-effects

AI implements the feature, checking off tasks as it goes.

User: /openspec:archive add-sound-effects

AI moves feature to permanent spec, feature is now "done".
```

## OpenSpec in Practice

### ✅ Things that Need a Proposal
- New features (pause button, difficulty levels, leaderboard)
- Breaking changes (changing game duration, grid size)
- Major architecture changes
- New dependencies

### ❌ Things That DON'T Need a Proposal
- Bug fixes (code not matching current spec)
- Typo fixes or style changes
- Performance improvements
- Adding tests
- Updating dependencies (non-breaking)

**Rule of thumb**: If it changes what the game does, create a proposal. If it just fixes how it does it, no proposal needed.

## Benefits of This Setup

1. **Clear Specifications** - Everyone (you and AI) knows what "done" means
2. **No Surprises** - Features are defined before coding starts
3. **Easy Collaboration** - Multiple people can work on different features without conflicts
4. **History Preserved** - Why was this feature added? Check `changes/archive/`
5. **AI-Friendly** - AI tools know exactly what to build and can focus properly

## Next Steps

1. **Review the current spec**: Read `openspec/specs/game-mechanics/spec.md`
2. **Check the project info**: Look at `openspec/project.md`
3. **Learn the workflow**: Read `openspec/AGENTS.md`
4. **Try adding a feature**: Create your first proposal!

## Need Help?

- **Understanding OpenSpec**: https://kaochenlong.com/openspec
- **Official GitHub**: https://github.com/Fission-AI/OpenSpec
- **This project**: Check `openspec/AGENTS.md` for detailed workflow instructions

---

**Happy developing! 🎮**
