---
title: The mental model
description: Workspaces, dwindle, floating, and groups. The four ideas that replace dragging windows around.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/navigation/
---

# The mental model

After this page you can predict where a new window will land, and you can choose the layout that fits the job in front of you.

On Windows and macOS a window has a position. You drag it there. It stays. It covers whatever was underneath, and you spend the week digging.

On Omarchy a window has a **slot in a tree**. The first window on a workspace fills the screen. The next one splits the window that is focused. You pick a neighbor by focusing a window first, then launching. Nothing covers anything else unless you ask for a floating window.

```text
One window                Two windows               Three windows

+------------------+      +--------+--------+      +--------+--------+
|                  |      |        |        |      |        |        |
|     browser      |      |  term  | browser|      |  term  | browser|
|                  |      |        |        |      |        +--------+
|                  |      |        |        |      |        |  files |
+------------------+      +--------+--------+      +--------+--------+
```

The third window split the browser because the browser was focused. Focus the terminal before you launch, and the new window splits the terminal instead.

Four ideas carry the desktop. Everything else is a key on top of one of them.

## Workspaces

The manual documents workspaces **1 through 4**:

| Keys | What happens |
| --- | --- |
| `Super + 1` through `Super + 4` | Jump there |
| `Super + Shift + 1` through `4` | Send the focused window there, and follow it |
| `Super + Shift + Alt + 1` through `4` | Send it, and stay where you are |
| `Super + Tab` / `Super + Shift + Tab` | Next workspace, previous workspace |
| `Super + Ctrl + Tab` | The workspace you just left |

`Super + K` is the authority for whether your build also binds 5 through 0. Teach the numbers that list shows you. The [hotkey chapter](https://omarchy.org/manual/hotkeys/) publishes 1 through 4.

Workspaces are the overlapping windows you used to keep. The browser does not sit on top of the editor. The browser is on workspace 1 and the editor is on workspace 2, and the jump is instant. A worked assignment is on [Leave overlapping windows](./from-overlapping-windows.md).

## Dwindle, the default layout

Dwindle keeps every window on the workspace visible. Open more and they get smaller. They do not slide off the edge.

`Super + J` flips the split at the focused window between side by side and stacked. The first-hour exercise is this key.

## Scrolling, the other layout

`Super + L` turns **this workspace** into a scrolling row. Windows line up side by side and continue past the edge of the screen. You move along the row. Press `Super + L` again for dwindle.

The choice sticks, per workspace, across restarts. Workspace 1 can stay dwindle for the browser. Workspace 2 can stay scrolling for a long line of editor, terminal, and agent. The same switch is *Trigger > Toggle > Workspace Layout* in the menu.

To make scrolling the default for new workspaces, the manual's snippet in `~/.config/hypr/looknfeel.lua` is:

```lua
hl.config({
  general = {
    layout = "scrolling",
  },
})
```

The same text is in `examples/hypr/scrolling-by-default.lua`. Leave the default on dwindle until week two. Scrolling is the layout with the rough edges, and [When it feels broken](./when-it-feels-broken.md) lists them.

## Floating

`Super + T` toggles the focused window between tiled and floating. Floating is the old desktop, for one window: a position, a size, and it sits on top.

Omarchy already floats the windows that should float. The activity monitor (`Super + Ctrl + T`) is the one you will meet first. Dialogs, password prompts, and video players are the usual company. An app that floats when you wanted a tile gets `Super + T`. An app that tiles when you wanted a dialog gets a [window rule](./when-it-feels-broken.md).

`Super + O` **pops** the focused window out. It becomes floating and pinned, and it follows you onto every workspace. A video, a timer, a small note. Pop it again and it returns to a tile on the workspace you are on.

## Groups

`Super + G` groups the focused window. Windows you open while that group is focused join it. They share one tile, with a tab-like strip. This is the closest thing to "a pile of documents in one place" that still obeys the tree.

| Keys | What happens |
| --- | --- |
| `Super + Ctrl + Left` / `Right` | Move inside the group |
| `Super + Alt + 1` through `5` | Jump to a window in the group by position |
| `Super + Alt + G` | Pull the focused window out of the group |
| `Super + G` again | Take the group apart |
| `Super + Alt + Arrow` | Pull a neighboring window into the group |

## The scratchpad

`Super + S`, or `Super + Grave`, drops a workspace down over the one you are on. `Super + Alt + S`, or `Super + Shift + Grave`, sends the focused window there.

One window in the scratchpad sits as a centered panel. A second one widens it so the two can sit side by side. Send a window home with `Super + Shift + 1` (or whichever workspace should own it). The manual suggests this for an agent you want to check without leaving the workspace you are working on.

## A ten-minute pass

1. On workspace 1, open a terminal and a browser. Watch the split follow focus.
2. `Super + J` until the stack feels predictable.
3. `Super + Shift + 2` to send the browser to workspace 2. `Super + 1` to go back. `Super + 2` to return to it.
4. `Super + L` on workspace 2. Open a third app and see it join the row. `Super + L` to come back.
5. `Super + O` on the browser. Visit workspace 1 and watch it follow. `Super + O` again.

You now have the model. The [twelve keys](./twelve-keys.md) are the same ideas as muscle memory.

## When this goes wrong

- The new window ate the wrong half. You launched while the wrong window was focused. `Super + Shift + Arrow` swaps two neighbors after the fact.
- `Super + J` flashes an error. You are on a scrolling workspace. See [When it feels broken](./when-it-feels-broken.md).
- Every window is the size of a postage stamp. That workspace is dwindle with too many tiles. Move some with `Super + Shift + number`, or group them with `Super + G`, or turn that workspace into scrolling with `Super + L`.
