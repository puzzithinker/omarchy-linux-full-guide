---
title: Before you install
description: What Omarchy is, what the installer will do to the disk, and the snapshot limit to understand first.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/getting-started/
---

# Before you install

By the end of this page you know what you are installing, which disk choice wipes Windows, and why a snapshot is not a backup of your files.

Omarchy is an opinionated Arch Linux system. [Hyprland](https://hypr.land/) tiles the windows. [Quickshell](https://quickshell.org/) draws the bar, the menu, notifications, the lock screen, and the brightness and volume popups. One `omarchy` command runs the same actions as the menu. Coding agents are wired in as launchers that download on first use. You can ignore them.

It is a complete desktop on first boot: a terminal, Neovim, a browser, office tools, capture, and a theme that restyles the system together. The official introduction is [Welcome to Omarchy](https://omarchy.org/manual/).

## Who it fits

You will get on with it if you are willing to launch programs with keys, keep one job on each workspace, and edit a text file when a setting has no switch. Developers get the deepest later chapters. Writers, students, and people who still need one Windows program are part of the same path.

The default desktop has no dock and no icons on the desktop. The [manual's translation chapter](https://omarchy.org/manual/coming-from-mac-or-windows/) is the short version of that shift. The [switch](./switch/mental-model.md) in this guide is the long version.

## Three facts that change the install

**Full-disk install erases the drive you pick.** Take a backup first. The installer defaults to full-disk encryption (LUKS). A Bluetooth keyboard cannot type that password at boot. Use a cable or a 2.4 GHz dongle, the same way a Bluetooth keyboard cannot open the BIOS.

**Free-space install is how you dual boot.** In Windows, shrink the volume from Disk Management so unallocated space is sitting there, then choose **Free space install** after you pick the disk. BitLocker encrypts the whole drive, so this path requires it off: Windows Settings, Privacy & security, Device encryption. After Omarchy boots, `limine-scan` adds Windows to the Limine menu. The steps with pictures are in [Dual Boot Install](https://omarchy.org/manual/dual-boot-install/).

**Turn off Secure Boot, and TPM if it is on.** The [Getting Started](https://omarchy.org/manual/getting-started/) chapter states that both have to be off before the installer will run.

A few installer exits are deliberate, and easy to hit by accident:

| You press | What happens |
| --- | --- |
| `Ctrl + C` on the keyboard screen | The installer offers to defer the username and password so the next owner sets them. That password is also the encryption password. |
| `Ctrl + C` on the disk confirmation | You can install with no encryption. The manual reserves this for machines that stay in a locked room, or for throwaway installs. |

## Hardware

Any ordinary UEFI PC is the normal case. The ISO is the thing you boot. On a fast machine the install can finish in about a minute. On an older one, expect it inside five.

**Intel Macs** are supported as the only operating system on the disk. The installer wipes the drive. macOS can come back later through Internet Recovery. You disable Apple Secure Boot from recovery (Command-R, Utilities, Startup Security Utility: No Security, and allow external boot), then hold Option at the chime and pick the orange EFI boot. T1 machines have a dead Touch Bar and no sound. T2 machines get a patched kernel from the installer. Model lists and the current gaps are in [Mac support](https://omarchy.org/manual/mac-support/). **M-series Macs are not directly supported.**

*Setup > Direct Boot* in the Omarchy menu skips the Limine menu and boots straight at the decryption screen. The manual says that setup refuses to run on Apple firmware and on American Megatrends boards. Leave the boot menu in place until you have restored a snapshot once and know how to reach Limine from the BIOS.

## Snapshots are not Time Machine

Every Omarchy update takes a snapshot first. You can also take one with `omarchy-snapshot create`. Restoring it, from the Limine menu or with `omarchy-snapshot restore`, brings back the **root filesystem**. It does **not** bring back `/home`. A bad update rolls back. A deleted document does not. `~/.config` is inside your home directory, so it stays as it was, which can mean a new app and an old config file after a rollback.

This only exists on Limine, the default boot loader since Omarchy 2.0. GRUB and systemd-boot installs do not get it. Details: [System snapshots](https://omarchy.org/manual/system-snapshots/).

Keep your own copies of the files you would hate to lose. The guide will not pretend the boot menu is a backup.

## Where the bits come from

Download the ISO from [omarchy.org](https://omarchy.org) only. Write it with [balenaEtcher](https://etcher.balena.io/) on Mac or Windows, or [caligula](https://github.com/ifd3f/caligula) on Linux.

Omarchy's own packages come from its package repository. The stable Arch mirror that those updates use runs **one month behind** upstream Arch, on purpose, so a broken new package has time to show up before it reaches a stable machine. The command is *Update > Omarchy*, or `omarchy update`. A raw `pacman -Syu` is blocked because it skips the snapshot and the migrations. That behavior is documented in [Updates](https://omarchy.org/manual/updates/).

## When this goes wrong

- The USB never appears in the boot menu. Secure Boot is still on, or the stick was not written as a bootable image.
- The disk password screen ignores your keyboard. It is Bluetooth. Plug in a cable.
- The free-space choice errors on BitLocker. Decrypt in Windows, then boot the USB again.
- You wanted Windows to remain and you chose the full-disk disk. That drive is gone. Recovery is your backup, not a snapshot of an install that never contained those files.

Continue with [the first hour](./01-first-hour.md).
