import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Header} from '../components/Header';
import {CarouselGyms} from '../Home/components/CarouselGyms';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ContainerAll, Container, ButtonGyms, TextButton} from './styles';

import * as GymsActions from '../../store/ducks/gyms/actions';

export const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    getGyms();
  }, []);

  const getGyms = async () => {
    await dispatch(GymsActions.loadRequest());
  };

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
