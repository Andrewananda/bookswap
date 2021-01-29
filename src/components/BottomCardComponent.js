import React, {useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';

function BottomCardComponent() {
  //const refRBSheet = useRef();

  return (
    <View>
      <BottomSheet isOpen>
        <View>
          <Text>Hello World</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
export default BottomCardComponent;
