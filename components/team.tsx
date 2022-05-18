
import { Box, Image, Center } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const Team = () => {
  return (
    <div
    id='teams'
    >
    <Box
        mt='4'
        display='inline-flex'
        justifyContent='center'
        alignItems={'center'}
        width='100%'
        >
    <Heading>Our team</Heading>
    </Box>
    <Box
      margin="auto"
      mt='4'
      display='block'
      justifyContent='center'
      alignItems={'center'}
      width='100%'
      >
        <Center>
        <Image
        padding='10px'
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      </Center>
      <Center
      fontWeight={'bold'}
      >
      <text>Name of team member</text>
      </Center>
      </Box>

      <Box
      margin="auto"
      mt='4'
      display='block'
      justifyContent='center'
      alignItems={'center'}
      width='100%'
      >
        <Center>
        <Image
        padding='10px'
        boxSize="212px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      </Center>
      <Center
      fontWeight={'bold'}
      >
      <text>Name of team member</text>
      </Center>
      </Box>
    </div>
  )
}

export default Team