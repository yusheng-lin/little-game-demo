## 1. Logic Refactoring

- [ ] 1.1 Update `hitMole` to check for the `up` class on the clicked hole instead of comparing indices
- [ ] 1.2 Modify `hitMole` to immediately remove the `up` class upon a successful hit
- [ ] 1.3 Simplify `clearActiveMole` to focus on removing the `up` class from all holes or the `activeIndex`

## 2. Verification

- [ ] 2.1 Verify that clicking a mole increments the score
- [ ] 2.2 Verify that clicking the same mole twice rapidly only increments the score once
- [ ] 2.3 Verify that clicking an empty hole does nothing
