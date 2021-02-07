import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BookDetailScreen from '../screens/book_details/BookDetailScreen';
const DetailStack = createStackNavigator();

function BookDetailStack(props) {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="BookDetailScreen"
        component={BookDetailScreen}
        options={{
          title: 'Book Detail',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#081491',
            elevation: 0, //remove shadow on Android
            shadowOpacity: 0,
          },
        }}
      />
    </DetailStack.Navigator>
  );
}
export default BookDetailStack;
