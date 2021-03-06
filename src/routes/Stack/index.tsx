import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Home} from '../../screens/Home';
import {Gyms} from '../../screens/Gyms';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Gyms" component={Gyms} />
    </Navigator>
  );
}
