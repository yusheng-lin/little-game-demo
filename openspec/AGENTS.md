# OpenSpec Workflow Guide for AI Agents

This document explains how to work with this project using the OpenSpec Spec-Driven Development (SDD) methodology.

## What is OpenSpec?

OpenSpec is a lightweight framework for Spec-Driven Development that helps you:
- Define specifications for features before implementation
- Track proposed changes separately from current system specs
- Maintain a clear history of what changed and why
- Work more effectively with AI code generation tools

## Project Structure

```
openspec/
├── project.md          # Project information and development conventions
├── AGENTS.md          # This file - workflow instructions for AI
├── specs/             # Current system specifications (ground truth)
│   └── game-mechanics/
│       └── spec.md    # Game mechanics requirements and scenarios
└── changes/           # Proposed changes and features in progress
    └── archive/       # Completed changes with timestamps
```

## Three-Stage Workflow

### Stage 1: Draft Proposal (Create a Change Proposal)

**When**: You want to add a feature, make a breaking change, or modify architecture.

**How to ask the AI**:
```
/openspec:proposal [Feature description]
```

Example:
```
/openspec:proposal Add sound effects to the game
```

Or in natural language:
```
Please create an OpenSpec change proposal for adding sound effects to the game.
```

**What happens**:
- The AI creates a new directory in `openspec/changes/` with your feature name
- The AI generates these files:
  - `proposal.md` - Explains why, what changes, and impact
  - `tasks.md` - Checklist of implementation steps
  - `specs/` - Subfolder containing requirement changes in Delta format

**Delta Format** uses `## ADDED`, `## MODIFIED`, and `## REMOVED` sections:
- `## ADDED` for new requirements
- `## MODIFIED` for changed requirements (provide complete content)
- `## REMOVED` for deleted requirements with reason

### Stage 2: Implement (Start Implementation)

**When**: After the proposal is reviewed and approved.

**How to ask the AI**:
```
/openspec:apply [feature-name]
```

Example:
```
/openspec:apply add-sound-effects
```

**What happens**:
- The AI reads the `proposal.md` and `tasks.md`
- It implements each task in order
- It updates each checkbox as tasks complete: `- [ ]` → `- [x]`
- You can see progress in real-time by viewing `tasks.md`

**Important**: If the AI tries to do something not in the proposal, remind it:
> "This is outside the proposal scope. Please focus on the tasks in `tasks.md`."

### Stage 3: Archive (Complete and Record)

**When**: All tasks are complete and tested.

**How to ask the AI**:
```
/openspec:archive [feature-name]
```

Example:
```
/openspec:archive add-sound-effects
```

**What happens**:
- The entire feature directory moves to `changes/archive/`
- It's renamed with a timestamp (e.g., `2026-04-22-add-sound-effects/`)
- The Delta specs are merged into the main `specs/` directory
- The feature becomes part of the permanent system specification

## Working with Specs

### Spec File Structure

Each `spec.md` follows this format:

```markdown
# [Feature Name] Specification

## Purpose
Brief explanation of what this spec covers.

## Requirements

### Requirement: [Name]

[Clear requirement statement using SHALL or MUST]

#### Scenario: [Situation]

- WHEN [user action or trigger]
- THEN [expected system behavior]
- AND [additional behavior]
```

### Key Format Rules

1. **Every Requirement needs at least one Scenario**
   - Scenarios are acceptance tests
   - They define what "done" means

2. **Use `####` for Scenario headers**
   - Correct: `#### Scenario: User clicks button`
   - Incorrect: `### Scenario:` or `- **Scenario:**`

3. **Use SHALL or MUST in requirement statements**
   - `SHALL` = required behavior
   - `SHOULD` = recommended behavior
   - `MAY` = optional behavior

### Common Mistakes to Avoid

❌ **Don't**: Write requirements without scenarios
```markdown
### Requirement: User Login
The user SHALL be able to log in.
```

✅ **Do**: Include scenarios with acceptance criteria
```markdown
### Requirement: User Login

The user SHALL be able to log in with email and password.

#### Scenario: Successful login
- WHEN the user enters correct credentials
- THEN the system returns a JWT token
```

❌ **Don't**: Use wrong Scenario header level
```markdown
### Scenario: User logs in
```

✅ **Do**: Use level 4 headers for scenarios
```markdown
#### Scenario: User logs in
```

## When You Don't Need a Proposal

You can skip the proposal stage for:

1. **Bug fixes** - Making code match existing specs
2. **Typos and formatting** - Comments, whitespace, no behavior change
3. **Non-breaking dependency updates** - Version bumps that don't change API
4. **Configuration changes** - Settings that don't affect system behavior
5. **Adding tests for existing behavior** - Just verifying what already works

**Decision**: If the change would make system behavior differ from `specs/`, create a proposal.

## Useful Commands (When npm is installed)

```bash
# List all changes
openspec list

# Show a specific change or spec
openspec show [name]

# Validate proposal format
openspec validate [name] --strict

# View interactive dashboard
openspec view
```

## Tips for Working with AI

1. **Fill out `project.md` completely** - AI uses this for context
2. **Review proposals before implementation** - Make sure the AI understood correctly
3. **Keep scenarios concrete** - Avoid vague acceptance criteria
4. **Use natural language in proposals** - AI will convert to proper format
5. **Re-ask if something is wrong** - Tell AI what to fix, don't manually edit specs

## Example: Adding a Feature

### Step 1: Create Proposal
```
User: I want to add a pause button to the game.
```
AI creates: `openspec/changes/add-pause-button/`
- Proposes where pause button goes
- Lists what game state needs pausing
- Defines scenarios for pause/resume

### Step 2: Review & Adjust
```
User: Can you add a "paused" message to the UI?
```
AI updates the proposal to include UI message requirement.

### Step 3: Start Implementation
```
User: /openspec:apply add-pause-button
```
AI starts implementing from the checklist.

### Step 4: Fix Issues
```
User: The pause button isn't re-enabling on resume. Please check tasks.md.
```
AI reviews and fixes the issue, keeps checklist updated.

### Step 5: Archive
```
User: /openspec:archive add-pause-button
```
AI archives the feature, merges specs into main system spec.

## Questions?

- Read more at: https://kaochenlong.com/openspec
- Latest version: https://github.com/Fission-AI/OpenSpec
- Current version in this project: OpenSpec 1.0+
