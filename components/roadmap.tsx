import { ArrowDownIcon } from "@chakra-ui/icons";
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
          bgImage="url('https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80')"
          bgPosition="center"
          mb={2}
        >
          <div>
            <Text
              as="u"
              mt="1"
              justifyContent={"center"}
              color="white"
              fontSize={"4xl"}
              align="center"
            >
              {" "}
              Roadmap
            </Text>
            <div>
              <br></br>
              <Text
                justifyContent={"center"}
                color="white"
                fontSize={"3xl"}
                align="center"
              >
                {" "}
                Enter roadmap here
              </Text>
            </div>
            <br></br>
            <div>
              <List
                color="white"
                alignItems="centre"
                justifyContent={"center"}
                textAlign="center"
              >
                <Text>One</Text>
                <ArrowDownIcon />
                <br></br>
                <Text>One</Text>
                <ArrowDownIcon />
                <br></br>
                <Text>One</Text>
                <ArrowDownIcon />
                <br></br>
                <Text>One</Text>
                <ArrowDownIcon />
                <br></br>
                <Text>One</Text>
                <ArrowDownIcon />
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
