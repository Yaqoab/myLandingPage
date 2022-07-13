import {ChakraProvider } from '@chakra-ui/react';
import ComponentsCollections from './components/contCollection';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App({Component, pageProps}) {
  return (
  <ChakraProvider>
     <Navbar />
     <ComponentsCollections />
     <Footer />
  </ChakraProvider>
  );
}

export default App;
