import { Box, Img, Text } from "@chakra-ui/react";

export const Quotee = (props) => {
  const { name, jobTitle, imageSrc, ...boxProps } = props;
  return (
    <Box {...boxProps}>
      <Img
        src={imageSrc}
        mx="auto"
        objectFit="cover"
        w="16"
        h="16"
        rounded="full"
      />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold" color="white">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.400">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  );
};
