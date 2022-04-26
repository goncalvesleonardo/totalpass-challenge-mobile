import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 15%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 6px;
  padding-right: 6px;
`;

export const FlatList = styled.FlatList``;

export const ImageGym = styled.Image`
  height: 100%;
  width: 30%;
  resize-mode: cover;
`;

export const ContainerDetails = styled.View`
  flex-direction: column;
  padding-left: 6px;
`;

export const NameGym = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
`;

export const AddressGym = styled.Text`
  font-size: 13px;
  margin-bottom: 5px;
  max-width: 180px;
  color: #adadad;
`;

export const Accessible = styled.Text`
  font-size: 13px;
  margin-bottom: 5px;
  max-width: 180px;
  color: #adadad;
`;

export const ContainerKm = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 23.5%;
`;

export const Distance = styled.Text`
  color: #adadad;
  font-size: 15px;
`;
