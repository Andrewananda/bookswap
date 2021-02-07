import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Shimmer from '../util/Shimmer';
import {Card} from 'native-base';

export default function ShimmerGridItem(props) {
  return (
    <View style={{padding: 5}}>
      <Card style={{borderRadius: 10, width: 155, padding: 10}}>
        <View>
          <Shimmer
            autoRun={true}
            animationOpacity={2}
            direction={'UP'}
            style={styles.imageStyle}
            visible={props.visible}
            pauseDuration={200}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/logo.png')}
            />
          </Shimmer>
          <View style={{flexDirection: 'column', padding: 10}}>
            <Shimmer
              direction={'UP'}
              pauseDuration={100}
              visible={props.visible}
              autoRun={true}
              style={{width: 120}}>
              <Text style={{color: '#a9a9a9', fontSize: 16}}>Title</Text>
            </Shimmer>
            <View style={{paddingTop: 10}}>
              <Shimmer
                direction={'UP'}
                pauseDuration={50}
                visible={props.visible}
                autoRun={true}
                style={{width: 120}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Description
                </Text>
              </Shimmer>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 140,
    resizeMode: 'center',
  },
});
