import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Card} from 'native-base';
import ListItemComponent from '../../components/ListItemComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';
import ShimmerGridItem from '../../components/ShimmerGridItem';
import {handleApi} from '../../util/network';
import {API_FEATURED_BOOKS} from '../../util/constants';
import {hashValue, TOAST} from '../../util';
import NetInfo from '@react-native-community/netinfo';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      showGridData: false,
      results: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const hash = hashValue().value;
    let params = {
      hashedKey: hash,
      pageNumber: 1,
    };
    NetInfo.fetch().then((status) => {
      if (status.isConnected) {
        let _this = this;
        handleApi(
          API_FEATURED_BOOKS,
          'POST',
          params,
          function (response) {
            console.log('response', response);
            if (response.message === 'Successful') {
              _this.setState({results: response.result});
              _this.setState({showGridData: true});
            }
          },
          function (error) {
            console.log('Error', error);
            TOAST('System Error' + error.message);
          },
        );
      } else {
        TOAST('Kindly check your connectivity', 'Retry', this.loadData());
      }
    });
  }

  featuredData() {
    if (this.state.results) {
      this.state.results.data.map((item, index) => (
        <ShimmerGridItem visible={this.state.showGridData} />
      ));
    } else {
      return (
        <View style={{flexDirection: 'row'}}>
          <ShimmerGridItem visible={this.state.showGridData} />
          <ShimmerGridItem visible={this.state.showGridData} />
          <ShimmerGridItem visible={this.state.showGridData} />
        </View>
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#081491',
          }}>
          <View>
            <View style={{margin: 5, padding: 5}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.searchSection}>
                  <MaterialCommunityIcons
                    style={styles.searchIcon}
                    name="search"
                    size={16}
                  />
                  <TextInput
                    placeholderTextColor="#fff"
                    placeholder={'What would you like to read?'}
                    style={styles.input}
                    returnKeyType={'search'}
                    onSubmitEditing={() => alert('Hello world')}
                  />
                </View>
              </View>
            </View>
            <View style={{margin: 10, padding: 10}}>
              <Text
                style={{
                  color: '#fff',
                  marginLeft: 10,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                New Collection
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.state.results ? (
                  this.state.results.data.map((item, index) => (
                    <ShimmerGridItem
                      data={item}
                      visible={this.state.showGridData}
                    />
                  ))
                ) : (
                  <View style={{flexDirection: 'row'}}>
                    <ShimmerGridItem
                      data={false}
                      visible={this.state.showGridData}
                    />
                    <ShimmerGridItem
                      data={false}
                      visible={this.state.showGridData}
                    />
                    <ShimmerGridItem
                      data={false}
                      visible={this.state.showGridData}
                    />
                  </View>
                )}
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              marginBottom: 0,
              paddingBottom: 0,
            }}>
            <ScrollView
              style={{padding: 10, marginBottom: -100}}
              horizontal={true}>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Popular
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Art
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Business
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Craft
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Design
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Computer Science
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Christian Religious Education
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Hindu Religious Education
                </Text>
              </View>
            </ScrollView>
            <Card
              style={{
                height: '90%',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                padding: 10,
              }}>
              <View>
                <ScrollView style={{marginBottom: 200, paddingBottom: 260}}>
                  <View>
                    <ListItemComponent
                      onPress={() =>
                        this.props.navigation.navigate('BookDetail')
                      }
                      coverColor="#CCACA7"
                    />
                    <ListItemComponent
                      onPress={() => alert('Second')}
                      coverColor="#CCACA7"
                    />
                    <ListItemComponent
                      onPress={() => alert('Third')}
                      coverColor="#A1B2FA"
                    />
                    <ListItemComponent
                      onPress={() => alert('Forth')}
                      coverColor="#A1B2FA"
                    />
                    <ListItemComponent
                      onPress={() => alert('Fifth')}
                      coverColor="#728955"
                    />
                    <ListItemComponent
                      onPress={() => alert('Sixth')}
                      coverColor="#728955"
                    />
                    <ListItemComponent
                      onPress={() => alert('Seventh')}
                      coverColor="#728955"
                    />
                  </View>
                </ScrollView>
              </View>
            </Card>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: 250,
  },
  searchIcon: {
    padding: 10,
    color: '#fff',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
