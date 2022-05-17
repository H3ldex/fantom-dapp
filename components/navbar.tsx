import { Flex, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex p='10px'>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Dropdown menu"
          icon={<HamburgerIcon />}
        ></MenuButton>
        <MenuList>
            <MenuItem>About</MenuItem>
            <MenuItem>Roadmap</MenuItem>
            <MenuItem>Team</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
