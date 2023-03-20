import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Buy from "../components/exchange/Buy";
import Sell from "../components/exchange/Sell";
import Exchange from "../components/exchange/Exchange";
import Menu from "../components/Nav/Menu";
import Navbar from "../components/Nav/Navbar";
import BodyWrapper from "../utils/BodyWrapper";
import Chart from "chart.js/auto";
import "./style.css";

export const tokens = [
  {
    chainId: 1,
    address: "0xaa61d5dec73971cd4a026ef2820bb87b4a4ed8d6",
    value: "CRE8R DAO",
    label: "CRE8R",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/22568/thumb/cropped-FINALwithbrick-2-1-1.png?1642060468",
  },
  {
    chainId: 1,
    address: "0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d",
    value: "Voyager VGX",
    label: "VGX",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/794/thumb/Voyager-vgx.png?1575693595",
  },
];

function LandingPage() {
  const stats = [
    { title: "Total Assets ", value: "$10,00" },
    { title: "Total Deposit ", value: "$2,445" },
    { title: "APY ", value: "+8.6%" },
  ];

  const data = [
    { year: 2010, count: 10000 },
    { year: 2011, count: 20000 },
    { year: 2012, count: 30000 },
    { year: 2013, count: 40000 },
    { year: 2014, count: 50000 },
    { year: 2015, count: 60000 },
    { year: 2016, count: 70000 },
  ];

  useEffect(() => {
    new Chart(document.getElementById("portfolio-chart"), {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Portfolio performance",
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  }, []);

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
                bg="app.dark.100"
                borderRadius={"10px"}
              >
                <canvas id="portfolio-chart"></canvas>
              </Box>
            </GridItem>
            <GridItem px={{ base: "1rem", lg: "unset" }}>
              <Flex
                direction={"column"}
                justifyContent="center"
                alignItems="center"
                color={"defi.light.second"}
                bg="defi.dark.second"
                h={{ lg: "150px" }}
                borderRadius="10px"
                fontWeight={"bold"}
                py={{ base: "1rem", lg: "unset" }}
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
                  <TabList mb="1em" px="10px">
                    <Tab mx="5px">Buy</Tab>
                    <Tab mx="5px">Sell</Tab>
                    <Tab mx="5px">Exchange</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Buy />
                    </TabPanel>
                    <TabPanel>
                      <Sell />
                    </TabPanel>
                    <TabPanel>
                      <Exchange />
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
