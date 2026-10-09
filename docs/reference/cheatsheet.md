---
title: Cheatsheet
description: One page of the Omarchy 4 keys you actually use. The hotkey chapter remains the full list.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/hotkeys/
outline: [2, 3]
---

# Cheatsheet

`Super + K` lists every binding on your machine. This page is the short set. Super is the Windows key, or Command on an Intel Mac.

## Run the machine

| Keys | Action |
| --- | --- |
| `Super + K` | Show bindings |
| `Super + Space` | Menu. `Super + Alt + Space` is apps only |
| `Super + Return` | Terminal |
| `Super + Shift + Return` | Browser |
| `Super + W` or `Super + Q` | Close. The app quits |
| `Super + Arrow` | Move focus |
| `Super + Shift + Arrow` | Swap with the neighbor |
| `Super + 1` through `4` | Go to workspace |
| `Super + Shift + 1` through `4` | Send the window there and follow |
| `Super + Shift + Alt + 1` through `4` | Send the window, stay here |
| `Super + J` | Flip side-by-side / stacked (dwindle) |
| `Super + T` | Tile or float |
| `Super + F` | Fullscreen. Alt keeps the bar. Ctrl fullscreens inside the window |
| `Super + L` | This workspace: dwindle or scrolling |

## Week two

| Keys | Action |
| --- | --- |
| `Super + O` | Pop out: float, and follow you |
| `Super + S` | Scratchpad. `Super + Alt + S` sends the window there |
| `Super + G` | Group into one tile. `Super + Alt + G` pulls a window out |
| `Super + Tab` | Next workspace. Shift goes back. Ctrl returns to the last one |
| `Alt + Tab` | Next window on **this** workspace |
| `Super + Minus` / `Equal` | Expand left / shrink from the left |
| `Super + Shift + Minus` / `Equal` | Shrink upward / expand downward |
| `Super + left-drag` | Move. `Super + right-drag` resizes |
| `Super + Shift + Backspace` | Toggle gaps |

## Open these

| Keys | Opens |
| --- | --- |
| `Super + Alt + Return` | Tmux |
| `Super + Ctrl + Return` | Herdr |
| `Super + Shift + F` | Files |
| `Super + Shift + N` | Neovim |
| `Super + Shift + Ctrl + A` | Default agent, or the picker |
| `Super + Ctrl + T` | Activity monitor (opens floating) |
| `Super + Ctrl + S` | LocalSend |
| `Print Screen` | Screenshot |
| `Alt + Print Screen` | Screen recording |
| `Super + Ctrl + Print Screen` | Text from the screen, onto the clipboard |
| `Super + Ctrl + V` | Clipboard history |

## Clipboard

| Keys | Action |
| --- | --- |
| `Super + C` | Copy, including the terminal |
| `Super + X` | Cut, not in the terminal |
| `Super + V` | Paste |

## In the terminal, once tmux is up

Prefix is `Ctrl + Space` (`Ctrl + B` still works).

| Keys or command | Action |
| --- | --- |
| `Alt + Enter` | Split below |
| `Alt + Shift + Enter` | Split beside |
| `Ctrl + Alt + Arrow` | Move between panes |
| `tdl <ai>` | Editor, one agent, a terminal |
| `tsl <count> <command>` | A grid of that many panes |

Agent shortcuts inside a shell, from the [AI chapter](https://omarchy.org/manual/ai/): `a` is your default, `c` is OpenCode, `cx` is Claude Code, `cy` is Codex. They run in the mode that acts without stopping to ask.

## A work day

```text
1 Browse    2 Make    3 Talk    4 Agent
Super + S   the thing you only glance at
```

The reasons are in [Leave overlapping windows](../guide/switch/from-overlapping-windows.md). The full hotkey list is the [manual](https://omarchy.org/manual/hotkeys/).
