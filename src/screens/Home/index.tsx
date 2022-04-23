import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>To na home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Gyms')}>
        <Text>Ver mais academias</Text>
      </TouchableOpacity>
    </View>
  );
};
