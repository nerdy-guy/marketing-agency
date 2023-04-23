import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

const CallToAction = () => {
  return (
    <Box mt="16" as="section" bg="blue.600">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: "6",
          lg: "8",
        }}
        py={{
          base: "16",
          sm: "12",
        }}
        textAlign="center"
      >
        <Heading
          my="4"
          as="h2"
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          Transform Your Brand with Us{" "}
        </Heading>
        <Text fontSize="lg" maxW="xl" mx="auto">
          Boost Your Business with Results-Driven Marketing Solutions: Your
          Trusted Partner for Online Success
        </Text>
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mt="10"
          justify="center"
          spacing={{
            base: "3",
            md: "5",
          }}
          maxW="md"
          mx="auto"
        >
          <Button
            as="a"
            href="#"
            size="lg"
            h="14"
            px="10"
            colorScheme="blue"
            fontWeight="bold"
            flex={{
              md: "1",
            }}
          >
            Contact Us
          </Button>
          <Button
            as="a"
            flex={{
              md: "1",
            }}
            variant="outline"
            href="#"
            size="lg"
            h="14"
            px="10"
            fontWeight="bold"
          >
            Learn More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CallToAction;
