// Font Sizes
const fontSizeBase = 16;
export const fontSize = (sizeInPx: number) => `${sizeInPx / fontSizeBase}rem`;

export const emSize = (sizeInPx: number) => `${sizeInPx / fontSizeBase}em`;

// Font Family
export const fontFamily = {
  primary: 'Noto Sans Lao, sans-serif',
  // secondary: 'Noto Sans Lao, sans-serif',
  // mono: 'Roboto Mono, monospace',
  // code: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
  button: 'Noto Sans Lao, sans-serif',
};

// Font Weight
export const fontWeight = {
  lighter: '300',
  regular: '400',
  medium: '500',
  bold: '600', 
};
