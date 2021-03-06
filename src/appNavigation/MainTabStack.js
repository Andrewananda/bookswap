import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import BookCategories from '../screens/book_categories';

const Tab = createBottomTabNavigator();

function MainTabStack() {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="View Books"
        component={BookCategories}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MainTabStack;
