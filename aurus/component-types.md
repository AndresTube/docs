---
title: Component Types
description: All available component types
---

# Component Types

Components live inside [areas](/aurus/areas). Their `x` and `y` positions are relative to the area they belong to.

## TEXT

A non-interactive text label.

```yaml
components:
  my_text:
    type: TEXT
    text: "<gray>Server version: <white>1.21.4"
    background: false
    shadow: false
    x: 0.0
    y: 1.5
    size: 1.2
```

## BUTTON

A clickable text label. Fires `actions` when clicked.

```yaml
components:
  my_button:
    type: BUTTON
    text: "<green>[ Play ]"
    x: 0.0
    y: 0.0
    size: 1.5
    sound: "ui.button.click"
    actions:
      - "[close]"
      - "[player] spawn"
```

### Hover

BUTTON and INPUT components can define a `hover` section that swaps the component's appearance when the player's cursor moves over it.

::: details Text-to-text hover
```yaml
components:
  play_button:
    type: BUTTON
    text: "<gray>[ Play ]"
    x: 0.0
    y: 0.0
    size: 1.5
    actions:
      - "[close]"
      - "[player] spawn"
    hover:
      type: BUTTON
      text: "<green><bold>[ Play ]"
      size: 1.5
      background: false
```
:::

::: details Text-to-item hover
```yaml
components:
  sword_button:
    type: BUTTON
    text: "<white>Sword"
    x: 0.0
    y: -1.0
    size: 1.2
    actions:
      - "[console] give %player% diamond_sword"
    hover:
      type: ITEM
      material: DIAMOND_SWORD
      size: 1.2
```
:::

## INPUT

Opens a chat input box when clicked. Stores the player's response in a named variable.

```yaml
components:
  name_input:
    type: INPUT
    text: "<yellow>Click to set name"
    variable_name: player_custom_name
    fallback-message: "<gray>Write in the chat or type <red>cancel"
    sound: "ui.button.click"
    x: 0.0
    y: 0.0
    size: 1.2
    actions:
      - "[message] <green>Name saved!"
```

- `fallback-message` is optional. Supports MiniMessage formatting.
- `sound` is optional. Custom click sound, same as BUTTON.
- Access the variable in PAPI: `%aurus_variable_player_custom_name%`

## ITEM

Displays a Minecraft item.

```yaml
components:
  my_item:
    type: ITEM
    material: DIAMOND_SWORD
    model-id: 1
    x: 1.5
    y: 0.0
    size: 1.0
```

## BLOCK

Displays a Minecraft block.

```yaml
components:
  my_block:
    type: BLOCK
    material: GRASS_BLOCK
    x: -1.5
    y: 0.0
    size: 0.8
```

## ENTITY

Displays a fake entity, only visible to the menu viewer.

```yaml
components:
  my_entity:
    type: ENTITY
    entity: ZOMBIE
    x: 1.0
    y: -0.5
    rotation:
      x: 30
      x-head: -45
      y-head: 10
```

## PLAYER

Displays a fake player NPC with a skin fetched from Mojang.

```yaml
components:
  my_npc:
    type: PLAYER
    skin: "Notch"
    nametag: "<gold>Notch"
    x: -1.0
    y: -0.5
    rotation:
      x: 30
      x-head: -45
      y-head: 10
```

## Shared properties

| Property | Type | Default | Description |
|---|---|---|---|
| `x` | double | `0.0` | Horizontal offset (relative to area) |
| `y` | double | `0.0` | Vertical offset (relative to area) |
| `z` | double | `1.0` | Depth offset |
| `size` | double | `1.0` | Scale multiplier |
| `hover` | section | none | Hover appearance (BUTTON, INPUT only) |
| `background` | boolean | `true` | Dark background behind text |
| `shadow` | boolean | `false` | Text shadow rendering |

::: info
All text fields support MiniMessage tags and PlaceholderAPI placeholders.
:::
