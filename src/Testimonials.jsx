import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";

const Testimonials = ({ name, jobTitle, imageSrc }) => (
  <Box as="section" bg={mode("gray.50", "gray.800")} mt="16">
    <Heading
      lineHeight="shorter"
      size="2xl"
      letterSpacing="tight"
      color={mode("gray.900", "white")}
      fontWeight="extrabold"
      textAlign="center"
    >
      See what our clients say
    </Heading>
    <Box
      maxW="3xl"
      mx="auto"
      px={{
        base: "6",
        md: "8",
      }}
      pt="12"
      pb="16"
    >
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color={mode("gray.300", "gray.600")}
          fontSize={{
            base: "3xl",
            md: "6xl",
          }}
        />
        <Text
          fontSize={{
            base: "xl",
            md: "2xl",
          }}
          fontWeight="medium"
          mt="6"
        >
          &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          malesuada ante id orci elementum pretium. Donec ut nunc non sapien
          ultricies pellentesque.&rdquo;
        </Text>
        <Quotee name={name} jobTitle={jobTitle} imageSrc={imageSrc} mt="8" />
      </Flex>
      <HStack
        justify="center"
        spacing="4"
        mt="8"
        color={mode("gray.300", "gray.600")}
      ></HStack>
    </Box>
  </Box>
);

export default Testimonials;
