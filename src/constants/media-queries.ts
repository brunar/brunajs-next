// Breakpoints Sizes (em) not px
export const breakpoints = {
  mob: 40, // 640 - mobile
  tab: 56.25, // 900px  - tablet
  tab_lg: 75, // 1200px - tablet Landscape
  big_screen: 112.5, // 1800px - large desktop

  // Extras
  screen350: 21.875, // 350px - mobile
  screen400: 25, // 400px - mobile
  screen520: 32.5, // 520px  - mobile
  screen800: 50, // 800px - tablet
  screen1100: 68.75, // 1100px - small desktop
  screen1300: 81.25, // 1300px - small desktop
  screen1400: 87.5, // 1400px - desktop

  // To be removed in the future - avoid use this one
  tablet: 46.25, // 740
};

export const down = (size: number) => `(max-width: ${[size]}em)`;
export const up = (size: number) => `(min-width: ${[size + 0.063]}em)`; // 1px = 0.063em
export const between = (sizeMax: number, sizeMin: number) =>
  `(max-width: ${[sizeMax]}em) and (min-width: ${[sizeMin + 0.063]}em)`;

// upOrEqual
// downOrEqual
// down max-width: (size - 1)
// up min-width: (size + 1)
