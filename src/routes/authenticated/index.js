import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {commonHeaderStyle} from '../../../common';
import MainTabStack from '../../stacks/MainTabStack';
const Stack = createStackNavigator();

export default function Authenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Litereasy'}
        options={commonHeaderStyle}
        component={MainTabStack}
      />
    </Stack.Navigator>
  );
}
