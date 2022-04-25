import React from 'react';

import {Container, ImageCarousel, GymName, GymAddress} from './styles';

interface IItemCarousel {
  item: {
    GymName: string;
    address: string;
    image: string;
  };
}

export const ItemCarousel: React.FC<IItemCarousel> = ({item}) => {
  return (
    <Container style={{backgroundColor: '#3a3a3a'}}>
      <ImageCarousel
        source={{
          uri: item.image,
        }}
        style={{
          resizeMode: 'stretch',
        }}
      />
      <GymName>{item.GymName}</GymName>
      <GymAddress>{item.address}</GymAddress>
    </Container>
  );
};
