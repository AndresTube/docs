# Input Validation

The `INPUT` component type handles capturing chat messages and processing them securely through `InputSession`. You can define boundary guidelines using `regex`, `min-length`, and `max-length` to restrict what a player can input.

### Configuration Properties

For any `INPUT` component:
- `variable_name`: The key your input will be saved under (accessed later via `%aurus_variable_{name}%`).
- `regex`: A Java-compliant Regular Expression string. The input must cleanly match this regex.
- `min-length`: Minimum string length (inclusive).
- `max-length`: Maximum string length (inclusive).
- `error-message`: A MiniMessage string dispatched to the player when validation fails. The input prompt is NOT closed when this occurs, allowing the player to retry immediately.

### Example

```yaml
components:
  email_input:
    type: INPUT
    text: "<gold>Enter Email"
    x: 0.0
    y: 0.0
    variable_name: user_email
    regex: "^(.+)@(.+)$"
    min-length: 5
    max-length: 64
    error-message: "<red>You must provide a valid email structure!"
```
