---
title: The mouse still works
description: Dragging, resizing, scrolling, and the trackpad gestures. The mouse repositions a tile. It does not bring back overlapping windows.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/keyboard-mouse-trackpad/
---

# The mouse still works

After this page you can move and resize a tile with the pointer, and you can make the trackpad scroll the way your hands expect.

The mouse is the fine tool. The keys are how you cross the screen. Holding Super and dragging does not turn Omarchy into a desktop where windows overlap by default. It moves a tile into another slot, or it moves a window you have already floated.

## What the pointer does

| Gesture | Result |
| --- | --- |
| `Super + left-drag` | Move the window. On dwindle, dropping it on another tile swaps the two. |
| `Super + right-drag` | Resize the focused window. |
| `Super + scroll` | Move through workspaces. |
| Click a tile | Focus it. You can also focus with `Super + Arrow`, which jumps the pointer to the middle of that window. |

`Alt + Tab` cycles windows on the active workspace, which is the reliable way to reach a floating window when `Super + Arrow` stays inside the tiles. The hotkey chapter is explicit: `Alt + Tab` is this workspace, not every app on the machine.

## The trackpad, if it feels backwards

Omarchy's defaults live in `~/.config/hypr/input.lua`. The menu opens that file at *Setup > Input*. Anything you set replaces the default for that key. The manual's natural-scroll and three-finger workspace swipe are:

```lua
hl.config({
  input = {
    touchpad = {
      natural_scroll = true,
    },
  },
})

hl.gesture({ fingers = 3, direction = "horizontal", action = "workspace" })
```

That file is `examples/hypr/trackpad.lua`. The [keyboard chapter](https://omarchy.org/manual/keyboard-mouse-trackpad/) also shows how to speed up key repeat, change pointer sensitivity, and switch the compose key off Caps Lock. Copy the piece you need. Leave the rest.

Three-finger swipe is a convenience on top of `Super + 1` through `4`. If you add it in week one, you will keep swiping past the workspace you wanted. Add it after the numbers are automatic.

## Corners and gaps, later

The default look is square corners and visible gaps. Both are optional, and both are in [Common tweaks](https://omarchy.org/manual/common-tweaks/):

- Rounding is `rounding = 8` inside `hl.config` in `~/.config/hypr/looknfeel.lua`.
- `Super + Shift + Backspace` toggles gaps and borders off for now.
- Setting `gaps_in`, `gaps_out`, and `border_size` to `0` in the same file removes them for good.
- `Super + Shift + Space` hides the top bar. `Super + Ctrl + Backspace` keeps a lone window from stretching across an ultrawide panel, by toggling a square aspect.

Do these after the layout makes sense. A theme and a gap size will not fix a workspace with eight tiles on it.

## When this goes wrong

- Dragging a tiled window "does nothing useful." You dropped it and it swapped. That is the dwindle behavior. Float it first with `Super + T` if you wanted a free position.
- `Super + Arrow` will not enter a floating window. Use `Alt + Tab`, or tile it.
- The trackpad gesture moves workspaces and you cannot stop on the right one. Delete the `hl.gesture` line and use the numbers.
- You changed `input.lua` and the keyboard repeat is now absurd. *Update > Config* restores a single shipped config. The manual notes that an update can also park your edits in a `.bak` file beside the original.

Continue with the [translation tables](./translation-tables.md).
