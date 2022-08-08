import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Divider, Stack, Flex, Text, Box, Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


const Hero = () => {
  return (
    <div>
      <Stack>
      <Box
        mt='4'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        objectFit='cover'
        border="4px"
        borderRadius="lg"
        py = {40}
        bgImage="url('https://i.ibb.co/9yLH4sF/Design-sem-nome-20.png')"
        bgPosition='center'
        mb={2}
        >
      <Button _hover={{ bg: '#805AD5' }} justifyContent='end' leftIcon={<ArrowForwardIcon />} colorScheme='whiteAlpha' variant={'solid'}>Mint Here</Button>
      </Box>
      </Stack>
      <Stack direction='row' h='5px' mt='2px'>
      </Stack>
    </div>
  );

}

export default Hero