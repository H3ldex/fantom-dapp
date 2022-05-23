import React from "react";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  HStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex align="center" justify={"space-between"}>
      <Image
        borderRadius="full"
        boxSize="80px"
        src="0.png"
        alt="logo"
        display={{ base: "none", md: "flex" }}
      />
      <Box display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Dropdown menu"
            icon={<HamburgerIcon />}
          ></MenuButton>
          <MenuList>
            <MenuItem>
              <Link as={NextLink} href="/#about">
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={NextLink} href="/#roadmap">
                Roadmap
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={NextLink} href="/#teams">
                Team
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <HStack
        spacing="100px"
        justify={"space-between"}
        display={{ base: "none", md: "flex" }}
      >
        <Link as={NextLink} href="/#about">
          <Button variant="ghost" as="a" cursor="pointer" fontSize='20px'>
            About
          </Button>
        </Link>
        <Link as={NextLink} href="/#roadmap">
          <Button variant="ghost" as="a" cursor="pointer" fontSize='20px'>
            Roadmap
          </Button>
        </Link>
        <Link as={NextLink} href="/#teams">
          <Button variant="ghost" as="a" cursor="pointer" fontSize='20px'>
            Team
          </Button>
        </Link>
      </HStack>
      <HStack spacing="15px">
        <Button as={ConnectButton}>
          Connect Wallet
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
