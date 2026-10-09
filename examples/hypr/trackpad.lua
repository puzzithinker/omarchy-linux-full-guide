-- ~/.config/hypr/input.lua
-- From the Omarchy manual, Keyboard, Mouse, Trackpad:
-- https://omarchy.org/manual/keyboard-mouse-trackpad/
-- The gesture line sits beside hl.config, not inside it.
-- Add this after the two-week drill, not on day one.

hl.config({
  input = {
    touchpad = {
      natural_scroll = true,
    },
  },
})

hl.gesture({ fingers = 3, direction = "horizontal", action = "workspace" })
