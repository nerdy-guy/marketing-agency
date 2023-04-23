import { Box, Text } from "@chakra-ui/react";

export const StatCard = (props) => {
  const { title, value, children } = props;
  return (
    <Box as="dl" bg="gray.700" p="6" rounded="lg" shadow="md">
      <Text as="dt" color="blue.300" fontSize="sm" fontWeight="bold">
        {title}
      </Text>
      <Text
        as="dd"
        fontSize="5xl"
        fontWeight="extrabold"
        lineHeight="1"
        my="4"
        color="white"
      >
        {value}
      </Text>
      <Text as="dd" color="gray.400">
        {children}
      </Text>
    </Box>
  );
};
