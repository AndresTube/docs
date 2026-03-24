# Aurus Documentation

> A packet-based 3D menu system for Paper servers (1.20.1+)

## Pages

- [Getting Started](./Getting-Started)
- [Menu Configuration](./Menu-Configuration)
- [Component Types](./Component-Types)
- [Actions](./Actions)
- [Animations](./Animations)
- [Placeholders](./Placeholders)
- [Commands & Permissions](./Commands)

---

## Quick Example

```yaml
my_menu:
  distance: 2.5
  update-in-ticks: 20
  components:
    title:
      type: TEXT
      text: "<gold>Hello, <aqua>%player_name%!"
      x: 0.0
      y: 2.0
      size: 2.0
      background: false
    close_btn:
      type: BUTTON
      text: "<red>[ Close ]"
      x: 0.0
      y: -1.5
      size: 1.2
      actions:
        - "[close]"
```

Open it with: `/au open my_menu`
