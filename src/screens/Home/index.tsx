import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../components/Header';
import {CarouselGyms} from '../Home/components/CarouselGyms';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Container, ButtonGyms, TextButton} from './styles';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header home={true} />
      <CarouselGyms />
      <Container>
        <ButtonGyms onPress={() => navigation.navigate('Gyms')}>
          <TextButton>Ver mais academias</TextButton>
        </ButtonGyms>
      </Container>
    </SafeAreaView>
  );
};
