import { Text } from "@chakra-ui/layout";

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Marketing Agency. All rights reserved.
  </Text>
);
