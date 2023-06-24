import logo from './logo.svg';
import './App.css';
import DrawerMenu from './components/DrawerMenu';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <DrawerMenu className="drawer" />
      </header>
      <body className='App-body'>
        <p>Hello</p>
        </body>
      <footer className='App-footer'>
        <p>Footer</p>
      </footer>
    </div>
    </ChakraProvider>
  );
}

export default App;
