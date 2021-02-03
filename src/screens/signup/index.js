import React, {Component} from 'react';
import {Pressable, SafeAreaView, Text, View, TextInput} from 'react-native';
import styles from '../signin/styles';
import NetInfo from '@react-native-community/netinfo';
import {TOAST} from '../../util';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      password: '',
      confirm_password: '',
    };
  }

  _submitForm() {
    console.log('Checking netowrk');
    NetInfo.fetch().then((isConnected) => {
      if (isConnected.isConnected) {
        console.log('connection found', isConnected);
        if (this.state.email !== '') {
          if (
            this.state.password !== '' &&
            this.state.password === this.state.confirm_password
          ) {
            this._networkCall();
          }
        }
      } else {
        console.log('No connection');
        TOAST('No Internet connection', 'Retry');
      }
    });
  }

  _networkCall() {}

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text
            style={[
              styles.boldText,
              {color: '#000', textAlign: 'center', fontSize: 20},
            ]}>
            Lets Get Started!
          </Text>
          <Text style={[{color: '#c0c0c0', textAlign: 'center', fontSize: 15}]}>
            Create an account to access books
          </Text>
        </View>
        <View style={{paddingTop: 20}}>
          <View>
            <TextInput
              placeholder={'First Name'}
              style={{
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderColor: '#ccc',
              }}
              onChangeText={(text) => this.setState({first_name: text})}
            />
          </View>
          <View>
            <TextInput
              placeholder={'Last Name'}
              style={{
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderColor: '#ccc',
              }}
              onChangeText={(text) => this.setState({last_name: text})}
            />
          </View>
          <View>
            <TextInput
              placeholder={'Email'}
              keyboardType={'email-address'}
              style={{
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderColor: '#ccc',
              }}
              onChangeText={(text) => this.setState({email: text})}
            />
          </View>
          <View>
            <TextInput
              placeholder={'Mobile'}
              keyboardType={'number-pad'}
              style={{
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderColor: '#ccc',
              }}
              onChangeText={(text) => this.setState({mobile: text})}
            />
          </View>
          <View>
            <TextInput
              placeholder={'Password'}
              keyboardType={'visible-password'}
              style={{
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderColor: '#ccc',
              }}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>

          <View>
            <TextInput
              placeholder={'Confirm Password'}
              style={{
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderColor: '#ccc',
              }}
              returnKeyType={'send'}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({confirm_password: text})}
            />
          </View>
          <View
            style={{
              paddingTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => this._submitForm()}>
              <View style={[styles.button]}>
                <Text
                  style={{
                    color: '#fff',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  Sign Up
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default SignUpScreen;
