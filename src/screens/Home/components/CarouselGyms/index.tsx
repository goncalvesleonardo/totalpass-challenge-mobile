import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

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
          data={slides}
          showPrevButton={false}
          showNextButton={false}
          showDoneButton={false}
        />
      </ContainerGym>
    </Container>
  );
};
