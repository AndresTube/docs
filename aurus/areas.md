---
title: Areas
description: Group components into bounded areas with scrolling and animations
---

# Areas

Areas are containers that group components together. Every menu must define at least one area inside the `areas` section. Each area has its own position, size bounds, update interval, and optional open/close animations.

## Area types

| Type | Description |
|------|-------------|
| `STATIC` | Fixed area. Components stay in place. |
| `SCROLL` | Scrollable area. The player can scroll vertically using the mouse wheel. Components outside the area bounds are hidden. |

## Area keys

```yaml
my_menu:
  distance: 2.5
  areas:
    main:
      type: STATIC
      x: 0
      y: 0
      size-x: 6.0
      size-y: 4.0
      update-ticks: 20
      open-animation: scale
      close-animation: scale
      animation-duration: 10
      components:
        ...
```

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `type` | string | `STATIC` | Area type: `STATIC` or `SCROLL` |
| `x` | double | `0.0` | Horizontal position of the area center |
| `y` | double | `0.0` | Vertical position of the area center |
| `size-x` | double | `6.0` | Width of the area bounds |
| `size-y` | double | `4.0` | Height of the area bounds |
| `update-ticks` | int | `20` | Ticks between placeholder refreshes for this area |
| `open-animation` | string | `NONE` | Animation played when the menu opens |
| `close-animation` | string | `NONE` | Animation played when the menu closes |
| `animation-duration` | int | `10` | Duration of area animations in ticks |

## Relative positioning

Component `x` and `y` values inside an area are **relative to the area's position**. A component at `x: 1.0, y: 0.5` inside an area at `x: -3.0, y: 0.0` will appear at world position `(-2.0, 0.5)`.

## Scroll areas

When an area has `type: SCROLL`, the player can scroll its contents vertically using the mouse wheel. Components that move outside the area bounds are automatically hidden.

::: warning
When a SCROLL area is present, the player's hotbar items are temporarily saved and cleared to allow mouse wheel detection. Items are restored when the menu closes.
:::

## Open/close animations

| Animation | Effect |
|-----------|--------|
| `NONE` | No animation |
| `SCALE` | Components scale from 0 to full size (open) or full size to 0 (close) |
| `UP` | Components slide in from above |
| `DOWN` | Components slide in from below |
| `LEFT` | Components slide in from the left |
| `RIGHT` | Components slide in from the right |

## Multiple areas

You can define multiple areas per menu. Each area has independent update-ticks, animations, and scroll behavior.

```yaml
my_menu:
  areas:
    header:
      type: STATIC
      x: 0
      y: 2.0
      size-x: 6.0
      size-y: 1.5
      components:
        title:
          type: TEXT
          text: "<gold>Shop"
          x: 0
          y: 0
          size: 2.0
    items:
      type: SCROLL
      x: 0
      y: -0.5
      size-x: 4.0
      size-y: 3.0
      update-ticks: 10
      open-animation: left
      animation-duration: 8
      components:
        item1:
          type: BUTTON
          text: "Sword - $100"
          x: 0
          y: 1.0
          size: 1.0
          actions:
            - "[console] give %player% diamond_sword"
        item2:
          type: BUTTON
          text: "Bow - $50"
          x: 0
          y: 0.0
          size: 1.0
          actions:
            - "[console] give %player% bow"
        item3:
          type: BUTTON
          text: "Shield - $75"
          x: 0
          y: -1.0
          size: 1.0
          actions:
            - "[console] give %player% shield"
```

::: tip
Hover and click detection only works when the cursor is within the area bounds. Components in one area cannot be clicked through another area that overlaps it.
:::
