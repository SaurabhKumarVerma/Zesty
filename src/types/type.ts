import { ViewStyle } from 'react-native';

export interface ITypography {
  bold: string;
  light: string;
  medium: string;
  regular: string;
  semibold: string;
  thin: string;
}

export const enum ETypography {
  BOLD = 'bold',
  LIGHT = 'light',
  MEDIUM = 'medium',
  REGULAR = 'regular',
  SEMI_BOLD = 'semibold',
  THIN = 'thin',
}

export interface IIcon {
  name: string;
  size: number;
  color?: string;
  style?: ViewStyle;
}

export const enum EBOTTOMSHEETTYPE {
 BOTTOM_SHEET_SCROLL_VIEW = 'BottomSheetScrollView',
 BOTTOM_SHEET_FLASH_LIST = 'BottomSheetFlashList'
}

export interface LocationData {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
}
