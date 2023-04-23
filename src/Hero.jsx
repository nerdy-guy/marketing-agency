import { Box, Button, Heading, Img, Stack, Text } from "@chakra-ui/react";

import hero from "./assets/hero.svg";

const Hero = () => {
  return (
    <Box as="section" bg="gray.800" pt="20" pb="24">
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          spacing={{
            base: "3rem",
            lg: "2rem",
          }}
          mt="8"
          align={{
            lg: "center",
          }}
          justify="space-between"
        >
          <Box
            flex="1"
            maxW={{
              lg: "520px",
            }}
          >
            <Heading
              as="h1"
              size="3xl"
              color="blue.300"
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Stay ahead of the curve
            </Heading>
            <Text color="gray.400" mt="4" fontSize="lg" fontWeight="medium">
              Drive more traffic to your website by improving your search engine
              rankings
            </Text>
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              spacing="4"
              mt="8"
            >
              <Button
                size="lg"
                minW="180px"
                colorScheme="blue"
                height="14"
                px="8"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                height="14"
                px="8"
                shadow="base"
                variant="solid"
                color="black"
              >
                Learn More
              </Button>
            </Stack>
          </Box>
          <Box
            pos="relative"
            w={{
              base: "full",
              lg: "560px",
            }}
            h={{
              base: "auto",
              lg: "560px",
            }}
          >
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{
                lg: "100%",
              }}
              objectFit="cover"
              src={hero}
              alt="Drive more traffic to your website by improving your search engine rankings"
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
