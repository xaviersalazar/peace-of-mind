import useMediaQuery from "./useMediaQuery";

const SIZES = {
  xs: "425px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const useIsXs = () => useMediaQuery(`(min-width: ${SIZES.xs})`);
export const useIsSm = () => useMediaQuery(`(min-width: ${SIZES.sm})`);
export const useIsMd = () => useMediaQuery(`(min-width: ${SIZES.md})`);
export const useIsLg = () => useMediaQuery(`(min-width: ${SIZES.lg})`);
export const useIsXl = () => useMediaQuery(`(min-width: ${SIZES.xl})`);
export const useIs2xl = () => useMediaQuery(`(min-width: ${SIZES["2xl"]})`);
