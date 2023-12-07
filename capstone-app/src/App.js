import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Specials from './components/Specials';

import About from './components/About';
import Homepage from './Homepage';
import Booking from './Booking';
import Ordering from './Ordering';
import Login from './Login';

import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { Helmet } from 'react-helmet';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
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
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
        <Alert/>
      </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
