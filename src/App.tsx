import { Box } from '@mui/material';
import { Slider } from './components/Slider/Slider';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Services } from './components/Services/Services';
import { Testimonials } from './components/Testimonials/Testimonials';
import { ContactUs } from './components/ContactUs/ContactUs';

import './App.scss';

export const App = () => {
  
  return (
    <Box className="App" sx={{ bgcolor: '#EFF4F9' }}>
      <Slider />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
    </Box>
  );
};
