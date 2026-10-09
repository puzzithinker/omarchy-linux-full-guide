---
title: Leave overlapping windows
description: A real workspace map that replaces a pile of overlapping windows, including when a second monitor is still the right tool.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/coming-from-mac-or-windows/
---

# Leave overlapping windows

After this page you have a workspace for each kind of work, and a way to park a window without following it.

The habit to retire is "keep it open behind this one, I will click it in a minute." On a tiling desktop that pile becomes a workspace number. The click becomes `Super + number`. The manual's [Coming From Mac or Windows](https://omarchy.org/manual/coming-from-mac-or-windows/) chapter makes the same point in a paragraph. This page is the assignment.

## A work day that fits on one screen

Use this for a week before you invent a cleverer map. The text form is `examples/workspace-maps/work-day.txt`.

```text
Workspace 1   Browse     browser, and the page you are reading
Workspace 2   Make       editor, split with a terminal when you need one
Workspace 3   Talk       mail or Signal
Workspace 4   Agent      the default agent, left running

Scratchpad               btop, a calculator, or a note you check and dismiss
                         Super + S shows it, Super + S hides it
```

Open the browser on workspace 1. `Super + 2`, then `Super + Shift + N` for Neovim. The editor gets the whole screen because it is alone on that workspace. That is the point. Full screen is the normal size of a single window, and you did not press a maximize button.

When you need the browser and the editor at once, you have two honest options:

- Stay on one workspace and let them split. Good for a short comparison.
- Keep them on 1 and 2 and flip with `Super + 1` and `Super + 2`. Good for an hour of each. This is the option that replaces a stack of overlapping windows.

## Park a window without going with it

You are in the editor. A chat window is in the way on the same workspace. You want it on workspace 3, and you want to keep typing.

`Super + Shift + Alt + 3`

The window leaves. Focus stays. `Super + Shift + 3` would have taken you with it, which is what you want when you are actually switching tasks.

This is also how you park a long agent run. Start it on workspace 4, or send it there with `Super + Shift + Alt + 4`, and go back to the editor. The [agents chapters](../../agents/layouts-for-agents.md) will go further. The key is enough today.

## Groups are the pile you still want

Some piles are real. A spec, a ticket, and a design, and you only look at one at a time, in the same place on screen.

Focus the first window. `Super + G`. Open the next, or pull a neighbor in with `Super + Alt + Arrow`. Move inside with `Super + Ctrl + Left` and `Right`. They share one tile, so the rest of the workspace does not shrink.

Use a group when the windows are one task. Use another workspace when they are different tasks. A group of "everything I have open" recreates the pile, at a smaller size.

## The scratchpad is the glance

The thing you open, look at, and close is a poor workspace. Battery, a convert command, a chat you answer in one line.

`Super + Alt + S` sends the focused window to the scratchpad. `Super + S` drops it down and `Super + S` puts it away. Your workspace underneath is unchanged. One window in the scratchpad is a centered panel. Two sit side by side across the width.

## When a second monitor is still the right tool

Workspaces remove a lot of second-monitor use, because the jump has no animation and the other task is one key away. They do not remove all of it.

Keep a second monitor when both images must be visible for the work itself: a design next to the code, a call next to notes you are writing, a reference that you transcribe. Hiding the reference on workspace 1 and the draft on workspace 2 makes that job worse.

`Super + Shift + Alt + Arrow` moves the current workspace to the monitor in that direction. `Ctrl + Alt + Tab` moves focus between monitors. The monitor chapter is still a stub in this guide. The manual's [Monitors](https://omarchy.org/manual/monitors/) page is the current source, and [Laptop on a dock](../../workflows/laptop-dock.md) will be the worked day.

## A substitution drill

For one afternoon, every time you reach for the mouse to find a window, do this instead:

1. If it is the task you were just doing, `Super + Ctrl + Tab` (the workspace you left) or `Alt + Tab` (another window here).
2. If it is a standing task, `Super + number`.
3. If it is a glance, put it on the scratchpad the next time it appears, and use `Super + S` from then on.
4. If you cannot find it, you have too many tiles on one workspace. Send one away with `Super + Shift + Alt + number`.

At the end of the afternoon, write the four numbers on a slip and put it on the bezel. Change the slip on Monday, not on the hour.

## When this goes wrong

- You sent a window and the screen followed it. You used `Super + Shift + number`. Add Alt to stay.
- Workspace 2 is a mosaic of eight tiny tiles. Move the visitors out. The workspace is a task, not a junk drawer.
- You miss Mission Control, the picture of every window at once. Omarchy 4's manual does not ship that overview. The numbers on the bar, plus `Super + number`, are the designed replacement. It feels slower for a few days and then faster, because you stop searching a picture and press the number you assigned.
- You want the old window back in a free position on top of everything. `Super + T` floats it, or `Super + O` if it should follow you. Then go back. Floating as the default throws away the model.

Continue with [the mouse](./mouse-still-works.md).
