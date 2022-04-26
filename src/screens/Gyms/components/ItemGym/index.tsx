import React from 'react';

import {
  Container,
  ImageGym,
  ContainerDetails,
  NameGym,
  AddressGym,
  Accessible,
  ContainerKm,
  Distance,
} from './styles';

const teste = [1, 2, 3, 4];

export const ItemGym = () => {
  return (
    <Container>
      <ImageGym
        source={{
          uri: 'https://assets.totalpass.com/mobile/IMAGENS_APP_QUEIMA_PERSONAL_2.png',
        }}
      />
      <ContainerDetails>
        <NameGym>Smart Fit Liberdade</NameGym>
        <AddressGym>Av. Brigadeiro Luis Antonio, 535</AddressGym>
        <Accessible>Disponivel em seu plano</Accessible>
      </ContainerDetails>
      <ContainerKm>
        <Distance>390 m</Distance>
      </ContainerKm>
    </Container>
  );
};
