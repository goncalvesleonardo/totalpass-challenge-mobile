import React from 'react';

import {Container, ImageCarousel, GymName, GymAddress} from './styles';

import {IItemGym} from '../../../../Interfaces/IItemGym';

export const ItemCarousel: React.FC<IItemGym> = props => {
  return (
    <Container style={{backgroundColor: '#3a3a3a'}}>
      <ImageCarousel
        source={{
          uri: props.attributes.main_image_url,
        }}
        style={{
          resizeMode: 'stretch',
        }}
      />
      <GymName>{props.attributes.name}</GymName>
      <GymAddress>{props.attributes.full_address}</GymAddress>
    </Container>
  );
};
