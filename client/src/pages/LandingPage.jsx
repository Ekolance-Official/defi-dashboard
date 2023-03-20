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
import { AiFillWallet, CiMoneyBill, BsBarChart } from "react-icons/all";
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
    {
      title: "Total Assets ",
      value: "$10,00",
      icon: <CiMoneyBill color="#BFC2C4" size={30} />,
    },
    {
      title: "Total Deposit ",
      value: "$2,445",
      icon: <AiFillWallet color="#BFC2C4" size={30} />,
    },
    {
      title: "APY ",
      value: "+8.6%",
      icon: <BsBarChart color="#BFC2C4" size={30} />,
    },
  ];

  useEffect(() => {
    const data = [];

    for (let i = 1; i <= 20; i++) {
      const day = i < 10 ? "0" + i : i;
      const hour = Math.floor(Math.random() * 24);
      const minute = Math.floor(Math.random() * 60);
      const second = Math.floor(Math.random() * 60);
      const value = Math.floor(Math.random() * 40000) + 10000;
      const date = `${hour}:${minute}:${second}`;
      data.push({ x: date, y: value });
    }

    new Chart(document.getElementById("portfolio-chart"), {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Portfolio performance",
            data,
            tension: 0.1,
            borderColor: "#8ADD21",
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              callback: function (value, index, values) {
                return "$" + value.toLocaleString();
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "rgb(255, 99, 132)",
            },
          },
        },
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
            gridTemplateColumns={{ lg: "18% 55% 27%" }}
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
                {stats.map(({ title, value, icon }, key) => (
                  <GridItem
                    key={key}
                    h="full"
                    borderRadius="10px"
                    color={"defi.light.second"}
                    py={{ base: "10px", lg: "unset" }}
                    position="relative"
                  >
                    <Flex alignItems={"center"} direction="column">
                      <Flex
                        alignItems={"center"}
                        borderRadius="50%"
                        p="1rem"
                        mb="-1rem"
                        zIndex={"1"}
                        bg="defi.dark.second"
                        overflow="hidden"
                      >
                        {icon}
                      </Flex>
                      <Flex
                        w="full"
                        h="100px"
                        alignItems={"center"}
                        justifyContent="center"
                        direction={"column"}
                        bg="defi.dark.second"
                        borderRadius={"10px"}
                        _hover={{
                          bg: "app.accent.100",
                          color: "defi.dark.first",
                        }}
                      >
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ lg: "25px", base: "25px" }}
                        >
                          {value}
                        </Text>
                        <Text mt="7px" fontSize={{ lg: "14px", base: "10px" }}>
                          {title}
                        </Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>

              <Box
                mt="50px"
                mb="5vh"
                mx={{ base: "1rem", lg: "unset" }}
                bg="app.dark.second"
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
                <Box></Box>

                <Text>Wallet Balance</Text>
                <Text fontSize={{ lg: "30px" }} color="defi.light.first">
                  $15,000
                </Text>
              </Flex>

              <Flex
                mt="20px"
                bg="defi.dark.second"
                px="10px"
                borderRadius={"10px"}
                pt={{ base: "1rem", lg: "unset" }}
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
