import React from 'react';
import {Toast} from 'native-base';
import CryptoJs from 'crypto-js';

export const TOAST = function (msg, buttonText = 'Dismiss', onPress) {
  Toast.show({
    text: msg,
    position: 'bottom',
    duration: 5000,
    buttonText: buttonText,
    onClose: onPress,
    buttonTextStyle: {color: 'yellow'},
  });
};

export const hashValue = function () {
  var hashDate = new Date();
  hashDate.getDate();
  hashDate.getTime();
  hashDate.getSeconds();
  let hash = CryptoJs.SHA256(hashDate);
  let value = hash.toString(CryptoJs.enc.base64);
  return {
    value,
  };
};
