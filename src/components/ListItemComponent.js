import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';

function ListItemComponent(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#ddd',
          padding: 5,
          margin: 5,
        }}>
        <View style={{backgroundColor: props.coverColor, borderRadius: 10}}>
          <Image
            source={require('../../assets/logo.png')}
            style={{height: 120, width: 120, resizeMode: 'center'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            paddingTop: 5,
            margin: 10,
            flex: 2,
          }}>
          <Text style={{color: '#a9a9a9', fontSize: 16}}>Management</Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 18, paddingTop: 5}}
            numberOfLines={1}>
            Show Your Work Show Your Work Show Your Work Show Your Work Show
            Your
          </Text>
          <Text style={{color: '#a9a9a9', fontSize: 16, paddingTop: 10}}>
            Andrew Ananda
          </Text>
        </View>
        <View style={{paddingTop: 50, margin: 10}}>
          <MaterialCommunityIcons name="greater-than" />
        </View>
      </View>
    </Pressable>
  );
}

export default ListItemComponent;
