import {
  Box,
} from '@chakra-ui/react';
import { LandingPage_Navbar } from './comp/Navbar';
import { LandingPage_About } from './comp/About';
import LandingPage_Recent from './comp/Recent';
import { LandingPage_Contact } from './comp/Contact';
import LandingPage_Footer from './comp/Footer';
import { LandingPage_Hero } from './comp/Hero';


export function MainLandingPage() {
  return (
    <Box as='main' sx={{
      minHeight: '100vh',
      bgColor: "blackAlpha.900",
      color: "whiteAlpha.700",
      overflow: 'hidden'
    }}>
      <Box sx={{
        minHeight: "75vh"
      }}>
        <LandingPage_Navbar />
        <LandingPage_Hero />
      </Box>
      <Box bgColor='blackAlpha.700'>.</Box>
      <Box as='div' id='about'>
        <LandingPage_About />
      </Box>
      <Box as='div' id='recent'>
        <LandingPage_Recent />
      </Box>
      <Box id='contact'>
        <LandingPage_Contact />
      </Box>
      <Box>
        <LandingPage_Footer />
      </Box>
    </Box>
  );
}
