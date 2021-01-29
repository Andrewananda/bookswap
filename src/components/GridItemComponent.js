import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

function GridItemComponent() {
  return (
    <View style={{padding: 5}}>
      <Card style={{borderRadius: 10, width: 155, padding: 10}}>
        <View>
          <Image
            style={{height: 50, width: 140, resizeMode: 'center'}}
            source={require('../../assets/logo.png')}
          />
          <View style={{flexDirection: 'column', padding: 10}}>
            <Text style={{color: '#a9a9a9', fontSize: 16}}>Title</Text>
            <View style={{paddingTop: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Description
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GridItemComponent;
