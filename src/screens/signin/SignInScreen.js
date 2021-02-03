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
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Card
            style={{
              borderRadius: 30,
              marginTop: -150,
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
                placeholder={'Username'}
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  padding: 10,
                  margin: 10,
                  borderColor: '#ccc',
                }}
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
              />
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
        </View>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
