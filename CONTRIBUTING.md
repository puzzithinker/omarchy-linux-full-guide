# Contributing

This guide teaches Omarchy. It does not replace the [official manual](https://omarchy.org/manual/), and it does not paste it.

## Before you add a key or a command

1. Find it in the manual chapter for the current stable release, or in the `quattro` tree of [omacom/omarchy](https://github.com/omacom/omarchy).
2. Write the gesture the way the manual writes it (`Super + K`, not a paraphrase that changes the chord).
3. Hyprland samples are Lua in `~/.config/hypr/`. If you must show a `.conf` snippet, label it Omarchy 3.
4. Put a copy-paste sample in `examples/` and show the same text in the page. One home for each snippet.
5. Set the page frontmatter:

```yaml
---
title:
description:
applies_to: Omarchy 4.0.4+
verified: YYYY-MM-DD
manual: https://omarchy.org/manual/...
---
```

`verified` is the day you checked the manual, not the day the file was created.

## How a page is shaped

- The first two sentences say what the reader can do when they finish.
- Then the steps, one worked example, and a "When this goes wrong" section.
- Link the manual chapter. Do not reproduce its tables when a link will do, except the cheatsheet and the translation tables, which are allowed to be tables.
- A claim that Omarchy is ahead of Windows or macOS names the gesture and the limit on the same page.
- Plugin install commands sit next to the warning that a plugin runs as unsandboxed code inside the shell.

## Stubs

A page that is not written yet stays in the sidebar with `(soon)` and says so in an info callout. Do not fill a stub with guessed bindings to make the sidebar look finished.

## What we do not take

- Rehosted ISOs, themes, or package mirrors.
- A dump of the plugin marketplace. The curated page stays short, and each entry is a repo someone opened.
- Omarchy 3 as a current path. A short "your old notes are stale" box is welcome.
