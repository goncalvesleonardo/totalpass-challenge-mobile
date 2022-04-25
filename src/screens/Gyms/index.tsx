import React from 'react';
import {Text, View} from 'react-native';

import {Header} from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Container} from './styles';

export const Gyms = () => {
  return (
    <SafeAreaView>
      <Header home={false} />
      <Container>
        <Text style={{color: '#FFF'}}>Listagem de Academias</Text>
      </Container>
    </SafeAreaView>
  );
};
