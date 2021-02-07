import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeUserData = {
  async storeUser(data) {
    try {
      await AsyncStorage.setItem('firstName', data.firstName);
      await AsyncStorage.setItem('lastName', data.lastName);
      await AsyncStorage.setItem('userType', data.userType);
      await AsyncStorage.setItem('mobileNo', data.mobileNo);
      return true;
    } catch (e) {
      return false;
    }
  },
};
