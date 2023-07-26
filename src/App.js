import { ChakraProvider, Box } from '@chakra-ui/react';
import DrawerMenu from './components/DrawerMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ChakraProvider>
      <Box
        backgroundImage="linear-gradient(to bottom, #000000, #111111)"
        height="100vh" // Set the height of the outer Box to fill the viewport
      // display="flex"
      >
        <Router>
          <Box px="7">
            <DrawerMenu />
          </Box>
          <Box flex="1" overflow="auto"> {/* Use flex="1" and overflow="auto" to handle page content */}

            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} /> {/* This sets Home as the default page */}
            </Routes>

          </Box>
        </Router>
      </Box>
    </ChakraProvider >
  );
}

export default App;
