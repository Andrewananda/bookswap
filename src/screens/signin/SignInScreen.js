import React, {Component} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {Input, Item} from 'native-base';
import styles from './styles';

class SignInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={[styles.boldText, {color: '#db2f2f'}]}>Sign In</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <View>
            <Item floatingLabel>
              <Input
                placeholder={'Username'}
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 10,
                  margin: 10,
                  borderColor: '#ccc',
                }}
              />
            </Item>
          </View>
          <View>
            <Item>
              <Input
                placeholder={'Password'}
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 10,
                  margin: 10,
                  borderColor: '#ccc',
                }}
              />
            </Item>
          </View>
          <View
            style={{
              paddingTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() =>
                this.props.navigation.navigate('Authenticated', {
                  screen: 'Litereasy',
                  initial: false,
                })
              }>
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

export default SignInScreen;
