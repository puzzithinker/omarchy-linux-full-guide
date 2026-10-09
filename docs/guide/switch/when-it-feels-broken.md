---
title: When it feels broken
description: The layout surprises that are not user error, and the Lua window rule that fixes an app that tiles or floats wrongly.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/navigation/
---

# When it feels broken

Most of these are the layout doing what it was configured to do, or a known rough edge. Fix the one in front of you and go back to the drill.

Omarchy does not pin a single Hyprland point release. A bug reported against 0.56.2 may already be gone on yours, or still open. `Super + K` and the [manual](https://omarchy.org/manual/navigation/) outrank this page.

## The new window landed in a strange place

It split the window that was focused. Focus the neighbor you want, then launch. Afterwards, `Super + Shift + Arrow` swaps the focused window with the one in that direction.

If a brand new app is tiny or floating, the next section is the one you want. Placement and "this app refuses the layout" are different problems.

## Super + J threw an error

`Super + J` flips a dwindle split. On a scrolling workspace that action has nothing to apply to. People on the 4.0 line have hit a red error along the lines of "no such layoutmsg for scrolling" (Omarchy issues [8220](https://github.com/omacom/omarchy/issues/8220) and [9726](https://github.com/omacom/omarchy/issues/9726)).

`Super + L` returns the workspace to dwindle. Or stay on scrolling and stop using J there. Scrolling is also the layout where `Alt + Tab` has been reported to follow an internal order rather than the left-to-right order you see ([12117](https://github.com/omacom/omarchy/issues/12117)). Newcomers should keep dwindle until they want the row on purpose.

## Alt + Tab is not the app switcher you remember

The hotkey chapter defines it as cycling windows on the **active workspace**. It does not walk every application on every workspace. There is no Command-Tab equivalent in the 4.0 manual, and there is no Mission Control or Task View overview either.

The replacement you already have:

- `Super + number` for the task
- `Alt + Tab` for another window of this task
- `Super + Ctrl + Tab` for the workspace you just left
- The workspace numbers on the bar, to see which ones are occupied

## Super + Arrow ignores a floating window

Directional focus is built for tiles. `Alt + Tab` reaches a float. `Super + T` tiles it, and then the arrows work. This mismatch has been an open request for a long time ([discussion 4039](https://github.com/omacom/omarchy/discussions/4039)).

## An app opens in the wrong mode

Some programs draw their own dialogs or pick a silly first size. Two reports from the 4.0 era: Inkscape's file chooser tiles, because it draws its own GTK dialog instead of the portal ([11995](https://github.com/omacom/omarchy/issues/11995)), and Steam's main window comes up small and floating ([9271](https://github.com/omacom/omarchy/issues/9271)).

Those are window rules. Find the class:

```bash
hyprctl clients
```

Look at the focused window's `class`. Then add a rule at the bottom of `~/.config/hypr/hyprland.lua`. The shape is the same one the [keyboard chapter](https://omarchy.org/manual/keyboard-mouse-trackpad/) uses for `o.window`:

```lua
-- Dots in the class are escaped. Replace the name with what hyprctl printed.
o.window("(com\\.example\\.App)", { float = true })
```

The same snippet is `examples/hypr/float-a-window.lua`. `float = true` is the usual ask for a dialog that tiled. An app that should have tiled and came up floating can be toggled with `Super + T` once, and a permanent rule is a mastery topic. The [window rules](../../mastery/window-rules.md) page will collect them. Until then, one rule at the bottom of that file is enough.

## Floating a grouped window

A crash was reported when `Super + T` floated a window that was still in a group, on Hyprland 0.56.2 ([10342](https://github.com/omacom/omarchy/issues/10342)). If that combination misbehaves, `Super + Alt + G` pulls the window out of the group first, or `Super + G` takes the group apart, and then you float it.

## Your notes from Omarchy 3 do not paste

Omarchy 4's Hyprland config is Lua:

| You edit | What it is |
| --- | --- |
| `~/.config/hypr/hyprland.lua` | The entry file. Window rules go at the bottom. |
| `~/.config/hypr/bindings.lua` | Keys |
| `~/.config/hypr/input.lua` | Keyboard, mouse, trackpad |
| `~/.config/hypr/looknfeel.lua` | Gaps, rounding, default layout |

A blog that shows `bindd = SUPER, ...` inside a `.conf` file is describing the old format. The chords in this guide match the 4.0 hotkey chapter. The file syntax does not match those blogs.

The menu's *Setup* entries open the right file and restart what needs restarting when you quit the editor. Prefer that path while you are learning.

If an edit makes a mess of one file, *Update > Config* restores individual shipped configs. [Common tweaks](https://omarchy.org/manual/common-tweaks/) also says an update that needs the original file back will keep your version as a `.bak` beside it. `omarchy reinstall` is the large hammer from the [updates chapter](https://omarchy.org/manual/updates/): it reinstalls default packages, returns you to the stable channel, and **overwrites your config changes**. Do not reach for it to undo one bad line.

## When this goes wrong

- `hyprctl clients` shows several classes and you edit the wrong one. Float the window you care about, run the command, and match the title you can see.
- You put the rule in `bindings.lua` and nothing changed. Window rules of this shape belong in `hyprland.lua`.
- You "fixed" scrolling by pasting a page of someone else's config. Revert. `Super + L` was the whole fix.
- The machine will not boot after an update. Limine, pick the snapshot from before the update, restore. That returns the root filesystem. It leaves `/home` alone. [Before you install](../00-before-you-install.md) has the longer warning.

The switch ends here. [What Omarchy does that the old desktops do not](../../advantages/index.md) is the reason to keep going. The [cheatsheet](../../reference/cheatsheet.md) is the card.
