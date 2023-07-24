import { ChakraProvider, Box } from '@chakra-ui/react';
import DrawerMenu from './components/DrawerMenu';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Box
        backgroundImage="linear-gradient(to bottom, #000000, #111111)"
        height={'100%'}
      >
        <Box px={'7'}>
          {' '}
          {/* Add margin to the DrawerMenu container */}
          <DrawerMenu />
        </Box>
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
