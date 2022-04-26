import React from 'react';

import {Header} from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ItemGym} from './components/ItemGym';

import {Container} from './styles';

export const Gyms = () => {
  return (
    <SafeAreaView>
      <Header home={false} />
      <Container>
        <ItemGym />
      </Container>
    </SafeAreaView>
  );
};
