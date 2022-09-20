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
import FAQComp from '../components/FAQComp';
import GridHeadingHome from '../components/GridHeadingHome';
import SS from '../components/SS'

import { Navbar } from "../components";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
    <CTAWithAnnotation />
     {/* <Hero /> */}
     <SS />
     <GridHeadingHome />
     <SampleExperiences />
      {/* <ThreeColumnFeature /> */}
      {/* <GettingStarted /> */}

      <FAQComp />
      </>
  )
}

export default Home
