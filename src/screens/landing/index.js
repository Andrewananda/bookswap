import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import {} from 'native-base';
import styles from './styles';

class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>BookSwap</Text>
        <Text style={styles.textCenter}>
          Welcome To Bookswap where you get all the learning materials you need.
        </Text>
        <View style={{padding: 20}}>
          <Pressable onPress={() => this.props.navigation.navigate('SignInScreen')}>
            <View style={styles.button}>
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                Sign In
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={{paddingTop: 5}}>
          <Pressable onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <View style={[styles.button, {backgroundColor: '#fff'}]}>
              <Text
                style={{
                  color: '#000',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                Sign Up
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Landing;
