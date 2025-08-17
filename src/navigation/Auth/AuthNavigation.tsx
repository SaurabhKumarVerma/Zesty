import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';
import OnboardingScreen from '@screen/OnboardingScreen/OnboardingScreen';
import RegisterScreen from '@screen/RegisterScreen/RegisterScreen';
import LoginScreen from '@screen/LoginScreen/LoginScreen';
import ForgotPassword from '@screen/LoginScreen/ForgotPassword';
import Otp from '@screen/LoginScreen/Otp';
import ResetPassword from '@screen/LoginScreen/ResetPassword';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
        <Stack.Screen name={ESCREEN_NAME.ONBOARDING_SCREEN} component={OnboardingScreen} />
        <Stack.Screen name={ESCREEN_NAME.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={ESCREEN_NAME.REGISTER_SCREEN} component={RegisterScreen}  />
        <Stack.Screen name={ESCREEN_NAME.FORGOT_PASSWORD_SCREEN} component={ForgotPassword}  />
        <Stack.Screen name={ESCREEN_NAME.OTP_SCREEN} component={Otp}  />
        <Stack.Screen name={ESCREEN_NAME.RESET_PASSWORD_SCREEN} component={ResetPassword}  />
    </Stack.Navigator>
  )
}

export default AuthNavigation