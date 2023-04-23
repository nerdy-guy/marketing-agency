import { Button, chakra, Input, Stack, Text } from "@chakra-ui/react";
import { FooterHeading } from "./FooterHeading";

export const SubscribeForm = (props) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading>Subscribe to our newsletter</FooterHeading>
        <Text color="white">Get notified with the latest marketing trends</Text>
        <Stack
          spacing="4"
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Input
            bg="inherit"
            placeholder="Enter your email"
            type="email"
            color="white"
            required
            focusBorderColor="blue.300"
            _placeholder={{
              opacity: 1,
              color: "whiteAlpha.700",
            }}
          />
          <Button
            type="submit"
            colorScheme="blue"
            flexShrink={0}
            width={{
              base: "full",
              md: "auto",
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};
