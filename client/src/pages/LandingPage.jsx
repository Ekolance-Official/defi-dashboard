import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import Buy from "../components/exchange/Buy";
import Sell from "../components/exchange/Sell";
import Exchange from "../components/exchange/Exchange";
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
    <>
      <Navbar />
      <BodyWrapper>
        <Box
          w="full"
          overflow="hidden"
          h={{ lg: "100vh", base: "unset" }}
          minH="100vh"
          mt={{ base: "5.5rem", lg: "unset" }}
        >
          <Grid
            w="full"
            h="full"
            mt={{ lg: "30px" }}
            gridTemplateColumns={{ lg: "20% 51% 27%" }}
          >
            <GridItem
              pl={{ lg: "20px" }}
              h="full"
              display={{ base: "none", lg: "inline-grid" }}
            >
              <Menu />
            </GridItem>
            <GridItem px={{ lg: "30px" }}>
              <Grid
                h={{ lg: "150px", base: "auto" }}
                gridTemplateColumns="repeat(3, 1fr)"
                gap={"1rem"}
                px={{ base: "1rem", lg: "unset" }}
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
                    py={{ base: "10px", lg: "unset" }}
                  >
                    <Flex
                      w="full"
                      h="full"
                      alignItems={"center"}
                      justifyContent="center"
                      direction={"column"}
                    >
                      <Text
                        fontWeight={"bold"}
                        fontSize={{ lg: "35px", base: "25px" }}
                      >
                        {value}
                      </Text>
                      <Text mt="7px" fontSize={{ lg: "14px", base: "10px" }}>
                        {title}
                      </Text>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>

              <Box
                mt="20px"
                mb="5vh"
                mx={{ base: "1rem", lg: "unset" }}
                minH={"50vh"}
                bg="app.accent.100"
                borderRadius={"10px"}
                p="1rem"
              ></Box>
            </GridItem>
            <GridItem>
              <Flex
                direction={"column"}
                justifyContent="center"
                alignItems="center"
                color={"defi.light.second"}
                bg="defi.dark.second"
                h={{ lg: "150px" }}
                borderRadius="10px"
                fontWeight={"bold"}
              >
                <Text>Total Balance</Text>
                <Text fontSize={{ lg: "30px" }} color="defi.light.first">
                  $15,000
                </Text>
              </Flex>

              <Flex
                mt="20px"
                bg="defi.dark.second"
                px="10px"
                borderRadius={"10px"}
                display={{
                  base: "none",
                  lg: "unset",
                }}
              >
                <Tabs isFitted w="full" variant="soft-rounded" mt="10px">
                  <TabList mb="1em">
                    <Tab mx="5px">Buy</Tab>
                    <Tab mx="5px">Sell</Tab>
                    <Tab mx="5px">Exchange</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <p>
                        <Buy />
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        <Sell />
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        <Exchange />
                      </p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </BodyWrapper>
    </>
  );
}

export default LandingPage;
