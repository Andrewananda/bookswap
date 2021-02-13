import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Card, Container} from 'native-base';
import ListItemComponent from '../../components/ListItemComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';
import NetInfo from '@react-native-community/netinfo';
import {hashValue, TOAST} from '../../util';
import {handleApi} from '../../util/network';
import {API_CATEGORIES} from '../../util/constants';
class BookCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategories: false,
      categories: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let params = {
      hashedKey: hashValue().value,
    };
    NetInfo.fetch().then((status) => {
      let _this = this;
      if (status.isConnected) {
        handleApi(
          API_CATEGORIES,
          'POST',
          params,
          function (response) {
            _this.setState({categories: response.result});
            _this.setState({showCategories: true});
            console.log('Response', response);
          },
          function (error) {
            console.log('error', error);
          },
        );
      } else {
        TOAST('No internet connection', 'Retry', this.loadData());
      }
    });
  }

  render() {
    return (
      <Container style={{flex: 1, backgroundColor: '#081491'}}>
        <View
          style={{
            flex: 1,
            paddingTop: 50,
            paddingBottom: -70,
            marginBottom: -70,
          }}>
          <ScrollView
            style={{marginBottom: -100, paddingBottom: -100}}
            horizontal={true}>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Popular
              </Text>
            </View>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Art
              </Text>
            </View>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Business
              </Text>
            </View>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Craft
              </Text>
            </View>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Design
              </Text>
            </View>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Computer Science
              </Text>
            </View>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Christian Religious Education
              </Text>
            </View>
            <View style={{paddingRight: 15}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Hindu Religious Education
              </Text>
            </View>
          </ScrollView>
        </View>
        <Card
          style={{
            height: '80%',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            marginBottom: -6,
            paddingBottom: -6,
            flex: 6,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              margin: 10,
            }}>
            <View style={styles.searchSection}>
              <MaterialCommunityIcons
                style={styles.searchIcon}
                name="search"
                size={16}
              />
              <TextInput
                placeholderTextColor="#000"
                placeholder={'What would you like to read?'}
                style={styles.input}
                returnKeyType={'search'}
                onSubmitEditing={() => alert('Hello world')}
              />
            </View>
          </View>
          <ScrollView>
            <View>
              {this.state.categories ? (
                this.state.categories.map((item, index) => (
                  <ListItemComponent
                    key={index}
                    data={item}
                    visible={this.state.showCategories}
                    onPress={() => this.props.navigation.navigate('BookDetail')}
                    coverColor="#CCACA7"
                  />
                ))
              ) : (
                <View>
                  <ListItemComponent
                    visible={this.state.showCategories}
                    data={false}
                    coverColor="#CCACA7"
                  />
                  <ListItemComponent
                    visible={this.state.showCategories}
                    data={false}
                    coverColor="#CCACA7"
                  />
                  <ListItemComponent
                    visible={this.state.showCategories}
                    data={false}
                    coverColor="#CCACA7"
                  />
                  <ListItemComponent
                    visible={this.state.showCategories}
                    data={false}
                    coverColor="#CCACA7"
                  />
                  <ListItemComponent
                    visible={this.state.showCategories}
                    data={false}
                    coverColor="#CCACA7"
                  />
                </View>
              )}
            </View>
          </ScrollView>
        </Card>
      </Container>
    );
  }
}

export default BookCategories;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    width: 250,
  },
  searchIcon: {
    padding: 10,
    color: '#000',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#000',
    backgroundColor: 'transparent',
  },
});
