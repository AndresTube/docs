# Component Types

## TEXT

A non-interactive text label.

```yaml
my_text:
  type: TEXT
  text: "<gray>Server version: <white>1.21.4"
  background: false
  shadow: false
  x: 0.0
  y: 1.5
  size: 1.2
```

---

## BUTTON

A clickable text label. Fires `actions` when clicked.

```yaml
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

| Property | Description |
|---|---|
| `sound` | Click sound. Defaults to `minecraft:ui.button.click`. The `minecraft:` prefix is added automatically if omitted |

### Hover

BUTTON and INPUT components can define a `hover` section that swaps the component's appearance when the player's cursor moves over it. The `hover` section accepts the same keys as any component type.

Text-to-text hover (changes text and color on hover):

```yaml
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

Text-to-item hover (swaps from text to an item display on hover):

```yaml
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

---

## INPUT

Opens a chat input box when clicked. Stores the player's response in a named variable.

```yaml
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

`fallback-message` is optional. If set, it replaces the default input prompt message. Supports MiniMessage formatting.

`sound` is optional. Custom click sound, same as BUTTON.

Access the variable in PAPI: `%aurus_variable_player_custom_name%`

---

## ITEM

Displays a Minecraft item.

```yaml
my_item:
  type: ITEM
  material: DIAMOND_SWORD
  model-id: 1
  x: 1.5
  y: 0.0
  size: 1.0
```

| Property | Description |
|---|---|
| `material` | Material name. Supports PAPI placeholders |
| `model-id` | Optional. Sets custom model data on the item |

---

## BLOCK

Displays a Minecraft block.

```yaml
my_block:
  type: BLOCK
  material: GRASS_BLOCK
  x: -1.5
  y: 0.0
  size: 0.8
```

---

## ENTITY

Displays a fake entity, only visible to the menu viewer.

```yaml
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

---

## PLAYER

Displays a fake player NPC with a skin fetched from Mojang. Only visible to the menu viewer.

```yaml
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

| Property | Description |
|---|---|
| `skin` | Username to fetch the skin from. Supports placeholders (e.g. `%player%` for the viewer's own skin) |
| `nametag` | Text shown above the NPC. If empty or omitted, the nametag is hidden |

---

## Shared Properties

All component types support these properties:

| Property | Type | Default | Description |
|---|---|---|---|
| `x` | double | `0.0` | Horizontal offset on the menu plane |
| `y` | double | `0.0` | Vertical offset on the menu plane |
| `z` | double | `1.0` | Depth offset (forward/backward) |
| `size` | double | `1.0` | Scale multiplier (affects hitbox for buttons) |
| `rotation.x/y/z` | double | `0` | Visual rotation in degrees (display entities) |
| `rotation.x` | double | `0` | Body yaw (PLAYER/ENTITY) |
| `rotation.x-head` | double | `0` | Head horizontal turn, independent from body (PLAYER/ENTITY) |
| `rotation.y-head` | double | `0` | Head pitch, tilt up/down (PLAYER/ENTITY) |
| `hover` | section | *(none)* | Optional hover appearance (BUTTON, INPUT only). Accepts the same keys as any component type |

Text-based types (TEXT, BUTTON, INPUT) also support:

| Property | Type | Default | Description |
|---|---|---|---|
| `background` | boolean | `true` | Show the dark background behind the text |
| `shadow` | boolean | `false` | Enable text shadow rendering |

---

> **Text Formatting:** All `text` fields support MiniMessage tags (`<red>`, `<gradient:...>`, etc.) and legacy `§` codes. PlaceholderAPI placeholders (`%placeholder%`) are also supported.

---

[Home](./Home) | [Getting Started](./Getting-Started) | [Menu Configuration](./Menu-Configuration) | **Component Types** | [Actions](./Actions) | [Animations](./Animations) | [Placeholders](./Placeholders) | [Commands](./Commands)
