import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';
import Shimmer from '../util/Shimmer';

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
          <Shimmer
            autoRun={true}
            animationOpacity={2}
            direction={'UP'}
            style={{height: 120, width: 120}}
            visible={props.visible}
            pauseDuration={200}>
            <Image
              source={{uri: props.data.frontCover}}
              style={{height: 120, width: 120, resizeMode: 'center'}}
            />
          </Shimmer>
        </View>
        <View
          style={{
            flexDirection: 'column',
            paddingTop: 5,
            margin: 10,
            flex: 2,
          }}>
          <Shimmer
            autoRun={true}
            animationOpacity={2}
            direction={'UP'}
            style={{width: 150, paddingTop: 5}}
            visible={props.visible}
            pauseDuration={200}>
            <Text style={{color: '#a9a9a9', fontSize: 16}}>
              {props.data.categoryName}
            </Text>
          </Shimmer>
          <Shimmer
            autoRun={true}
            animationOpacity={2}
            direction={'UP'}
            style={{width: 150, paddingTop: 10}}
            visible={props.visible}
            pauseDuration={200}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18, paddingTop: 5}}
              numberOfLines={1}>
              {props.data.title}
            </Text>
          </Shimmer>
          <Shimmer
            autoRun={true}
            animationOpacity={2}
            direction={'UP'}
            style={{width: 150, paddingTop: 10}}
            visible={props.visible}
            pauseDuration={200}>
            <Text style={{color: '#a9a9a9', fontSize: 16, paddingTop: 10}}>
              {props.data.author}
            </Text>
          </Shimmer>
        </View>
        <View style={{paddingTop: 50, margin: 10}}>
          <MaterialCommunityIcons name="greater-than" />
        </View>
      </View>
    </Pressable>
  );
}

export default ListItemComponent;
