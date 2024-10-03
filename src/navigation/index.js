import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';
import React from 'react';
import ResetPasswordScreen from '../screens/ResetPasswordScreens';

const RootStack = createNativeStackNavigator();

const Navigator = observer(() => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
            <RootStack.Screen
              name="Reset"
              component={ResetPasswordScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
      </RootStack.Navigator>
    </NavigationContainer>
  );
});

export default Navigator;
