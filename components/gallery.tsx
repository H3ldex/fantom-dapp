import { Image, Container, Stack, Flex } from "@chakra-ui/react";
import GalleryImage from "./galleryImages";

const Gallery = () => {
  return (
    <div>
      <Flex
      flexDirection='row'
        direction="row"
        overflow={"hidden"}
        alignItems="center"
        justifyContent="center"
        max-width="auto"
      >
        <GalleryImage url="0.png" altname="Punk0 NFT" />
        <GalleryImage url="1.png" altname="Punk1 NFT" />
        <GalleryImage url="2.png" altname="Punk2 NFT" />
        <GalleryImage url="3.png" altname="Punk3 NFT" />
        <GalleryImage url="4.png" altname="Punk4 NFT" />
        <GalleryImage url="5.png" altname="Punk5 NFT" />
        <GalleryImage url="6.png" altname="Punk4 NFT" />
        <GalleryImage url="7.png" altname="Punk5 NFT" />
      </Flex>
    </div>
  );
};
export default Gallery;
