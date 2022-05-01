import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';

import {ApplicationState} from '../../../../store';

import {IItemGym} from '../../../../Interfaces/IItemGym';

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

export const ItemGym = () => {
  const gyms: IItemGym = useSelector(
    (state: ApplicationState) => state.gyms.data,
  );
  return (
    <Container>
      <FlatList>
        <ImageGym
          source={{
            uri: gyms.attributes.main_image_url,
          }}
        />
        <ContainerDetails>
          <NameGym>{gyms.attributes.name}</NameGym>
          <AddressGym>{gyms.attributes.full_address}</AddressGym>
          {gyms.attributes.accessible_by_user && (
            <Accessible>Disponivel em seu plano</Accessible>
          )}
        </ContainerDetails>
        <ContainerKm>
          <Distance>390 m</Distance>
        </ContainerKm>
      </FlatList>
    </Container>
  );
};
