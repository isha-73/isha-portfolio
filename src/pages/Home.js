import React from 'react';
import Info from '../components/Info';
import Footer from '../components/Footer.js';
import Body from '../components/Body';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Info />
      <Box

        textAlign="center"
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}

      >
        <Body />
        <Footer />
      </Box>
    </>
  );
}
