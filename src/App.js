import { ChakraProvider, Box } from '@chakra-ui/react';
import DrawerMenu from './components/DrawerMenu';
import Info from './components/Info.js';

function App() {
  return (
    <ChakraProvider>
      <Box
        backgroundImage="linear-gradient(to bottom, #000000, #111111)"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <header>
          <DrawerMenu />
          <Info />
        </header>
        <Box
          flex="1"
          className="App-body"
          textAlign="center"

        >
          {/* Add your content here */}
        </Box>
        <footer className="App-footer" p={4}>
          <p>Footer</p>
        </footer>
      </Box>
    </ChakraProvider>
  );
}

export default App;
