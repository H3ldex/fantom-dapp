import { Heading, Box, Text } from '@chakra-ui/react'
const About = () => {
    return (
      <div>
          <Box
        mt='4'
        display='inline-flex'
        justifyContent='center'
        alignItems={'center'}
        width='100%'
        >
          <Heading> About</Heading>
          </Box>
          
          <Text>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
       
        </div>
    )
  }
  
  export default About