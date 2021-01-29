import React from 'react';
import {Toast} from 'native-base';
//import CryptoJs from 'crypto-js';
// export function hash() {
//   const date = new Date().getDate();
//   const hash = CryptoJs.SHA256(date);
//   return {
//     hash,
//   };
// }

export const TOAST = (msg, buttonText = 'Dismiss', onPress: any) => {
  return Toast.show({
    text: msg,
    position: 'bottom',
    duration: 5000,
    buttonText: buttonText,
    onClose: onPress,
    buttonTextStyle: {color: 'yellow'},
  });
};
