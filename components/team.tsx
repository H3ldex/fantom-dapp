
import { Box, Image, Center, Stack} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import TeamImage from "./teamImages";

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
    <Stack flexDirection={{ base: 'column', md: 'row'}}>
    <Box
      margin="auto"
      mt='4'
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
      mt='4'
      display='block'
      justifyContent='center'
      alignItems={'center'}
      width='100%'
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
    </div>
  )
}

export default Team