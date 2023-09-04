import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          gumboYellow50: { value: "#fefefc" },
          gumboYellow200: { value: "#f4eec2" },
          gumboYellow300: { value: "#ece192" },
          gumboYellow100: { value: "#fbf9ea" },
          gumboYellow400: { value: "#dfce4b" },
          gumboYellow500: { value: "#f2b707" },
          gumboYellow600: { value: "#ad8305" },
          gumboYellow700: { value: "#7c5e04" },
          gumboYellow800: { value: "#4a3802" },
          gumboYellow900: { value: "#191301" },

          gumboGray50: { value: "#f9fafa" },
          gumboGray100: { value: "#f1f1f2" },
          gumboGray200: { value: "#e6e7e9" },
          gumboGray300: { value: "#d2d4d7" },
          gumboGray400: { value: "#a9adb2" },
          gumboGray500: { value: "#797f88" },
          gumboGray600: { value: "#4d5560" },
          gumboGray700: { value: "#2e3744" },
          gumboGray800: { value: "#19202b" },
          gumboGray900: { value: "#141a23" },

          gumboGreen50: { value: "#f5fdf9" },
          gumboGreen100: { value: "#c6f5e0" },
          gumboGreen200: { value: "#83e9bb" },
          gumboGreen300: { value: "#28d889" },
          gumboGreen400: { value: "#23bd78" },
          gumboGreen500: { value: "#1ea367" },
          gumboGreen600: { value: "#198755" },
          gumboGreen700: { value: "#136942" },
          gumboGreen800: { value: "#105636" },
          gumboGreen900: { value: "#0d472d" },

          gumboOrange50: { value: "#fdfaf6" },
          gumboOrange100: { value: "#f9ebdb" },
          gumboOrange200: { value: "#f1d4b1" },
          gumboOrange300: { value: "#e6b273" },
          gumboOrange400: { value: "#dc9239" },
          gumboOrange500: { value: "#c37b24" },
          gumboOrange600: { value: "#a5681e" },
          gumboOrange700: { value: "#835318" },
          gumboOrange800: { value: "#674113" },
          gumboOrange900: { value: "#553610" },
        },
      },

      semanticTokens: {
        colors: {
          gumboPrimary: {
            value: {
              base: "{colors.gumboYellow500}",
              _dark: "{colors.gumboYellow200}",
              hover: "{colors.gumboYellow600}",
              active: "{colors.gumboYellow700}",
            },
          },
          gumboSecondary: {
            value: {
              base: "{colors.gumboOrange500}",
              _dark: "{colors.gumboOragen200}",
              hover: "{colors.gumboOrange600}",
              active: "{colors.gumboOrange700}",
            },
          },
          gumboAccent: {
            value: {
              base: "{colors.gumboGreen500}",
              _dark: "{colors.gumboOrange200}",
              hover: "{colors.gumboGreen600}",
              active: "{colors.gumboGreen700}",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
