import { defineConfig } from 'vitepress'

const soon = (text: string, link: string) => ({ text: `${text} (soon)`, link })

export default defineConfig({
  title: 'Omarchy Field Guide',
  description:
    'An unofficial practiced path for Omarchy 4: the switch from Windows and macOS, real workflows, plugins, and agents.',
  lang: 'en-US',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'Omarchy Field Guide',
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    nav: [
      { text: 'Start', link: '/guide/00-before-you-install' },
      { text: 'The switch', link: '/guide/switch/mental-model' },
      { text: 'Ahead', link: '/advantages/' },
      { text: 'Cheatsheet', link: '/reference/cheatsheet' },
      { text: 'Official manual', link: 'https://omarchy.org/manual/' },
    ],
    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'How to read this', link: '/guide/' },
          { text: 'Before you install', link: '/guide/00-before-you-install' },
          { text: 'The first hour', link: '/guide/01-first-hour' },
        ],
      },
      {
        text: 'The switch',
        items: [
          { text: 'The mental model', link: '/guide/switch/mental-model' },
          { text: 'Twelve keys', link: '/guide/switch/twelve-keys' },
          { text: 'Leave overlapping windows', link: '/guide/switch/from-overlapping-windows' },
          { text: 'The mouse still works', link: '/guide/switch/mouse-still-works' },
          { text: 'Translation tables', link: '/guide/switch/translation-tables' },
          { text: 'Two-week drill', link: '/guide/switch/two-week-drill' },
          { text: 'When it feels broken', link: '/guide/switch/when-it-feels-broken' },
        ],
      },
      {
        text: 'Ahead of other desktops',
        items: [
          { text: 'What Omarchy does that they do not', link: '/advantages/' },
          { text: 'Cheatsheet', link: '/reference/cheatsheet' },
          { text: 'Ten minutes with a friend', link: '/reference/ten-minutes' },
        ],
      },
      {
        text: 'Daily driver',
        collapsed: true,
        items: [
          soon('Menu and the top bar', '/guide/daily/menu-and-bar'),
          soon('Clipboard', '/guide/daily/clipboard'),
          soon('Terminal', '/guide/daily/terminal'),
          soon('Files and capture', '/guide/daily/files-and-capture'),
          soon('Software', '/guide/daily/software'),
          soon('Updates and rollback', '/guide/daily/updates'),
          soon('Displays, input, and network', '/guide/daily/displays-and-input'),
          soon('Hardware authentication', '/guide/daily/hardware-auth'),
        ],
      },
      {
        text: 'Workflows',
        collapsed: true,
        items: [
          soon('A coding day', '/workflows/coding'),
          soon('Several agents', '/workflows/multi-agent'),
          soon('Writing', '/workflows/writing'),
          soon('Screens and media', '/workflows/media'),
          soon('Remote work', '/workflows/remote'),
          soon('Study', '/workflows/student'),
          soon('Games', '/workflows/gaming'),
          soon('One Windows app', '/workflows/windows-app'),
          soon('Laptop on a dock', '/workflows/laptop-dock'),
          soon('Local models', '/workflows/local-models'),
        ],
      },
      {
        text: 'Agents',
        collapsed: true,
        items: [
          soon('What agentic means here', '/agents/what-agentic-means'),
          soon('Choose and launch', '/agents/choose-and-launch'),
          soon('The CLI is the hands', '/agents/the-cli-is-the-hands'),
          soon('Subscriptions and usage', '/agents/subscriptions-and-usage'),
          soon('Crash to agent', '/agents/crash-to-agent'),
          soon('Make a theme, plugin, or app', '/agents/make-something'),
          soon('Layouts for agents', '/agents/layouts-for-agents'),
          soon('Safety', '/agents/safety'),
        ],
      },
      {
        text: 'Plugins',
        collapsed: true,
        items: [
          soon('The plugin model', '/plugins/model'),
          soon('Trust', '/plugins/trust'),
          soon('Built-ins worth knowing', '/plugins/built-ins-worth-knowing'),
          soon('A short curated set', '/plugins/curated'),
          soon('Build one', '/plugins/build-one'),
        ],
      },
      {
        text: 'Mastery',
        collapsed: true,
        items: [
          soon('What you own', '/mastery/what-you-own'),
          soon('Hyprland in Lua', '/mastery/hyprland-lua'),
          soon('Window rules', '/mastery/window-rules'),
          soon('Themes', '/mastery/themes'),
          soon('Rebind a key', '/mastery/rebind'),
          soon('Reproduce a machine', '/mastery/reproduce'),
          soon('Recovery', '/mastery/recovery'),
        ],
      },
    ],
    footer: {
      message: 'Unofficial guide. Download Omarchy only from omarchy.org.',
      copyright: 'Keybindings checked against the Omarchy 4 manual on 2026-10-09.',
    },
  },
})
