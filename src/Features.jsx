import { Box, Flex, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { HiOutlineDesktopComputer, HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineBanknotes,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import { Feature } from "./Feature";

import features from "./assets/features.svg";

const FeatureImage = (props) => (
  <Box flex="1" {...props}>
    <Img
      objectFit="cover"
      h="100%"
      w="100%"
      src={features}
      alt="Our Services"
    />
  </Box>
);

const Features = () => {
  return (
    <Box as="section" bg="gray.800" py="24">
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
        <Flex
          justify="space-between"
          direction={{
            base: "column",
            lg: "row",
          }}
        >
          <Box
            maxW={{
              lg: "lg",
            }}
          >
            <Box
              mb={{
                lg: "8rem",
              }}
            >
              <Heading
                lineHeight="shorter"
                size="2xl"
                letterSpacing="tight"
                color="white"
                fontWeight="extrabold"
              >
                Our Services <br />
              </Heading>
              <Text
                mt="4"
                fontSize="2xl"
                color="gray.400"
                maxW={{
                  lg: "md",
                }}
              >
                Aliquam elementum eros nec ex bibendum, ut congue tortor.
              </Text>
            </Box>
            <FeatureImage
              my={{
                base: "14",
                lg: "0",
              }}
              display={{
                base: "block",
                lg: "none",
              }}
            />
            <SimpleGrid
              flex="1"
              columns={{
                base: 1,
                md: 2,
              }}
              spacing={{
                base: "3rem",
                md: "2rem",
              }}
            >
              <Feature
                title="Digital Marketing"
                icon={<HiOutlineDesktopComputer />}
              >
                Morbi lacus est, placerat vitae interdum eget, fermentum sit
                amet sapien.
              </Feature>
              <Feature title="Paid Advertising" icon={<HiOutlineBanknotes />}>
                Iaculis porttitor mauris. Vivamus interdum tortor libero.
              </Feature>
              <Feature
                title="SEO Optimization"
                icon={<HiOutlinePresentationChartLine />}
              >
                Aenean rhoncus facilisis dui, id pulvinar justo venenatis in,
                Phasellus mattis.
              </Feature>
              <Feature title="Email Marketing" icon={<HiOutlineMail />}>
                Aenean vitae metus commodo, placerat lectus sollicitudin,
                tincidunt nunc.
              </Feature>
            </SimpleGrid>
          </Box>
          <FeatureImage
            maxW={{
              lg: "550px",
            }}
            display={{
              base: "none",
              lg: "block",
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Features;
