import { Heading, Box, Text } from '@chakra-ui/react'
const About = () => {
    return (
      <div id="about">
          <Box
        mt='4'
        display='inline-flex'
        justifyContent='center'
        alignItems={'center'}
        width='100%'
        >
          <Heading> About</Heading>
          </Box>
          <Box
          mt='6'>
          <Text>. </Text>
                 <br></br>
                 <Text> Hi, my name is Beca I am the creator of the Melting animal collection that will be your new favorite collection on Fantom.
                  I am a psychology student, but my passion has been painting and drawing since I was a little girl.
                  Recently entered the world of NFTs and loved the concept, so I found it interesting to create my own collection.
                  This collection is inspired by animals combined with my drawing style  </Text>
                 <br></br>
                 <Text> First, I had to find a theme for the collection after a long debate of ideas with my partner H3ldex,
                        We thought that Animals would be a nice one to start because every animal is unique in its own way.
                        Dont matter the size to own the respect and power in their territory!
                        For the final product, I combined my drawing style with the animals.  </Text>
                 </Box>
       
        </div>
    )
  }
  
  export default About