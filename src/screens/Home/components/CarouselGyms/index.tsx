import React, {useEffect, useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useSelector} from 'react-redux';

import {ApplicationState} from '../../../../store';

import {ItemCarousel} from '../ItemCarousel';

import {Container, Title, CarouselTop, ContainerGym} from './styles';

const slides = [
  {
    key: 1,
    GymName: 'Smart Fit Liberdade',
    address: 'Avenida da Liberdade, 902',
    image:
      'https://assets.totalpass.com/mobile/IMAGENS_APP_QUEIMA_PERSONAL_2.png',
  },
  {
    key: 2,
    GymName: 'Smart Fit Ibirapuera',
    address: 'Avenida Ibirapuera, 1000A',
    image:
      'https://assets.totalpass.com/mobile/IMAGENS_APP_QUEIMA_PERSONAL_2.png',
  },
  {
    key: 3,
    GymName: 'Smart Fit Ibirapuera',
    address: 'Avenida Ibirapuera, 1000A',
    image:
      'https://assets.totalpass.com/mobile/IMAGENS_APP_QUEIMA_PERSONAL_2.png',
  },
  {
    key: 4,
    GymName: 'Smart Fit Ibirapuera',
    address: 'Avenida Ibirapuera, 1000A',
    image:
      'https://assets.totalpass.com/mobile/IMAGENS_APP_QUEIMA_PERSONAL_2.png',
  },
  {
    key: 5,
    GymName: 'Smart Fit Ibirapuera',
    address: 'Avenida Ibirapuera, 1000A',
    image:
      'https://assets.totalpass.com/mobile/IMAGENS_APP_QUEIMA_PERSONAL_2.png',
  },
];

export const CarouselGyms = () => {
  const [gymFavorites, setGymsFavorites] = useState([]);

  useEffect(() => {
    gymFavorite();
    console.log('gymsfavorites', gymFavorites);
  }, []);

  const gyms = useSelector((state: ApplicationState) => state.gyms.data);
  console.log('gymsState', gyms);

  const gymFavorite = () => {
    let data = [];

    gyms.map(gym => {
      if (gym.attributes.is_favorite == true) {
        setGymsFavorites([...data, gym]);
      }
    });
  };
  return (
    <Container>
      <CarouselTop>
        <Title>Academias Favoritas</Title>
      </CarouselTop>
      <ContainerGym>
        <AppIntroSlider
          dotStyle
          activeDotStyle
          horizontal
          renderItem={ItemCarousel}
          data={gymFavorites}
          showPrevButton={false}
          showNextButton={false}
          showDoneButton={false}
        />
      </ContainerGym>
    </Container>
  );
};
