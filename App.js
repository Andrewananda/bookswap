/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Root} from 'native-base';
import SignInScreen from './src/screens/signin/SignInScreen';
import SignUpScreen from './src/screens/signup';
import MainTabStack from './src/appNavigation/MainTabStack';
import Landing from './src/screens/landing';
import SplashScreen from './src/splashscreen';
import BookDetailStack from './src/appNavigation/BookDetailStack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <Root>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name={'SplashScreen'}
              component={SplashScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={'Landing'}
              component={Landing}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={'SignInScreen'}
              component={SignInScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={'SignUpScreen'}
              component={SignUpScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={'Authenticated'}
              component={MainTabStack}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={'BookDetail'}
              component={BookDetailStack}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
};

export default App;
