import type { NextPage } from "next";
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Team from "../components/team"
import Gallery from "../components/gallery"
import Roadmap from "../components/roadmap"
import { Box, Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box>
      <Container pt='15px' maxWidth='1280px'>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Team/>
      <Roadmap/>
      </Container>
    </Box>
  );
};

export default Home;
