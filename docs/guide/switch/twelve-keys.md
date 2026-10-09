---
title: Twelve keys
description: The twelve bindings that run Omarchy, then the week-two set. Checked against the 4.0 hotkey chapter.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/hotkeys/
---

# Twelve keys

Learn these and you can run the machine. `Super + K` remains the list you trust when a printed card and your install disagree.

The [hotkey chapter](https://omarchy.org/manual/hotkeys/) is the full set. This page is the set that replaces a mouse-driven desktop. The same card, tighter, is the [cheatsheet](../../reference/cheatsheet.md).

## The twelve

| | Keys | What you are doing |
| --- | --- | --- |
| 1 | `Super + K` | Show every binding. This is the one you memorize on purpose. |
| 2 | `Super + Space` | Open the menu. Type to filter. Apps only: `Super + Alt + Space`. |
| 3 | `Super + Return` | Open the terminal. |
| 4 | `Super + Shift + Return` | Open the browser. |
| 5 | `Super + W` | Close the focused window. The app quits. `Super + Q` is the same binding. |
| 6 | `Super + Arrow` | Move focus left, right, up, or down. |
| 7 | `Super + Shift + Arrow` | Swap the focused window with its neighbor. |
| 8 | `Super + 1` through `Super + 4` | Jump to that workspace. |
| 9 | `Super + Shift + 1` through `4` | Send the focused window to that workspace and follow it. |
| 10 | `Super + J` | Flip this split between side by side and stacked. Dwindle only. |
| 11 | `Super + T` | Tile the focused window, or float it. |
| 12 | `Super + F` | Fullscreen. `Super + Alt + F` is full width and keeps the bar. `Super + Ctrl + F` fullscreens inside the window. |

## Drill it once

Sit on an empty workspace.

1. `Super + Return`, then `Super + Shift + Return`. Name which window is on the left before you look.
2. `Super + Arrow` until focus is where you meant. If it is not, you are crossing between a tile and a float. Tile it with `Super + T`, or use `Alt + Tab`, which cycles windows on **this** workspace.
3. `Super + Shift + Right` and say which window moved.
4. `Super + Shift + 2`, then `Super + 1`, then `Super + 2`. You should land on the window you sent.
5. `Super + F`, look at a page, `Super + F` again.
6. `Super + W` until the workspace is empty.
7. Cover the table and hit `Super + K` for any row you missed. That recovery is the skill.

Do this on two mornings. After that the table is a reference, not a lesson.

## Week two

These are real, and they are the ones people go looking for once the twelve are dull. They are all in the same hotkey chapter.

| Keys | What you are doing |
| --- | --- |
| `Super + Shift + Alt + 1` through `4` | Send the window, and stay on the current workspace. |
| `Super + Tab` | Next workspace. `Super + Shift + Tab` goes back. `Super + Ctrl + Tab` returns to the one you just left. |
| `Super + L` | This workspace: dwindle or scrolling. It sticks. |
| `Super + O` | Pop the window out so it floats and follows you. |
| `Super + S` | Show or hide the scratchpad. `Super + Alt + S` sends the focused window there. |
| `Super + G` | Group windows into one tile. Details are in the [mental model](./mental-model.md). |
| `Alt + Tab` | Next window on the active workspace. `Alt + Shift + Tab` goes backward. |
| `Super + Minus` | Expand the focused window to the left. |
| `Super + Equal` | Shrink the focused window from the left. |
| `Super + Shift + Minus` | Shrink it upward. |
| `Super + Shift + Equal` | Expand it downward. |
| `Super + Alt + Minus` or `Equal` | The same resize, in smaller steps. |
| `Super + Ctrl + Minus` or `Equal` | The same resize, in bigger steps. |

Read the resize rows twice. Minus and Equal are **horizontal**, and they are not a matched pair of "bigger" and "smaller" in every direction. Shift makes them **vertical**. People who expect macOS-style "grow this edge" end up shrinking the wrong side and deciding resize is broken.

`Super + Alt + Home` saves a window width. `Super + Home` restores it.

The mouse equivalents are on the [next page](./mouse-still-works.md): hold Super and drag, hold Super and right-drag.

## Launches worth grafting on

You do not need these in week one. They are how the default install replaces a dock of pinned apps. The full launch table is in the hotkey chapter.

| Keys | Opens |
| --- | --- |
| `Super + Alt + Return` | A terminal already inside tmux |
| `Super + Ctrl + Return` | Herdr, the agent multiplexer |
| `Super + Shift + F` | Files |
| `Super + Shift + N` | Neovim |
| `Super + Shift + O` | Obsidian |
| `Super + Shift + W` | Omawrite |
| `Super + Shift + Ctrl + A` | Your default agent, or the picker |
| `Super + Ctrl + S` | LocalSend, to share a file |
| `Print Screen` | A screenshot |

Change a binding in `~/.config/hypr/bindings.lua`, which the menu opens from *Setup*. Do that after the two-week drill, so you are changing a key you actually miss.

## When this goes wrong

- You are mashing `Super + 5` because a blog said there are ten workspaces. The manual documents 1 through 4. `Super + K` shows what your install bound.
- `Super + J` errors. The workspace is scrolling. `Super + L` returns it to dwindle. More on that in [When it feels broken](./when-it-feels-broken.md).
- Resize made the window worse. Look at the row again: left, or up, and which key expands. `Super + Shift + Arrow` is often the move you wanted, which is a swap, not a resize.
- A tutorial tells you to paste `bindd = SUPER, K, ...` into a `.conf` file. That is Omarchy 3 syntax. On Omarchy 4 the files are Lua.

Continue with [leaving overlapping windows](./from-overlapping-windows.md).
