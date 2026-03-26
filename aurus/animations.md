---
title: Animations
description: Formula animations and area open/close animations
---

# Animations

## Formula animations

Any component with a Display entity (TEXT, BUTTON, INPUT, ITEM, BLOCK) can have an `animations` block.

The variable `t` increases by `0.05` every tick (reaches about 3.0 per second).

### Available formulas

| Key | Description |
|---|---|
| `scale-formula` | Sets the scale of the component each tick |
| `rotation-formula` | Sets the Z-rotation in degrees each tick |
| `x-formula` | Adds an offset to the base X position |
| `y-formula` | Adds an offset to the base Y position |
| `z-formula` | Adds an offset to the base Z position |

### Examples

#### Breathing pulse

```yaml
areas:
  main:
    type: STATIC
    x: 0
    y: 0
    size-x: 6.0
    size-y: 4.0
    components:
      my_button:
        type: BUTTON
        text: "<gold>[ Play ]"
        x: 0.0
        y: 0.0
        size: 1.5
        animations:
          scale-formula: "1.5 + 0.1 * sin(t * 3)"
```

#### Spinning item

```yaml
components:
  my_item:
    type: ITEM
    material: NETHER_STAR
    x: 0.0
    y: 1.0
    size: 1.2
    animations:
      rotation-formula: "t * 60"
```

#### Floating up and down

```yaml
components:
  my_text:
    type: TEXT
    text: "<aqua>Welcome"
    x: 0.0
    y: 2.0
    background: false
    size: 2.0
    animations:
      y-formula: "0.15 * sin(t * 2)"
```

#### Orbiting

```yaml
components:
  my_item:
    type: ITEM
    material: BLAZE_ROD
    x: 0.0
    y: 0.0
    size: 0.8
    animations:
      x-formula: "1.5 * cos(t)"
      y-formula: "1.5 * sin(t)"
```

::: warning
Formula animations only work on display components (TEXT, BUTTON, INPUT, ITEM, BLOCK). ENTITY and PLAYER types do not support formula animations.
:::

::: tip
Formula evaluation uses [exp4j](https://www.objecthunter.net/exp4j/). Supported functions: `sin`, `cos`, `tan`, `abs`, `sqrt`, `log`, `pow`, etc.
:::

## Area open/close animations

Areas can play transition animations when the menu opens or closes. These are configured per-area using the `open-animation`, `close-animation`, and `animation-duration` keys.

### Animation types

| Type | Open effect | Close effect |
|------|------------|--------------|
| `NONE` | No animation | No animation |
| `SCALE` | Scale from 0 to full size | Scale from full size to 0 |
| `UP` | Slide in from above | Slide out upwards |
| `DOWN` | Slide in from below | Slide out downwards |
| `LEFT` | Slide in from the left | Slide out to the left |
| `RIGHT` | Slide in from the right | Slide out to the right |

### Example

```yaml
my_menu:
  areas:
    main:
      type: STATIC
      x: 0
      y: 0
      size-x: 6.0
      size-y: 4.0
      open-animation: scale
      close-animation: scale
      animation-duration: 10
      components:
        ...
    sidebar:
      type: STATIC
      x: -3.5
      y: 0
      size-x: 2.0
      size-y: 3.0
      open-animation: left
      close-animation: left
      animation-duration: 8
      components:
        ...
```

::: tip
When multiple areas have close animations, the menu waits for the longest animation to finish before cleaning up.
:::
