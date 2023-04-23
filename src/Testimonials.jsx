import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";

const Testimonials = ({ name, jobTitle, imageSrc }) => (
  <Box as="section" bg="gray.800" pt="16" className="test">
    <Heading
      lineHeight="shorter"
      size="2xl"
      letterSpacing="tight"
      color="white"
      fontWeight="extrabold"
      textAlign="center"
    >
      What our clients say
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
          color="gray.600"
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
          color="gray.400"
        >
          &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          malesuada ante id orci elementum pretium. Donec ut nunc non sapien
          ultricies pellentesque.&rdquo;
        </Text>
        <Quotee name={name} jobTitle={jobTitle} imageSrc={imageSrc} mt="8" />
      </Flex>
      <HStack justify="center" spacing="4" mt="8" color="gray.600"></HStack>
    </Box>
  </Box>
);

export default Testimonials;
