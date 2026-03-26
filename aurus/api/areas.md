# Areas (API)

Areas group components into bounded containers with independent settings. Use `AreaBuilder` inside `MenuBuilder.addArea()`.

## Creating an area

```java
MenuData menu = AurusAPI.get().createMenu("my_menu")
    .distance(2.5)
    .addArea("main", area -> area
        .type(AreaType.STATIC)
        .position(0, 0)
        .size(6.0, 4.0)
        .updateTicks(20)
        .addComponent("title", comp -> comp
            .type(ComponentType.TEXT)
            .text("<gold>Title")
            .position(0, 1.5, 1)
            .size(2.0)))
    .build();
```

## AreaBuilder methods

| Method | Default | Description |
|--------|---------|-------------|
| `type(AreaType)` | `STATIC` | `AreaType.STATIC` or `AreaType.SCROLL` |
| `position(x, y)` | `0, 0` | Center position of the area |
| `x(double)` | `0` | Horizontal position |
| `y(double)` | `0` | Vertical position |
| `size(sizeX, sizeY)` | `6.0, 4.0` | Width and height bounds |
| `sizeX(double)` | `6.0` | Width |
| `sizeY(double)` | `4.0` | Height |
| `updateTicks(int)` | `20` | Ticks between placeholder refreshes |
| `openAnimation(AnimationType)` | `NONE` | Animation on menu open |
| `closeAnimation(AnimationType)` | `NONE` | Animation on menu close |
| `animationDuration(int)` | `10` | Animation duration in ticks |
| `addComponent(id, Consumer<ComponentBuilder>)` | — | Add a component to this area |

## AreaType enum

```java
import com.fendrixx.aurus.api.component.AreaType;

AreaType.STATIC  // Fixed area
AreaType.SCROLL  // Vertically scrollable area
```

## AnimationType enum

```java
import com.fendrixx.aurus.api.component.AnimationType;

AnimationType.NONE   // No animation
AnimationType.SCALE  // Scale in/out
AnimationType.UP     // Slide from above
AnimationType.DOWN   // Slide from below
AnimationType.LEFT   // Slide from left
AnimationType.RIGHT  // Slide from right
```

## Scroll areas

Scroll areas allow the player to vertically scroll through components using the mouse wheel. Components that scroll outside the area bounds are automatically hidden.

```java
.addArea("list", area -> area
    .type(AreaType.SCROLL)
    .position(0, -0.5)
    .size(4.0, 3.0)
    .addComponent("item1", comp -> comp
        .type(ComponentType.BUTTON)
        .text("Item 1")
        .position(0, 1.0, 1))
    .addComponent("item2", comp -> comp
        .type(ComponentType.BUTTON)
        .text("Item 2")
        .position(0, 0, 1))
    .addComponent("item3", comp -> comp
        .type(ComponentType.BUTTON)
        .text("Item 3")
        .position(0, -1.0, 1)))
```

## ActiveMenu area access

```java
ActiveMenu active = AurusAPI.get().getActiveMenu(player);
Set<String> areaIds = active.getAreaIds();      // e.g. ["main", "sidebar"]
Set<String> compIds = active.getComponentIds();  // flattened across all areas
```

## AreaData (immutable)

If you need to build area data separately:

```java
AreaData area = AreaData.builder("sidebar")
    .type(AreaType.SCROLL)
    .position(-3, 0)
    .size(2.0, 3.0)
    .updateTicks(10)
    .openAnimation(AnimationType.LEFT)
    .animationDuration(8)
    .build();

MenuData menu = AurusAPI.get().createMenu("shop")
    .addArea(area)
    .build();
```
