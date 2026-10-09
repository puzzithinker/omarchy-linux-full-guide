---
title: Safety
description: Placeholder. What an agent and a plugin are allowed to touch, and what a snapshot will not undo.
applies_to: Omarchy 4.0.4+
verified: 2026-10-09
manual: https://omarchy.org/manual/ai/
---

# Safety

::: info Not written yet
This page is on the map so you can see where the guide is going. It is not the lesson.

When it is written, it will draw the line: plugins run as unsandboxed code in the long-lived shell, system updates go through `omarchy update` so a snapshot happens first, and a snapshot does not restore `/home`. Read the plan before an agent edits `~/.config/hypr`.

Until then, use [AI](https://omarchy.org/manual/ai/), [Shell Plugins](https://omarchy.org/manual/shell-plugins/), and [System snapshots](https://omarchy.org/manual/system-snapshots/).
:::
