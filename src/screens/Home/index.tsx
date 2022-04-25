import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Container} from './styles';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header home={true} />
      <Container>
        <Text style={{color: '#FFF'}}>To na homeeee</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Gyms')}>
          <Text style={{color: '#FFF'}}>Ver mais academias</Text>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
};
