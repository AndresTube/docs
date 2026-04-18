# Component Conditions & Requirements

Aurus allows you to conditionally render components or restrict button clicks using mathematical, string-based, or permission-based expressions. The system leverages `ConditionEvaluator` natively integrated into `MenuButton.java`.

### Properties

- `view-requirements`: A list of expressions. If **any** expression fails, the component will be entirely invisible (hidden). If `update-ticks` is configured in the area, this is checked dynamically, meaning buttons can pop in and out of existence mid-tick!
- `requirements`: A list of expressions. Evaluated exactly when the player clicks the button. If it fails, the `actions` list is canceled.
- `deny-actions`: Actions executed if `requirements` fail.

### Supported Expressions

**Permissions:**
```yaml
view-requirements:
  - "permission: aurus.vip"
```

**Math (Placeholders):**
Supported operators: `==`, `!=`, `<`, `>`, `<=`, `>=`. Internally parses numerical value of placeholders.
```yaml
requirements:
  - "%vault_eco_balance% >= 100"
deny-actions:
  - "[message] <red>You do not have $100!"
```

**String Equality:**
Automatically falls back to string-matching if numerical parsing fails.
```yaml
view-requirements:
  - "%player_world% == world_nether"
```

### Complete Example

```yaml
components:
  admin_button:
    type: BUTTON
    text: "<red>BAN PLAYER"
    x: 0.0
    y: 0.0
    view-requirements:
      - "permission: group.admin"
    requirements:
      - "%player_is_op% == true"
    actions:
      - "[console] ban %player%"
    deny-actions:
      - "[sound] block.note_block.bass"
```
