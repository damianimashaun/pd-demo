import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingOne, OnboardingTwo, OnboardingThree } from './src/screens';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator();

// TODO: can we house this somewhere else ?
// specify default types for react navigation
declare global {
  // eslint-disable-next-line no-unused-vars
  namespace ReactNavigation {
    // eslint-disable-next-line no-unused-vars
    interface RootParamList extends RootStackParamList {}
  }
}

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
