import React from 'react';

import {Container, Title, Subtitle, ComponentName} from './styles';

interface IHeader {
  home?: boolean;
  title?: string;
  subtitle?: string;
  componentName?: string;
}

export const Header: React.FC<IHeader> = ({
  home,
  title = 'Bom dia,',
  subtitle = 'Bora cuidar da saúde!',
  componentName = 'Academias',
}) => {
  return (
    <Container style={{backgroundColor: '#3a3a3a'}}>
      {home ? (
        true && (
          <>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </>
        )
      ) : (
        <ComponentName>{componentName}</ComponentName>
      )}
    </Container>
  );
};
