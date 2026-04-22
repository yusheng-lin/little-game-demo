# OpenSpec Workflow Summary

This file summarizes the three-command OpenSpec workflow for this project.

## Three Main Commands

### 1. Create Proposal
```bash
/openspec:proposal [description]
```
Creates a new feature proposal in `openspec/changes/[feature-name]/`

**Files created:**
- `proposal.md` - Problem statement and scope
- `tasks.md` - Implementation checklist
- `specs/` - Delta format changes (ADDED/MODIFIED/REMOVED)

### 2. Apply Implementation
```bash
/openspec:apply [feature-name]
```
Implements the feature from the proposal

**What it does:**
- Reads `proposal.md` for context
- Follows `tasks.md` step by step
- Updates checkboxes as work completes
- Stays within scope defined in proposal

### 3. Archive Completion
```bash
/openspec:archive [feature-name]
```
Moves feature to permanent record

**What it does:**
- Moves `openspec/changes/[feature-name]` → `openspec/changes/archive/[DATE]-[feature-name]`
- Merges Delta specs into main `openspec/specs/`
- Feature becomes part of system specification
- History is preserved for reference

## Delta Format (for specs)

When changes affect requirements, use three sections:

```markdown
## ADDED Requirements
### Requirement: [New Feature]
[Requirement description with scenarios]

## MODIFIED Requirements
### Requirement: [Changed Feature]
[Complete updated requirement with scenarios]

## REMOVED Requirements
### Requirement: [Deleted Feature]
**Reason**: [Why it's removed]
**Migration**: [How to handle existing data/users]
```

## File Structure After Changes

### Before archiving:
```
openspec/
├── specs/game-mechanics/spec.md (current spec)
└── changes/add-pause-button/
    ├── proposal.md
    ├── tasks.md
    └── specs/game-mechanics/spec.md (delta)
```

### After archiving:
```
openspec/
├── specs/game-mechanics/spec.md (updated with pause feature)
└── changes/archive/2026-04-22-add-pause-button/
    ├── proposal.md
    ├── tasks.md
    └── specs/game-mechanics/spec.md (delta record)
```

## How to Use

1. **Start in openspec/project.md** - Read project context
2. **Check openspec/specs/** - See what currently exists
3. **Create proposal** - `/openspec:proposal add-feature-name`
4. **Review proposal** - Make sure it matches your intent
5. **Implement** - `/openspec:apply add-feature-name`
6. **Archive** - `/openspec:archive add-feature-name`

## Common Patterns

### Simple Feature (one spec file affected)
```
openspec/changes/add-pause/
├── proposal.md
├── tasks.md
└── specs/
    └── game-mechanics/
        └── spec.md (adds Pause requirement)
```

### Complex Feature (multiple spec files affected)
```
openspec/changes/add-multiplayer/
├── proposal.md
├── tasks.md
└── specs/
    ├── game-mechanics/spec.md (changes scoring)
    ├── networking/spec.md (new, adds requirements)
    └── ui/spec.md (changes interface)
```

## Validation Checklist

Before archiving, verify:

- ✅ All requirements have scenarios (`####` headers)
- ✅ Scenarios use WHEN/THEN/AND format
- ✅ Requirements use SHALL or MUST
- ✅ All tasks in tasks.md are checked `[x]`
- ✅ Tests pass
- ✅ No unrelated changes in implementation
- ✅ Delta specs properly formatted (ADDED/MODIFIED/REMOVED)

## References

- Full guide: https://kaochenlong.com/openspec
- Repo: https://github.com/Fission-AI/OpenSpec
- See `openspec/AGENTS.md` for detailed workflow
