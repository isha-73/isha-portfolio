import { ChakraProvider, Box } from '@chakra-ui/react';
import DrawerMenu from './components/DrawerMenu';
import Info from './components/Info.js';
import Footer from './components/Footer.js';

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
        <Box>
          <Footer />
        </Box>


      </Box>
    </ChakraProvider>
  );
}

export default App;
