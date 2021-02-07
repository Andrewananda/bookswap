import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';

function SearchComponent() {
  return (
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
        />
      </View>
    </View>
  );
}

export default SearchComponent;
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
