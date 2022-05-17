import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Divider, Stack, Flex, Text, Box, Image, Container } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Container
    mt='4'
        display='inline-flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        objectFit={'contain'}    
        >
        <Image
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Image
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Image
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Image
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Image
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Image
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
    </Container>
  );
};
export default Gallery;
