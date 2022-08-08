import { StarIcon } from "@chakra-ui/icons";
import {
  Image,
  Container,
  Stack,
  Center,
  Box,
  Divider,
  Text,
  List,
} from "@chakra-ui/react";
import Popovercomp from "./popover";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <Stack>
        <Box
          mt="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          objectFit="cover"
          py={10}
          bgImage="url('https://im.ge/i/F3sgMm')"
          bgPosition="center"
          mb={2}
        >
          <div>
            <Center>
            <Text
              as="u"
              mt="1"
              justifyContent={"center"}
              color="white"
              fontSize={"4xl"}
              align="center"
            >
              {" "}
              MELTING ANIMALS
            </Text>
            </Center>
            <div>
              <br></br>
              <Text
                justifyContent={"center"}
                color="white"
                fontSize={"3xl"}
                align="center"
              >
                {" "}
                ROADMAP 
              </Text>
            </div>
            <br></br>
            <div>
              <List
                color="white"
                alignItems="centre"
                justifyContent={"center"}
                textAlign="center"
                mb="15px"
              >
                <Popovercomp buttonName="Phase 1" headerName="The beginning of all" text="Discussion on the theme of the collection
Adapting the selected theme to my drawing style
Creation of backgrounds and variations for the animals"
                             left="10px" right="0px" />
                <StarIcon fontSize={"30px"}/>
                <br></br>
                <Popovercomp buttonName="Phase 2" headerName="The circle of life" text="Creation of socials, Discord and Twitter
                Design and Deploy Website"
                left="10px" right="0px" />
                <StarIcon fontSize={"30px"} />
                <br></br>
                <Popovercomp buttonName="Phase 3" headerName="Welcome to the jungle" text="Creation of the Melting Animals community
Releasing the Website
List the Melting Animals collection on Paintswap and NFTkey"
                left="10px" right="0px" />
                <StarIcon fontSize={"30px"}/>
                <br></br>
                <Popovercomp buttonName="Phase 4" headerName="Kings of the jungle" text="Solling out all the Melting Animals
                WL for the next project"
                left="10px" right="0px" />
                <StarIcon fontSize={"30px"}/>
                <br></br>
                <Popovercomp buttonName="Phase 5" headerName="The Legacy" text="Merchandize
                New Project Reveal"
                left="10px" right="0px" />
                <br></br>
              </List>
            </div>
          </div>
        </Box>
      </Stack>
    </div>
  );
};
export default Roadmap;
