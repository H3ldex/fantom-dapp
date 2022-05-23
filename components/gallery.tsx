import { Flex, Spacer, Box, Container, Center } from "@chakra-ui/react";
import GalleryImage from "./galleryImages";

const Gallery = () => {
  return (
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        justify="center"
        mt="20px"
        mb="20px"
      >
        <GalleryImage url="0.png" altname="Punk0 NFT" rotation="rotate(5deg)" />
        <Spacer />
        <GalleryImage
          url="1.png"
          altname="Punk1 NFT"
          rotation="rotate(-5deg)"
        />
        <Spacer />
        <GalleryImage url="2.png" altname="Punk2 NFT" rotation="rotate(5deg)" />
        <Spacer />
        <Box display={{ base: "none", xl: 'flex'}}>
          <GalleryImage
            url="3.png"
            altname="Punk2 NFT"
            rotation="rotate(-5deg)"
          />
          <Spacer />
          <GalleryImage
            url="4.png"
            altname="Punk2 NFT"
            rotation="rotate(5deg)"
          />
        </Box>
      </Flex>
  );
};
export default Gallery;
