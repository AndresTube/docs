---
title: Menu Configuration
description: Root keys, areas, component keys, and coordinate system
---

# Menu Configuration

Each `.yml` file inside `plugins/Aurus/menus/` can hold one or more menus.

## Root keys

```yaml
my_menu:
  distance: 2.5
  update-placeholders: true
  location: "world,100,64,200,0,0"
  on-open:
    - "[sound] entity.player.levelup, 1.0, 1.5"
    - "[message] <green>Welcome!"
  on-close:
    - "[message] <red>Goodbye!"
  areas:
    ...
```

| Key | Type | Default | Description |
|---|---|---|---|
| `distance` | double | `2.5` | Distance from the player's eyes to the menu plane |
| `update-placeholders` | boolean | `true` | Whether placeholder text should refresh |
| `location` | string | none | Teleports the player to a fixed location |
| `on-open` | string list | `[]` | Actions to run when the menu opens |
| `on-close` | string list | `[]` | Actions to run when the menu closes |

## Areas

Components are organized into **areas**. Each area is a bounded container with its own settings. See [Areas](/aurus/areas) for full documentation.

```yaml
my_menu:
  areas:
    main:
      type: STATIC
      x: 0
      y: 0
      size-x: 6.0
      size-y: 4.0
      update-ticks: 20
      components:
        my_button:
          type: BUTTON
          ...
```

## Component keys

| Key | Type | Default | Description |
|---|---|---|---|
| `type` | string | `BUTTON` | Component type |
| `x` | double | `0.0` | Horizontal offset (relative to area) |
| `y` | double | `0.0` | Vertical offset (relative to area) |
| `z` | double | `1.0` | Depth offset |
| `size` | double | `1.0` | Scale multiplier |
| `hitbox.width` | double | auto | Custom hitbox width |
| `hitbox.height` | double | auto | Custom hitbox height |
| `background` | boolean | `true` | Show dark background (TEXT, BUTTON, INPUT) |
| `shadow` | boolean | `false` | Text shadow (TEXT, BUTTON, INPUT) |

## Coordinate system

`x: 0, y: 0` is the exact center of the player's screen.

```
        y+
        |
  x-  --+--  x+
        |
        y-
```

::: tip
Click areas use axis-aligned bounding boxes (AABB). Text components automatically size their hitbox to match the text width. Use `hitbox.width` and `hitbox.height` to override. When components overlap at different `z` values, the one closest to the camera (lowest `z`) takes priority.
:::
