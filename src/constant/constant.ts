import { app_color } from "@themes/color";
import { LocationAccuracy, LocationOptions } from "expo-location";

export const DEFAULT_LINEAR_GRADIENTS = [app_color.transparent, app_color.white, app_color.transparent];
export const DEFAULT_GRADIENT_START = { x: 0, y: 0.5 };
export const DEFAULT_GRADIENT_END = { x: 1, y: 0.5 };
export const DURATION = 300;
export const LOTTIE_BUTTON_VALUE_LOADING: number = 50;
export const BORDER_BUTTON_VALUE_LOADING: number = 50;
export const LOTTIE_BUTTON_VALUE: number = 54;
export const LOCATION_CONSTANT:LocationOptions = {
  accuracy: LocationAccuracy.Highest,
  mayShowUserSettingsDialog: true,
  timeInterval: 100,
  distanceInterval: 100
}