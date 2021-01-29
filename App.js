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
import Authenticated from './src/routes/authenticated';
import NonAuthenticated from './src/routes/non-authenticated';
import {Root} from 'native-base';

const Stack = createStackNavigator();
const isLoggedIn = false;

const App: () => React$Node = () => {
  return (
    <>
      <Root>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name={'Root'}
              component={NonAuthenticated}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={'Authenticated'}
              component={Authenticated}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
};

export default App;
