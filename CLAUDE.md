# OpenSpec Instructions for Claude Code

## Quick Setup

When working on this project, follow these steps:

### Step 1: Read Project Context
Please read and understand:
1. `openspec/project.md` - Project info and conventions
2. `openspec/AGENTS.md` - OpenSpec workflow
3. The relevant spec in `openspec/specs/` for what you're working on

### Step 2: Create Change Proposals
When adding features:
```
/openspec:proposal [Feature description]
```

The system will create a structured proposal with:
- `proposal.md` - Why, what, and impact
- `tasks.md` - Implementation checklist
- `specs/` - Requirement changes

### Step 3: Implement from Proposal
When approved:
```
/openspec:apply [feature-name]
```

Follow the tasks in `tasks.md` and keep them updated.

### Step 4: Archive When Complete
```
/openspec:archive [feature-name]
```

## Important Rules

- ✅ **Every requirement MUST have scenarios** - These are acceptance tests
- ✅ **Use `## ADDED/MODIFIED/REMOVED`** - In Delta specs for clarity
- ✅ **Scenarios use `####` headers** - Not `###` or markdown lists
- ✅ **Use SHALL/MUST** - For requirement statements
- ✅ **Update tasks.md** - Check off completed items: `- [ ]` → `- [x]`

❌ **Don't modify spec files directly** - Ask the user to update them, then re-validate

❌ **Don't skip proposal stage** - Even if asked, create the proposal first

❌ **Don't exceed scope** - Stick to what's in the proposal, ask if you need to change scope

## OpenSpec Files Structure

```
openspec/
├── project.md          # Must read first - has project context
├── AGENTS.md          # Workflow instructions (this gives you workflow detail)
├── specs/
│   └── game-mechanics/spec.md    # Current game requirements (ground truth)
└── changes/
    ├── [feature-name]/           # A feature being worked on
    │   ├── proposal.md           # What and why
    │   ├── tasks.md              # Todo list
    │   └── specs/
    │       └── game-mechanics/spec.md    # What changes
    └── archive/                  # Completed features
```

## Example Interaction

```
User: I want to add a pause button to the game.

You: Reading project.md and AGENTS.md...
     Creating proposal for pause feature...
     [Creates openspec/changes/add-pause-button/proposal.md]
     
User: Looks good, start implementing.

You: /openspec:apply add-pause-button
     Implementing task 1: Add pause button HTML...
     Implementing task 2: Add pause game logic...
     [Marks tasks complete as you go]
     
User: Looks perfect!

You: /openspec:archive add-pause-button
     Moving feature to archive, merging specs...
     Complete! Feature is now part of the game spec.
```

## Key Points

- Read `openspec/project.md` to understand tech stack and conventions
- Read `openspec/AGENTS.md` for detailed workflow explanation
- Current specs are in `openspec/specs/` - This is what the game currently does
- Always validate proposals before implementation
- Keep `tasks.md` updated to show progress
- Archive when complete to preserve history

Let's build great things! 🚀
