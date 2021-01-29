import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Card} from 'native-base';
import SearchComponent from '../components/SearchComponent';
import GridItemComponent from '../components/GridItemComponent';
import ListItemComponent from '../components/ListItemComponent';

function HomeScreen(props) {
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
          <View style={{margin: 10, padding: 10}}>
            <SearchComponent />
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
            <View style={{paddingTop: 15}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <GridItemComponent />
                <GridItemComponent />
                <GridItemComponent />
                <GridItemComponent />
              </ScrollView>
            </View>
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
              <ScrollView style={{marginBottom: 230, paddingBottom: 260}}>
                <View>
                  <ListItemComponent
                    onPress={() => props.navigation.navigate('BookDetail')}
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

export default HomeScreen;