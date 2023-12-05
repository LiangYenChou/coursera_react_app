import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import Specials from './components/Specials';
import ReviewSection from './components/ReviewSection';
import About from './components/About';
import Homepage from './Homepage';
import Booking from './Booking';
import Ordering from './Ordering';
import Login from './Login';

function App() {
  return (
    <ChakraProvider>
    <meta name="description" content="Little Lemon Restrarunt, where serves greart home-made italian foods and joys"/>
    <meta name="og:title" content="Little Lemon Restrarunt"/>
    <meta name="og:description" content="Find joyful and delicious italian dining here"/>
    <meta name='og:image' content='components'/>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/order" element={<Ordering />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
