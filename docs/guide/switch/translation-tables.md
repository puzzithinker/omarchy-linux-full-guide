---
title: Translation tables
description: Where Spotlight, FancyZones, Finder, Win+V, AirDrop, Time Machine, and the rest go on Omarchy 4.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/coming-from-mac-or-windows/
---

# Translation tables

Use this page when your hand does the old thing and you need the Omarchy name. The gestures were checked against the [hotkey chapter](https://omarchy.org/manual/hotkeys/) and [Coming From Mac or Windows](https://omarchy.org/manual/coming-from-mac-or-windows/). "Ships" means the default install can do it without a marketplace plugin.

## From macOS

| You reach for | On Omarchy | Ships |
| --- | --- | --- |
| Spotlight, Alfred, Raycast | `Super + Space`. Apps only: `Super + Alt + Space` | yes |
| Command | Super. On an Intel Mac the Command key is already Super | yes |
| A dock, Desktop icons | A key or the menu. A dock plugin is a later choice, after the [two-week drill](./two-week-drill.md) | the dock is extra |
| Rectangle, Magnet, Moom | Tiling. `Super + T` floats one window. `Super + Arrow` moves focus | yes |
| Mission Control, Spaces | `Super + 1` through `4`. There is no overview screen in the 4.0 manual | the numbers, yes |
| Command-Tab across every app | `Alt + Tab` cycles windows on the **current** workspace | different |
| Finder | Files on `Super + Shift + F`. From a terminal, `Super + Shift + Alt + F` opens Files in that directory | yes |
| Quick Look | Space on a file in Files | yes |
| Preview, for images | `imv` | yes |
| Preview, for PDFs | Document Viewer. Signing and non-form PDFs are a later page; the manual chapter is [Filling out PDFs](https://omarchy.org/manual/filling-out-pdfs/) | yes |
| Command-C / V everywhere | `Super + C` and `Super + V`, including the terminal. `Super + X` cuts, and the hotkey chapter says cut does not apply in the terminal | yes |
| Command-Shift-4 | `Print Screen`. Text from the screen: `Super + Ctrl + Print Screen` | yes |
| AirDrop | LocalSend on `Super + Ctrl + S` | yes |
| Notification Center | History on `Super + Shift + Alt + ,`. Dismiss the latest with `Super + ,` | yes |
| Time Machine | A snapshot of the **root** filesystem on every update. It does not restore `/home` | partial |
| System Settings | *Setup* in the menu, which opens the text file. *Trigger* is the switches | yes |
| App Store, a downloaded installer | *Install* in the menu, or `omarchy pkg add` | yes |
| An app left running with no windows | `Super + W` quit it. Open it again with its key | different |
| Dictation | `Super + Ctrl + X` after *Setup > Defaults > Dictation*. Push to talk is Right Alt or F9 once Voxtype or Superwhisper is set up | yes, after you pick the engine |

On a Mac keyboard you do not remap anything for Super. The [Mac support](https://omarchy.org/manual/mac-support/) chapter is about the hardware. The Command key point is in [Coming From Mac or Windows](https://omarchy.org/manual/coming-from-mac-or-windows/).

## From Windows

The rows above apply. These are the ones where the Windows habit is different.

| You reach for | On Omarchy | Ships |
| --- | --- | --- |
| Start menu, Win + S | `Super + Space` | yes |
| FancyZones, Win + Arrow snap | Tiling, with no zones to draw. `Super + J` flips a split. `Super + L` makes one workspace a sideways row | yes |
| Task view, virtual desktops | `Super + 1` through `4` | yes |
| File Explorer | Files on `Super + Shift + F` | yes |
| Win + V clipboard history | `Super + Ctrl + V`. It holds images and text | yes |
| Win + Shift + S | `Print Screen` | yes |
| Ctrl + C in a terminal, and the process dies | `Super + C` copies. Ctrl + C still means interrupt in the shell | yes |
| Task Manager | Activity monitor on `Super + Ctrl + T`. It opens floating | yes |
| System Restore, File History | Snapshots restore the system root. They are not file history | partial |
| Windows Hello | Fingerprint, or a FIDO2 key for sudo, under the security setup. The chapter is [Hardware authentication](https://omarchy.org/manual/hardware-authentication/) | yes |
| A per-app updater nagging you | *Update > Omarchy*, one path, snapshot first. See [Updates](https://omarchy.org/manual/updates/) | yes |
| BitLocker on a dual-boot disk | Turn it off before the free-space install. BitLocker covers the whole drive | you do this in Windows |

## Time Machine is the weak match

Say this out loud before you delete a backup disk.

An update runs `omarchy update` (or the menu), takes a snapshot, then changes the system. If the boot is bad, you pick that snapshot in Limine and restore. You get the old **system** back. Your home directory is whatever it is right now, including a file you deleted after the snapshot, and excluding a file the snapshot never held.

`~/.config` stays too. Rolling back an app can leave you with a config written by the newer version. The manual tells you to sort that out by hand.

Snapshots need Limine. *Setup > Direct Boot* hides that menu until you pick Limine from the BIOS, and that setup refuses to run on Apple firmware and American Megatrends boards.

Your documents need a real backup. The snapshot is for a bad update.

## Clipboard, because both platforms train you badly

| Keys | What happens |
| --- | --- |
| `Super + C` | Copy, in the terminal and everywhere else |
| `Super + X` | Cut, not in the terminal |
| `Super + V` | Paste |
| `Super + Ctrl + V` | Clipboard history, text and images |

Linux usually wants `Ctrl + Shift + C` in the terminal and `Ctrl + C` everywhere else. Omarchy's Super chords skip that split. Most agent harnesses still want `Ctrl + V` when you paste an image, and `Super + V` for text. The manual's [clipboard chapter](https://omarchy.org/manual/unified-clipboard-history/) is the long version. The daily-driver page in this guide is still a stub.

## When this goes wrong

- You press Ctrl + C in the terminal to copy, and the program stops. Use `Super + C`. Leave Ctrl + C as interrupt.
- You press `Super + X` in the terminal and nothing is cut. That matches the hotkey chapter. Select and copy, or cut in the app.
- You restore a snapshot to get a document back. It was never in the snapshot. Restore from your own backup.
- You install a dock on day one so the table feels finished. The table is finished without one. The drill is next.

Continue with the [two-week drill](./two-week-drill.md).
