import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import {Card} from 'native-base';
import styles from './styles';
import {hashValue, TOAST} from '../../util';
import NetInfo from '@react-native-community/netinfo';
import {handleApi} from '../../util/network';
import Dialog from 'react-native-dialog';
import {API_LOGIN} from '../../util/constants';
import {storeUserData} from '../../util/common_actions';
import {CommonActions} from '@react-navigation/native';

class SignInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  handleToastPress = () => {
    this._postUerData();
  };

  _postUerData() {
    if (this.state.email.trim() === '') {
      this.setState({isLoading: false});
      TOAST('Email field is required');
    } else if (this.state.password.trim() === '') {
      this.setState({isLoading: false});
      TOAST('Password field is required');
    } else {
      this.setState({isLoading: true});
      const params = {
        hashedKey: hashValue().value,
        email: this.state.email,
        password: this.state.password,
      };

      NetInfo.fetch().then((state) => {
        let _this = this;
        if (state.isConnected) {
          handleApi(
            API_LOGIN,
            'POST',
            params,
            function (response) {
              _this.setState({isLoading: false});
              console.log('data', response.status);
              if (response.status == 'Ok') {
                const store = storeUserData.storeUser(response.result);
                if (store) {
                  _this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{name: 'Authenticated'}],
                    }),
                  );
                  TOAST('Login was successful');
                  console.log('data', response);
                } else {
                  TOAST('An error occurred while trying to login try again');
                }
              } else if (response.status == 'Fail') {
                TOAST(response.message);
              }
            },
            function (error) {
              _this.setState({isLoading: false});
              TOAST(
                'An error occurred while trying to login try again',
                'Retry',
                _this.handleToastPress,
              );
              console.log('error', error);
            },
          );
        } else {
          this.setState({isLoading: false});
          TOAST(
            'Kindly check your internet connection',
            'Retry',
            _this.handleToastPress,
          );
        }
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Dialog.Container
            visible={this.state.isLoading}
            onBackdropPress={() => this.setState({isLoading: false})}>
            <Dialog.Title>Sign In</Dialog.Title>
            <Dialog.Description>Loading...</Dialog.Description>
          </Dialog.Container>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Card
            style={{
              borderRadius: 30,
              marginTop: -100,
              alignItems: 'center',
              justifyContent: 'center',
              width: 160,
              height: 90,
              alignSelf: 'center',
              elevation: 2,
            }}>
            <Image
              source={require('../../../assets/bookswap.jpeg')}
              style={{
                width: 150,
                height: 100,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
            />
          </Card>
          <View style={{paddingTop: 20}}>
            <View>
              <TextInput
                placeholder={'Email address'}
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
                placeholder={'Password'}
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 10,
                  margin: 10,
                  borderColor: '#ccc',
                }}
                secureTextEntry={true}
                textContentType={'password'}
                onChangeText={(text) => this.setState({password: text})}
              />
            </View>
            <View
              style={{
                paddingTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => this._postUerData()}>
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
                <Text>
                  <Text style={{padding: 10}}>Don't have an account?</Text>
                  <Pressable
                    onPress={() =>
                      this.props.navigation.navigate('SignUpScreen')
                    }>
                    <View>
                      <Text
                        style={{
                          color: 'blue',
                          paddingTop: 10,
                          marginTop: 5,
                          fontSize: 15,
                          paddingLeft: 10,
                        }}>
                        Sign Up
                      </Text>
                    </View>
                  </Pressable>
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
