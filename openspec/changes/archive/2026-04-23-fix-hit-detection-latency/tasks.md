## 1. Logic Refactoring

- [x] 1.1 Update `hitMole` to check for the `up` class on the clicked hole instead of comparing indices
- [x] 1.2 Modify `hitMole` to immediately remove the `up` class upon a successful hit
- [x] 1.3 Simplify `clearActiveMole` to focus on removing the `up` class from all holes or the `activeIndex`

## 2. Verification

- [x] 2.1 Verify that clicking a mole increments the score
- [x] 2.2 Verify that clicking the same mole twice rapidly only increments the score once
- [x] 2.3 Verify that clicking an empty hole does nothing

## 3. Archive Readiness

- [x] 3.1 Merge finalized requirements into `openspec/specs/mole-arena/spec.md`
- [x] 3.2 Confirm no remaining baseline-relative delta exists for this change
- [x] 3.3 Archive the change
