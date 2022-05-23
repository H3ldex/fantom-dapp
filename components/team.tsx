
import { Box, Image, Center, Stack} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import TeamImage from "./teamImages";

const Team = () => {
  return (
    <Box
    id='teams'
    mb='25px'
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
    <Stack flexDirection={{ base: 'column', md: 'row'}} mt={{ base: '4', md: '8'}}>
    <Box
      margin="auto"
      display='block'
      justifyContent='center'
      alignItems={'center'}
      width='100%'
      >
        <Center>
        <TeamImage url="6.png" altname='Team member1'/>
      </Center>
      <Center
      fontWeight={'bold'}
      >
      <text>Name of team member</text>
      </Center>
      </Box>

      <Box
      margin="auto"
      display='block'
      justifyContent='center'
      alignItems={'center'}
      width='100%'
      mb={'4'}
      >
        <Center>
        <TeamImage url="7.png" altname='Team member2'/>
      </Center>
      <Center
      fontWeight={'bold'}
      >
      <text>Name of team member</text>
      </Center>
      </Box>
      </Stack>
    </Box>
  )
}

export default Team