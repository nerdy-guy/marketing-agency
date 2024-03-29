import { Box, Stack, StackDivider } from "@chakra-ui/react";
import { Copyright } from "./Copyright";
import { LinkGrid } from "./LinkGrid";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { SubscribeForm } from "./SubscribeForm";
import { MdOutlineShowChart } from "react-icons/md";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    bg="gray.800"
    py="12"
    px={{
      base: "4",
      md: "44",
    }}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        spacing={{
          base: "10",
          lg: "28",
        }}
      >
        <Box flex="1" color="blue.600" fontSize="5xl">
          <MdOutlineShowChart />
        </Box>
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          spacing={{
            base: "10",
            md: "20",
          }}
        >
          <LinkGrid
            spacing={{
              base: "10",
              md: "20",
              lg: "28",
            }}
            flex="1"
          />
          <SubscribeForm
            width={{
              base: "full",
              md: "sm",
            }}
          />
        </Stack>
      </Stack>
      <Stack
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
