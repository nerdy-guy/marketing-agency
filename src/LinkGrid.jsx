import { Box, Link, SimpleGrid, Stack } from "@chakra-ui/react";
import { FooterHeading } from "./FooterHeading";

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Company</FooterHeading>
      <Stack color="white">
        <Link>Services</Link>
        <Link>Features</Link>
        <Link>About</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack color="white">
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
