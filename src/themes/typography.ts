import { ETypography, ITypography } from '../types/type';

export const typography = {
  bold: '../../assets/fonts/Inter-Bold.ttf',
  light: '../../assets/fonts/Inter-Light.ttf',
  medium: '../../assets/fonts/Inter-Medium.ttf',
  regular: '../../assets/fonts/Inter-Regular.ttf',
  semibold: '../../assets/fonts/Inter-SemiBold.ttf',
  thin: '../../assets/fonts/Inter-Thin.ttf',
};

const font = {
  inter: {
    bold: ETypography.BOLD,
    light: ETypography.LIGHT,
    medium: ETypography.MEDIUM,
    regular: ETypography.REGULAR,
    semibold: ETypography.SEMI_BOLD,
    thin: ETypography.THIN,
  },
};

export const app_fonts = {
  font,
  primary: font.inter,
};
