import { app_color } from "@themes/color";
import { typography } from "@themes/typography";
import { Platform, Text, View } from "react-native";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),
  error: ({props}) => (
    
    <ErrorToast
      text1={props}
      style={{
        borderLeftColor: Platform.OS === 'ios' ? app_color.error_ios : app_color.error_android, 
        borderLeftWidth: 8,
      }}
      contentContainerStyle={{
        backgroundColor: Platform.OS === 'ios' ? app_color.error_ios : app_color.error_android,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        fontFamily: typography.semibold
      }}
    />
  ),
};

export default ToastConfig