---
title: The first hour
description: The first session after install. Open two windows, tile them, and learn the one key that lists every other key.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/navigation/
---

# The first hour

After this hour you can open the menu, open a terminal and a browser, move between them, and close a window. You also know the one binding that lists the rest.

Do this on the machine. Reading it is not the hour.

## Boot, then stop configuring

Log in. If a notification invites you to pick a default coding agent, you can pick one or dismiss it. Right-click dismisses a notification. Nothing in the desktop requires an agent, and nothing downloads until you run one. The practice for agents is a later chapter. Two facts are worth knowing now, from the [AI chapter](https://omarchy.org/manual/ai/):

- `Super + Shift + Ctrl + A` opens your default agent, or the picker if you have not chosen one.
- A launch from your home directory starts in `~/Work`, because agents refuse to remember trust for `$HOME`. Those launches run in the agent's mode that acts without stopping to ask. Be ready for that before you press the chord.

Leave themes, plugins, and config files alone until the [two-week drill](./switch/two-week-drill.md) says otherwise. The system is already arranged.

## The only key you memorize on purpose

Press `Super + K`.

Super is the Windows key on a PC keyboard. On an Intel Mac running Omarchy, Linux treats the Command key as Super, so the thumb stays where it was.

`Super + K` opens the searchable list of bindings. Tmux bindings are `Super + Alt + K`. Herdr bindings are `Super + Ctrl + K`. When you blank later, you come back here. You do not go hunting through a blog.

`Super + Space` opens the Omarchy menu: apps, setup, install, capture. Type to filter. `Super + Alt + Space` is apps only. The menu works on the first boot, when the mouse by itself still cannot run the machine. That sentence is the manual's, and it is accurate. See [Navigation](https://omarchy.org/manual/navigation/).

## Tile two windows

1. `Super + Return` opens the terminal. It takes the screen.
2. `Super + Shift + Return` opens the browser. The screen splits. Both stay visible.
3. `Super + J` stacks them one above the other. Press it again and they sit side by side.
4. Focus the browser and press `Super + Shift + Right`. The two windows trade places.
5. `Super + Left` and `Super + Right` move focus. The pointer jumps to the middle of the window you land on.

That is the whole model in one minute. A new window splits **the window that is focused**. You choose a neighbor. You do not choose a coordinate. The [mental model](./switch/mental-model.md) page is that idea with the names attached.

## Close means quit

`Super + W` closes the focused window. `Super + Q` does the same thing, for the finger that learned Quit on a Mac. The program exits. There is no leftover process waiting behind a missing window the way a Mac app often keeps running with zero windows.

`Ctrl + Alt + Delete` closes every window.

## One more window, still in the first hour

`Super + Ctrl + T` opens the activity monitor, and it opens floating, on top of the tiles. `Super + T` pulls it into the tiling. `Super + T` again lets it float. `Super + Shift + F` opens the file manager, and you now have a four-window workspace.

`Super + F` makes the focused window cover the screen. `Super + Alt + F` makes it full width and leaves the bar. `Super + Ctrl + F` fullscreens the content inside the window, which is the one you want for a video.

Stop there. You have the first hour. The next page names the four ideas so the rest of the keys have somewhere to sit.

## When this goes wrong

- A chord does nothing. Hold the Windows or Command key, not Alt. Then press `Super + K` and read the row.
- The second app replaced your view of the first, or opened on top as a small window. Some apps float on purpose (the activity monitor does). `Super + T` tiles the focused one.
- You closed a window and expected the app to linger. It quit. Open it again with the same key.
- You already want a dock. Wait. The [two-week drill](./switch/two-week-drill.md) is the point where that decision is real.

Continue with [the mental model](./switch/mental-model.md).
