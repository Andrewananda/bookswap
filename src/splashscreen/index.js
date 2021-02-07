import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

export default class SplashScreen extends Component {
  componentDidMount() {
    this.getInfo();
  }

  async getInfo() {
    try {
      const userData = await AsyncStorage.getItem('userType');
      if (userData !== null) {
        this._navigate('Authenticated');
      } else {
        this._navigate('Landing');
      }
    } catch (e) {
      console.log('Async Error');
      this._navigate('Landing');
    }
  }

  _navigate(screen) {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screen}],
      }),
    );
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/bookswap_background.jpg')}
        style={{resizeMode: 'cover', flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/logo2.png')}
            style={{
              width: 250,
              height: 100,
              resizeMode: 'contain',
              padding: 0,
              margin: 0,
            }}
          />
          <View style={{paddingTop: 0, marginTop: 0}}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>
              Books are uniquely portable margic
            </Text>
          </View>
          <View style={{paddingTop: 10}}>
            <ActivityIndicator
              animating={true}
              size="large"
              style={{opacity: 1}}
              color="#054983"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
