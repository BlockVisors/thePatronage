import { Box, Container, Flex, Grid, GridItem, Heading, Img } from '@chakra-ui/react';
// import { Col, Container, Grid, Text } from '@nextui-org/react';
import Spline from '@splinetool/react-spline';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import FeatureImage from '../components/FeatureImage';
import ThreeColumnFeature from '../components/ThreeColumnFeature';
import CTAWithAnnotation from '../components/CTAWithAnnotation';
import SampleExperiences from '../components/SampleExperiences';
// import Hero from '../components/Hero';
// import GettingStarted from '../components/GettingStarted';
// import ContactSocial from '../components/ContactSocial';

import { Navbar } from "../components";
import Pricing from "../components/Pricing1"
import PricingHorizontal from '../components/PricingHorizontal';



const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
     <FeatureImage />
      <ThreeColumnFeature />
      {/* <ContactSocial /> */}
      <Pricing />
      <PricingHorizontal />
      </>
  )
}

export default Home
