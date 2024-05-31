import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContexProvider";


const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/about",
    label: "ABOUT",
  },

  {
    to: "/tickets",
    label: "TICKETS",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
];

export default function Navbar() {

  const {logout} = useContext(AuthContext)
  
  return (
    <Flex
      align="center"
      justify="space-around"
      backgroundColor="gray.200"
      padding={3}
    >
      {links.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="gray.900"
        >
          {link.label}
        </ChakraLink>
      ))}
      <Button variant="outline" colorScheme="red" onClick={logout}>
        LOGOUT
      </Button>
    </Flex>
  );
}
