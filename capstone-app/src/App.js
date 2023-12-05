import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import Specials from './components/Specials';
import ReviewSection from './components/ReviewSection';
import About from './components/About';

function App() {
  return (
    <ChakraProvider>
    <meta name="description" content="Little Lemon Restrarunt, where serves greart home-made italian foods and joys"/>
    <meta name="og:title" content="Little Lemon Restrarunt"/>
    <meta name="og:description" content="Find joyful and delicious italian dining here"/>
    <meta name='og:image' content='components'/>
      <main>
        <Header />
        <LandingSection />
        <Specials />
        <ReviewSection />
        <About />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
