import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { StatCard } from "./StatCard";

const Stats = () => {
  return (
    <Box as="section" pb="20">
      <Box bg="blue.600" pt="20" pb="20">
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
          <Box mb="16" color="white" maxW="xl">
            <Heading
              size="2xl"
              letterSpacing="tight"
              fontWeight="extrabold"
              lineHeight="normal"
            >
              Trusted By 200+ Enterprises
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box mt="-20">
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
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 4,
            }}
            spacing="6"
          >
            <StatCard title="Satisfied Clients" value="6500+">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </StatCard>
            <StatCard title="Successful Projects" value="14800+">
              Etiam malesuada ante id orci elementum pretium.
            </StatCard>
            <StatCard title="Professionals" value="120+">
              Donec ut nunc non sapien ultricies pellentesque.
            </StatCard>
            <StatCard title="Years of experience" value="20+">
              Aenean scelerisque porttitor nulla ac tincidunt.
            </StatCard>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;
