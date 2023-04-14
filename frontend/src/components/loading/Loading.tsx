import React from 'react';
import {Container, Loading as LoadingNuxtUI} from "@nextui-org/react";

const Loading = () => {
  return (
    <Container display="flex" justify="center" alignItems="center">
      <LoadingNuxtUI>Loading</LoadingNuxtUI>
    </Container>
  );
};

export default Loading;