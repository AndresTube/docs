---
title: Placeholders
description: PlaceholderAPI support and Aurus variables
---

# Placeholders

Aurus supports PlaceholderAPI in all text fields and action strings.

## Using placeholders

```yaml
info:
  type: TEXT
  text: "<gray>Player: <white>%player_name%"
  x: 0.0
  y: 0.8
  size: 1.1
```

They refresh every `update-in-ticks` ticks.

## Aurus variables

| Placeholder | Returns |
|---|---|
| `%aurus_variable_<name>%` | The stored value of an INPUT variable |

### Example

1. Create an INPUT component with `variable_name: my_nickname`
2. Use it anywhere via PAPI: `%aurus_variable_my_nickname%`

## Legacy color codes

Both `§` (section sign) and `&` codes are automatically converted before rendering. You can mix them with MiniMessage freely.

```yaml
text: "&aGreen text from a plugin"     # works
text: "§cRed text"                     # works
text: "<green>MiniMessage also works"  # works
```
