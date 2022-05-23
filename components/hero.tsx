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
        py = {40}
        bgImage="url('https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80')"
        bgPosition='center'
        mb={2}
        >
      <Button _hover={{ bg: '#3a3b3c' }} justifyContent='end' leftIcon={<ArrowForwardIcon />} colorScheme='whiteAlpha' variant={'solid'}>Mint Here</Button>
      </Box>
      </Stack>
      <Stack direction='row' h='5px' mt='2px'>
      </Stack>
    </div>
  );

}

export default Hero