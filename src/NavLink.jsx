import { chakra } from "@chakra-ui/react";

const DesktopNavLink = (props) => {
  return (
    <chakra.a
      fontWeight="medium"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="2px"
      borderColor="transparent"
      transition="all 0.2s"
      color="white"
      _hover={{
        borderColor: "currentcolor",
        color: "blue.200",
      }}
      {...props}
    />
  );
};

const MobileNavLink = (props) => {
  return (
    <chakra.a
      display="block"
      textAlign="center"
      fontWeight="bold"
      py="5"
      fontSize="lg"
      color="white"
      w="full"
      _hover={{
        bg: "blackAlpha.200",
      }}
      {...props}
    />
  );
};

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};
