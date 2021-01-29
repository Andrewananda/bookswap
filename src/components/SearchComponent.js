import React from 'react';
import {View} from 'react-native';
import {Input, Label} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';

function SearchComponent() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Label
        style={{
          borderRadius: 10,
          color: '#c4c2c2',
          borderWidth: 1,
          borderColor: '#fff',
          width: '70%',
          height: 35,
          padding: 5,
        }}>
        <MaterialCommunityIcons name="search" size={16} />
        What would you like to read?
      </Label>
      <Input
        placeholderTextColor="#fff"
        style={{backgroundColor: 'transparent'}}
      />
    </View>
  );
}

export default SearchComponent;
