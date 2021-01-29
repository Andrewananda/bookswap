import React from 'react';
import {View, SafeAreaView} from 'react-native';
import screens from '../styles';

const CustomFragment = (props) => {
  return (
    <SafeAreaView style={screens}>
      <View>{props.children}</View>
    </SafeAreaView>
  );
};
export default CustomFragment;
