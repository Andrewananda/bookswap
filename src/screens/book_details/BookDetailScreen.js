import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {Card} from 'native-base';

export default class BookDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{height: '100%'}}>
            <Card style={styles.bottomSheetStyle}>
              <View>
                <Card style={styles.imageCardStyle}>
                  <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.imageStyle}
                  />
                </Card>
              </View>
              {/*Content Section*/}
              <View style={styles.content}>
                <View>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                        textAlign: 'center',
                      }}>
                      Be A copy writter
                    </Text>
                  </View>
                  <View style={{paddingTop: 10}}>
                    <Text style={{color: '#a9a9a9', textAlign: 'center'}}>
                      Andrew Ananda
                    </Text>
                  </View>
                  <View style={{paddingTop: 10}}>
                    <Text style={{textAlign: 'center'}}>Star Rating area</Text>
                  </View>
                </View>
                {/*Types View*/}
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 20,
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.typeViewStyle}>
                    <Text style={styles.typeTitle}> 130</Text>
                    <Text style={styles.typeDescription}>Pages</Text>
                  </View>
                  <View style={styles.verticleLine} />

                  {/*Type*/}
                  <View style={styles.typeViewStyle}>
                    <Text style={styles.typeTitle}>English</Text>
                    <Text style={styles.typeDescription}>Language</Text>
                  </View>
                  <View style={styles.verticleLine} />

                  {/*Type*/}
                  <View style={styles.typeViewStyle}>
                    <Text style={styles.typeTitle}>2018</Text>
                    <Text style={styles.typeDescription}>Release</Text>
                  </View>
                </View>
                {/*Main Description View*/}
                <View style={{position: 'relative', flexDirection: 'column'}}>
                  <View>
                    <ScrollView
                      vertical={true}
                      style={{paddingTop: 10, height: 250, bottom: 10}}>
                      <View>
                        <Text style={{padding: 5}}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an sunknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                        </Text>
                      </View>
                    </ScrollView>
                  </View>
                  {/*Button View*/}
                  <View style={{bottom: 20}}>
                    <Pressable
                      onPress={() => alert('To borrow')}
                      style={styles.buttonViewStyle}>
                      <Text style={styles.buttonStyle}>BORROW</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageCardStyle: {
    backgroundColor: '#CCACA7',
    position: 'absolute',
    left: '25%',
    height: 200,
    top: -90,
    width: 200,
    borderRadius: 10,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: '80%',
    height: '90%',
    alignSelf: 'center',
  },
  bottomSheetStyle: {
    position: 'absolute',
    top: 90,
    width: '100%',
    bottom: '-100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#081491',
    flex: 1,
  },
  content: {
    position: 'absolute',
    top: 135,
    alignSelf: 'center',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  typeTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  typeDescription: {
    textAlign: 'center',
    paddingTop: 5,
    color: '#a9a9a9',
  },
  typeViewStyle: {
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 25,
  },
  buttonViewStyle: {
    paddingTop: 20,
    marginTop: 20,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#36c33d',
  },
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
});
