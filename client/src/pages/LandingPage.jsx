import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Menu from "../components/Nav/Menu";
import Navbar from "../components/Nav/Navbar";
import BodyWrapper from "../utils/BodyWrapper";

function LandingPage() {
  const stats = [
    { title: "Total Assets ", value: "$10,00" },
    { title: "Total Deposit ", value: "$2,445" },
    { title: "APY ", value: "+8.6%" },
  ];
  return (
    <BodyWrapper>
      <Box w="full" overflow="hidden" h={{ lg: "100vh" }}>
        <Navbar />
        <Grid
          w="full"
          h="full"
          mt={{ lg: "30px" }}
          gridTemplateColumns={{ lg: "20% 60% 20%" }}
        >
          <GridItem pl={{ lg: "20px" }} h="full">
            <Menu />
          </GridItem>
          <GridItem px={{ lg: "30px" }}>
            <Grid
              h={{ lg: "150px" }}
              gridTemplateColumns="repeat(3, 1fr)"
              gap={"1rem"}
            >
              {stats.map(({ title, value }, key) => (
                <GridItem
                  h="full"
                  borderRadius="10px"
                  bg="defi.dark.second"
                  color={"defi.light.second"}
                  _hover={{
                    bg: "app.accent.100",
                    color: "defi.dark.first",
                  }}
                >
                  <Flex
                    w="full"
                    h="full"
                    alignItems={"center"}
                    justifyContent="center"
                    direction={"column"}
                  >
                    <Text fontWeight={"bold"} fontSize={{ lg: "35px" }}>
                      {value}
                    </Text>
                    <Text mt="7px" fontSize="14px">
                      {title}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
          <GridItem>
            right
          </GridItem>
        </Grid>
      </Box>
    </BodyWrapper>
  );
}

export default LandingPage;
