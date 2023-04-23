import { Box, Stack, Text, useColorModeValue as mode } from "@chakra-ui/react";

export const Feature = (props) => {
  const { title, children, icon } = props;
  return (
    <Box>
      <Box color={mode("blue.600", "blue.400")} fontSize="2.5rem">
        {icon}
      </Box>
      <Stack mt="4">
        <Text
          as="h3"
          color={mode("blue.600", "blue.400")}
          fontSize="xl"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text paddingEnd="6" lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Box>
  );
};