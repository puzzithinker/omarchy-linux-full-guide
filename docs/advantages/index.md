---
title: What Omarchy does that they do not
description: The Omarchy 4 features that are ahead of a stock Windows or macOS desktop, each with the gesture and the limit.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/
---

# What Omarchy does that they do not

These are the parts worth switching for. Each one is a thing you can do on Omarchy 4.0.4 that a stock Windows or macOS desktop still makes you assemble, or does not do. The limit sits in the same row, because a field guide that only praises the system is not a guide.

Omarchy is not trying to be a familiar macOS or a familiar Windows. The [welcome chapter](https://omarchy.org/manual/) says that in its own words. The gain is a smaller set of ideas that cover more of the day, plus a few features the older desktops still treat as add-ons.

## One picture of the machine

Quattro draws the bar, the menu, notifications, the lock screen, and the volume and brightness popups in Quickshell. A theme, chosen with `Super + Ctrl + Shift + Space`, restyles that shell together. Backgrounds are `Super + Ctrl + Space`. The same change reaches the terminal and Neovim, and the [AI chapter](https://omarchy.org/manual/ai/) says Claude Code, Pi, OpenCode, and Hermes follow the theme once Omarchy has installed them.

Windows and macOS theme the chrome and leave every app to notice or not. Omarchy's limit is the apps that ship their own theme and ignore it. You will still set a browser theme by hand when the browser wants one.

## The clipboard is one chord

`Super + C` and `Super + V` copy and paste in the terminal and in every other window. History is `Super + Ctrl + V`, and it keeps images as well as text.

On Windows, the terminal spent years teaching you that Ctrl + C was not copy. On a Mac, the terminal is fine and the clipboard history is a utility you install. On a typical Linux desktop, the terminal wants `Ctrl + Shift + C` and everything else wants `Ctrl + C`. Omarchy picks a side.

The limit: `Super + X` cuts, and the hotkey chapter says that cut does not apply in the terminal. Agent harnesses often want `Ctrl + V` for an image and `Super + V` for text.

## One update, and a way back

*Update > Omarchy*, or `omarchy update`, updates Omarchy and the rest of the system, runs migrations, and takes a snapshot first. The stable Arch mirror runs one month behind upstream so a bad new package has time to be caught. A direct `pacman -Syu` is blocked because it skips that ceremony. Both facts are in [Updates](https://omarchy.org/manual/updates/).

Windows and macOS update the system on their own schedule and let every app update itself again. The limit on Omarchy is the one this guide repeats: the snapshot restores the root filesystem and does not restore `/home`. It also needs the Limine boot menu. Turn on *Setup > Direct Boot* only after you know how to reach Limine from the firmware. That menu item refuses Apple firmware and American Megatrends boards.

## Workspaces you will actually use

`Super + 1` through `4` jump. `Super + Shift + Alt + number` sends a window and leaves you where you are. There is no animation to wait out.

macOS Spaces and Windows virtual desktops can do a version of this, and most people stop using them because finding the window in the overview is slower than alt-tabbing through the pile. Omarchy removes the pile, so the number is the way back.

The limit: the 4.0 manual documents four workspaces in the hotkey table, and it does not ship an overview. If your work is "I must see twelve windows at once to know what I am doing," the [switch](../guide/switch/from-overlapping-windows.md) will feel like a loss until you name the four tasks. A second monitor is still the right tool when two images must be visible together.

## Nothing is hiding

A tiled window cannot slip under another one. You see the cost, which is smaller tiles, and you move a visitor to another workspace. Windows and macOS let you lose a window for an hour. The limit is the apps that float badly or tile their own dialogs. Those get a [window rule](../guide/switch/when-it-feels-broken.md), not a new desktop.

## The agent is part of the desktop

Launchers for Claude Code, Codex, OpenCode, Copilot, Grok, Cursor's CLI, and the rest are stubs. Nothing downloads until you run the command. `Super + Shift + Ctrl + A` opens the default agent. The bar can show plan usage. A crash notification can hand the dump to that agent. A shipped skill knows how to work on themes, plugins, and apps. The [AI chapter](https://omarchy.org/manual/ai/) is the contract, including the line that the skill is experimental and that you should look at the plan before you let it edit the machine.

Windows and macOS in 2026 still treat a coding agent as an app you install, sign into, and keep off to the side. Omarchy's limit is the same one those apps have, plus a local one: a launch runs in the mode that acts without asking, plugins are unsandboxed code in the shell, and a snapshot will not undo an agent that deleted a file in your home directory. The safety chapter is still a stub. Read the AI chapter's warning before you point an agent at `~/.config`.

Herdr (`Super + Ctrl + Return`) and the tmux layouts (`tdl`, `tsl`, and the rest, inside a tmux session) are built for a person plus one or more agents. A stock terminal on the other desktops is a single pane until you build the layout yourself.

## The machine is text, so it can be repeated

Keybindings, input, and look live in Lua files under `~/.config/hypr/`. The *Setup* menu opens the right one. You can copy them to the next computer. An agent can read them. A Windows setting buried in a dialog, or a macOS default you set in 2019 and forgot, cannot be diffed.

The limit: text you do not understand is text you can break. Change one thing, after the [two-week drill](../guide/switch/two-week-drill.md). `omarchy reinstall` puts the defaults back and overwrites your edits.

## Capture, dictation, and nearby sharing are already bound

| Job | Keys |
| --- | --- |
| Screenshot | `Print Screen` |
| Screen recording | `Alt + Print Screen`, then pick the audio |
| Text from the screen | `Super + Ctrl + Print Screen` |
| Dictation | `Super + Ctrl + X`, after *Setup > Defaults > Dictation* |
| Send a file to a nearby machine | `Super + Ctrl + S` (LocalSend) |

You can build each of these on Windows or a Mac with first-party or third-party tools. Omarchy's advantage is that they are one chord on day one, and they share the theme and the menu. The limit is setup for dictation: you still choose the engine. The recording chapter is [Screenshots & Recording](https://omarchy.org/manual/screenshots-recording/). The dictation chapter is [Text Extraction & Dictation](https://omarchy.org/manual/text-extraction-dictation/).

## Encryption is the default path

The installer encrypts the disk unless you go looking for the exception (`Ctrl + C` on the format confirmation). A lost laptop is a locked disk. BitLocker and FileVault can do this too, and plenty of machines leave the factory with one of them half-configured. The limit: you need a wired or 2.4 GHz keyboard to type the password at boot, and if you lose the passphrase the data is gone. That is what encryption is.

## The comparison, in one table

| You notice | On Omarchy 4 | The limit |
| --- | --- | --- |
| Launching | `Super + Space`, or a direct key | No default dock |
| Finding a window | `Super + 1` through `4` | No overview. `Alt + Tab` is this workspace |
| Layout | New windows tile into the focused one | Dialogs sometimes need a window rule |
| Copy and paste | `Super + C` / `V` everywhere | Cut is not in the terminal |
| Updates | One command, snapshot first, mirror lags a month | Snapshot skips `/home` |
| Look | One theme moves the shell, terminal, Neovim, and several agents | Some apps keep their own theme |
| Agents | Lazy launchers, a key, a bar, a crash handoff, a skill | The skill is experimental. Agents act |
| Sharing nearby | LocalSend on `Super + Ctrl + S` | The other machine needs LocalSend too |
| Disk | LUKS unless you opt out | Passphrase required, from a non-Bluetooth keyboard |
| Old Mac or PC | Intel Macs are a documented install. Old PCs boot the same ISO | M-series Macs are not directly supported |

## What this guide will not claim

It will not claim Omarchy is faster than every Mac, or that every game runs, or that you will never want Windows for one program. Those are workflow pages, still stubs, and the manual already has [Gaming](https://omarchy.org/manual/gaming/) and [Windows VM](https://omarchy.org/manual/windows-vm/). It will not claim the scrolling layout is as finished as dwindle. It will not claim a plugin marketplace listing is a security review.

The advantage that survives those limits is the one the switch teaches: a small set of keys, a screen that does not hide windows, and a system an agent can read because the settings are files.

The card is the [cheatsheet](../reference/cheatsheet.md).
