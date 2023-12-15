import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  ButtonGroup,
  Spacer,
  Button,
  Heading,
} from "@chakra-ui/react";
const Navbar = () => {
  return (
   
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">PPF Calculator</Heading>
        </Box>
        <Spacer />
        <Box>
          {" "}
          <ButtonGroup gap="2">
            <Button colorScheme="teal">
              <Link to="/signup">Signup</Link>
            </Button>
            <Button colorScheme="teal">
              {" "}
              <Link to="/login">Login</Link>
            </Button>
            <Button colorScheme="teal">
              <Link to="/profile">Profile</Link>
            </Button>
            <Button colorScheme="teal">
              <Link to="/calculator">Calculator</Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    
  );
};

export default Navbar;
