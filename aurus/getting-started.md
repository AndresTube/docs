---
title: Getting Started
description: Requirements, installation, and file structure for Aurus
---

# Getting Started

## Requirements

| Requirement | Version |
|---|---|
| Paper Server | 1.20.1+ |
| Java | 17+ |
| PacketEvents | 2.x (separate plugin) |
| PlaceholderAPI (optional) | Any |

## Installation

1. Install **PacketEvents 2.x** as a separate plugin on your Paper server.
2. Drop `Aurus-1.1.4-BETA.jar` into your `plugins/` folder.
3. Start the server — default menus are created in `plugins/Aurus/menus/`.
4. Open a menu in-game: `/au open welcome_server`

## File structure

```
plugins/
  Aurus/
    config.yml
    menus/
      welcome_server.yml
      user_profile.yml
      name_menu.yml
      animated_menu.yml
      pixelart.yml
```

## Dependencies

- **PacketEvents 2.x** — required. Must be installed as a separate plugin.
- **PlaceholderAPI** — optional. Enables placeholder support in text fields and actions.

::: tip
You can hot-reload menus with `/au reload` without restarting the server.
:::
