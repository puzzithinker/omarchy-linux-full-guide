---
title: Ten minutes with a friend
description: The install and first-session checklist to walk through with someone before you leave them on a new Omarchy machine.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/getting-started/
---

# Ten minutes with a friend

You are setting the machine up, or you are about to leave. Do these in order. The longer versions are [Before you install](../guide/00-before-you-install.md) and [the first hour](../guide/01-first-hour.md).

## Before the USB boots

1. Download the ISO from [omarchy.org](https://omarchy.org) only. Write it with balenaEtcher, or caligula on Linux.
2. Turn off Secure Boot. Turn off TPM if it is on.
3. Plug in a wired or 2.4 GHz keyboard. Bluetooth cannot type the disk password.
4. If Windows has to survive: turn off BitLocker, shrink the volume in Disk Management, and choose **Free space install**. Anything else you pick can wipe the drive. Take a backup either way.
5. Intel Macs: Omarchy becomes the only OS on the disk. M-series Macs are not directly supported.

## The first session

6. `Super + K`. Tell them this is the list, and they are allowed to open it forever.
7. `Super + Return`, then `Super + Shift + Return`. Point at the split. Press `Super + J` once.
8. `Super + 2` and `Super + 1`. Tell them workspaces replace the pile of windows.
9. `Super + W`. Tell them the app quit, and that this is the design.
10. `Super + C` and `Super + V`. Tell them Ctrl + C in the terminal still cancels a program.

## Before you leave

11. Updates are *Update > Omarchy*. A raw `pacman -Syu` is the wrong habit. The stable mirror lags Arch by a month on purpose.
12. A snapshot brings back the system, not their files. Their documents need a backup.
13. Hand them the [cheatsheet](./cheatsheet.md) and the [two-week drill](../guide/switch/two-week-drill.md). Ask them not to install a dock until day 14.
14. If you were installing for them, the cleaner path is `Ctrl + C` on the installer's keyboard screen, so their password is the one that encrypts the disk. That path is in [Getting Started](https://omarchy.org/manual/getting-started/).

Leave your phone number for the boot menu, not for the keybindings. The keybindings are `Super + K`.
