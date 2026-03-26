# Creating Menus

Use `MenuBuilder` to define menus from code.

## Basic Menu

```java
MenuData menu = AurusAPI.get().createMenu("shop")
    .distance(2.5)
    .updatePlaceholders(true)
    .build();
```

## Menu Options

| Method | Default | Description |
|--------|---------|-------------|
| `distance(double)` | `2.5` | Distance from the player's camera to the menu |
| `updatePlaceholders(boolean)` | `true` | Re-parse placeholders every update cycle |
| `location(String)` | `null` | Fixed world location (`world,x,y,z,yaw,pitch`) |
| `onOpen(String)` | — | Action to run when menu opens |
| `onClose(String)` | — | Action to run when menu closes |

## Adding Areas

Menus are organized into **areas**. Use `addArea` with a lambda:

```java
MenuData menu = AurusAPI.get().createMenu("shop")
    .distance(2.5)
    .addArea("main", area -> area
        .type(AreaType.STATIC)
        .position(0, 0)
        .size(6.0, 4.0)
        .updateTicks(20)
        .openAnimation(AnimationType.SCALE)
        .closeAnimation(AnimationType.SCALE)
        .animationDuration(10)
        .addComponent("title", comp -> comp
            .type(ComponentType.TEXT)
            .text("<gold>Shop")
            .position(0, 1.5, 1)
            .size(2.0))
        .addComponent("buy_sword", comp -> comp
            .type(ComponentType.BUTTON)
            .text("<green>Buy Sword")
            .position(0, 0, 1)
            .size(1.5)
            .action("[console] give %player% diamond_sword")
            .action("[close]")))
    .build();
```

## Area Options

| Method | Default | Description |
|--------|---------|-------------|
| `type(AreaType)` | `STATIC` | `STATIC` or `SCROLL` |
| `position(x, y)` | `0, 0` | Area center position |
| `size(sizeX, sizeY)` | `6.0, 4.0` | Area bounds |
| `updateTicks(int)` | `20` | Placeholder refresh interval |
| `openAnimation(AnimationType)` | `NONE` | Open animation |
| `closeAnimation(AnimationType)` | `NONE` | Close animation |
| `animationDuration(int)` | `10` | Animation duration in ticks |

## Adding Components to Areas

Components are added inside areas using `addComponent`:

```java
.addArea("sidebar", area -> area
    .type(AreaType.SCROLL)
    .position(-3.0, 0)
    .size(2.0, 3.0)
    .addComponent("item1", comp -> comp
        .type(ComponentType.BUTTON)
        .text("Option 1")
        .position(0, 1.0, 1)
        .size(1.0)
        .action("[message] Selected 1"))
    .addComponent("item2", comp -> comp
        .type(ComponentType.BUTTON)
        .text("Option 2")
        .position(0, 0, 1)
        .size(1.0)
        .action("[message] Selected 2")))
```

Or with an explicit type:

```java
.addComponent("my_item", ComponentType.ITEM, comp -> comp
    .material("DIAMOND_SWORD")
    .position(-1, 0, 1)
    .size(0.8))
```

## Open/Close Actions

Actions use the same format as YAML configs:

```java
.onOpen("[sound] minecraft:block.chest.open, 1.0, 1.0")
.onOpen("[message] <gray>Menu opened!")
.onClose("[message] <red>Goodbye!")
```

You can also use the `MenuAction` helper:

```java
.onOpen(MenuAction.sound("minecraft:block.chest.open", 1.0f, 1.0f))
.onClose(MenuAction.message("<red>Goodbye!"))
```
