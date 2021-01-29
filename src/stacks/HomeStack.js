import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#081491',
            elevation: 0, //remove shadow on Android
            shadowOpacity: 0,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;
