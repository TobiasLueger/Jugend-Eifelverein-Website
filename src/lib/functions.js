export function pxToRem(targetPx, basePx = 14) {
  return targetPx / basePx + "rem";
}

export function fontSizeRem(targetPx, basePx = 16) {
  return (targetPx / basePx) * 1 + "rem";
}

export const hexToRgba = (hex, opacity = 0.7) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b}, ${opacity})`;
};

export const pickTextColorBasedOnBackground = (
  bgColor,
  lightColor,
  darkColor
) => {
  const [r, g, b] = bgColor.match(/\w\w/g).map(x => parseInt(x, 16));
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
};
