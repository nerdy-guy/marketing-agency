import { Box, Flex, VisuallyHidden } from "@chakra-ui/react";
import { NavContent } from "./NavContent";
import { MdOutlineShowChart } from "react-icons/md";

const Navbar = () => (
  <Box>
    <Box as="header" height="16" bg="gray.800" position="relative">
      <Box
        height="100%"
        maxW="7xl"
        mx="auto"
        ps={{
          base: "6",
          md: "8",
        }}
        pe={{
          base: "5",
          md: "0",
        }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          <Box as="a" href="#" rel="home" color="blue.600" fontSize="5xl">
            <VisuallyHidden>Marketing Agency</VisuallyHidden>
            <MdOutlineShowChart />
          </Box>
          <NavContent.Desktop
            display={{
              base: "none",
              md: "flex",
            }}
          />
          <NavContent.Mobile
            display={{
              base: "flex",
              md: "none",
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default Navbar;
