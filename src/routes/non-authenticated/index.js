import React from 'react';
import Landing from '../../screens/landing';
import SignInScreen from '../../screens/signin/SignInScreen';
import SignUpScreen from '../../screens/signup';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NonAuthenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Landing'}
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignInScreen'}
        component={SignInScreen}
        options={{
          headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
          },
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name={'SignUpScreen'}
        component={SignUpScreen}
        options={{
          headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
          },
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
}
