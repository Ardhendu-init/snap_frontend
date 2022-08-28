import React from "react";
import { Flex, Box, Link, Img, Button } from "@chakra-ui/react";
const navLink = ["Feature", "Company", "Careers", "About"];
const Navbar: React.FC = () => {
  return (
    <Flex
      px={{ xs: "20px", sm: "50px" }}
      pt="30px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <Img src="/svg/logo.svg" alt="logo" h="30px" />
        <Flex pl="50px" gap="10" display={{ xs: "none", sm: "flex" }}>
          {navLink.map((link, index) => {
            return <NavLink key={index} linkName={link} />;
          })}
        </Flex>
      </Flex>
      <Flex gap="6" pb="5px" display={{ xs: "none", sm: "flex" }}>
        <Button
          color="bg.gray"
          variant="ghost"
          fontSize="15px"
          fontWeight="500"
          px="25px"
        >
          Login{" "}
        </Button>
        <Button
          fontSize="15px"
          variant="outline"
          fontWeight="500"
          color="bg.gray"
          borderRadius="10px"
        >
          Register
        </Button>
      </Flex>
      <Img src="/svg/icon-menu.svg" display={{ sm: "none" }} />
    </Flex>
  );
};

export default Navbar;

interface NavLinkProps {
  linkName: string;
}

const NavLink: React.FC<NavLinkProps> = ({ linkName }) => {
  return (
    <>
      {linkName === "Feature" ? (
        <Flex gap="3">
          <Link
            fontSize="15px"
            fontWeight="500"
            color="bg.gray"
            _hover={{ color: "bg.black" }}
          >
            {linkName}
          </Link>
          <Img
            h="7px"
            w="12px"
            src="/svg/icon-arrow-down.svg"
            alt="logo"
            mt="7px"
          />
        </Flex>
      ) : (
        <>
          <Link
            fontSize="15px"
            fontWeight="500"
            color="bg.gray"
            _hover={{ color: "bg.black" }}
          >
            {linkName}
          </Link>
        </>
      )}
    </>
  );
};