# Omarchy Field Guide

An unofficial practiced path for [Omarchy](https://omarchy.org) 4 (Quattro). It takes you from the installer to a tiling desktop you can run without thinking, with the switch from Windows and macOS as the main event.

The [official manual](https://omarchy.org/manual/) is the map. This guide is the route: drills, a worked first day, and the places a new tiling user usually decides the computer is broken.

**Baseline:** Omarchy 4.0.4 and later. Last checked against the manual on 2026-10-09. Omarchy 4 stores Hyprland config as Lua. Pages written for Omarchy 3 show the old `.conf` syntax. The keys survived. The files did not.

Download the ISO only from [omarchy.org](https://omarchy.org).

## Read it in this order

1. [Before you install](docs/guide/00-before-you-install.md)
2. [The first hour](docs/guide/01-first-hour.md)
3. [The switch](docs/guide/switch/mental-model.md), seven short pages
4. [What Omarchy does that Windows and macOS do not](docs/advantages/index.md)
5. [Cheatsheet](docs/reference/cheatsheet.md)

Later sections (daily driver, workflows, agents, plugins, mastery) are on the map and marked **soon**. Each stub links the manual chapter to use until the page exists.

## Run the site

```bash
npm install
npm run docs:dev
```

`npm run docs:build` writes the static site to `docs/.vitepress/dist`. The Markdown under `docs/` is the source of truth and reads fine on GitHub without a build.

Copy-paste config lives in [`examples/`](examples/).

## Status

| Slice | What is written |
| --- | --- |
| 1 | Install, first hour, the whole switch, the advantages essay, cheatsheet, ten-minute setup |
| 2 | Agents, plus the coding workflows |
| 3 | Daily driver and the rest of the workflows |
| 4 | Plugins and mastery |
