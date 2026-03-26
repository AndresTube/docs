# Components

Components are added inside [areas](/aurus/api/areas) using `addComponent`.

## Component Types

| Type | Description |
|------|-------------|
| `TEXT` | Static text display |
| `BUTTON` | Clickable text with actions |
| `INPUT` | Text field that prompts chat input |
| `ITEM` | Item display entity |
| `BLOCK` | Block display entity |
| `ENTITY` | Mob entity |
| `PLAYER` | Fake player with skin |

## Common Properties

All components support:

```java
.position(x, y, z)     // relative to area position
.size(1.5)              // scale factor
.rotation(rx, ry, rz)  // euler rotation
.sound("minecraft:ui.button.click")
.hitbox(width, height)  // custom click hitbox
```

## Text / Button / Input

```java
.text("<gold>Hello")
.background(true)
.shadow(false)
.alignment("CENTER")    // CENTER, LEFT, RIGHT
```

Buttons also accept actions:

```java
.action("[player] spawn")
.action("[close]")
```

Input components need a variable name:

```java
.type(ComponentType.INPUT)
.variableName("player_name")
.fallbackMessage("<gray>Type your name in chat:")
```

## Item / Block

```java
.type(ComponentType.ITEM)
.material("DIAMOND_SWORD")
.modelId(1234)

.type(ComponentType.BLOCK)
.material("STONE")
```

## Entity / Player

```java
.type(ComponentType.ENTITY)
.entity("ZOMBIE")
.headRotation(45f, 0f)

.type(ComponentType.PLAYER)
.skin("Notch")
.nametag("<gold>NPC")
.headRotation(30f, -10f)
```

## Hover State

Buttons and inputs can change appearance on hover:

```java
.hover(h -> h
    .text("<aqua>Hovered!")
    .size(1.2)
    .background(false))
```

You can also change the hover type entirely:

```java
.hover(h -> h
    .type(ComponentType.ITEM)
    .material("GOLDEN_APPLE")
    .size(1.0))
```

## Animations

Add formula-based animations using exp4j syntax (variable `t` = time in seconds):

```java
.animation(a -> a
    .scaleFormula("1 + 0.2 * sin(t * 3)")
    .rotationFormula("t * 45")
    .yFormula("0.1 * sin(t * 2)"))
```
