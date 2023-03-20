import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  Select as ChakraSelect,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Menu from "../components/Nav/Menu";
import Navbar from "../components/Nav/Navbar";
import { useGetMarketQuery } from "../store/slices/marketSlice";
import { AiOutlineSwap } from "react-icons/ai";
import BodyWrapper from "../utils/BodyWrapper";
import Chart from "chart.js/auto";

function Analytics() {
  const { data } = useGetMarketQuery();
  const marketDatas = data && data.slice(0, 30);

  useEffect(() => {
    const data = [
      { x: "10am", y: 12000 },
      { x: "10:15am", y: 18000 },
      { x: "10:30am", y: 24000 },
      { x: "10:45am", y: 32000 },
      { x: "11am", y: 42000 },
    ];

    const config = {
      type: "line",
      data: {
        labels: [], // No labels
        datasets: [
          {
            label: "",
            data: data,
            borderColor: "#8ADD21",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: { display: false },
          y: {
            display: false,
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

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
    };

    new Chart(document.getElementById("token-chart"), config);
  }, []);

  return (
    <>
      <Navbar />
      <BodyWrapper>
        <Box
          w="full"
          overflow="hidden"
          minH="100vh"
          mt={{ base: "5.5rem", lg: "unset" }}
        >
          <Grid
            w="full"
            h="full"
            gridTemplateColumns={{ lg: "20% 80%" }}
            mt="3rem"
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
                gridTemplateColumns={{
                  lg: "repeat(3, 1fr)",
                  base: "repeat(1, 1fr)",
                }}
                mb="1rem"
                gap={"1rem"}
                px={{ lg: "unset", base: "1rem" }}
              >
                <GridItem bg="defi.dark.second" p="1rem" borderRadius={"10px"}>
                  <Flex color="defi.light.second" direction={"column"}>
                    <Text textTransform={"uppercase"}>Exchange</Text>

                    <Flex mt="1rem" alignItems={"center"}>
                      <Flex alignItems={"center"}>
                        <Text mb="0.3rem">
                          <sub>$</sub>
                        </Text>
                        <Input
                          placeholder="0.0"
                          color="#fff"
                          w="full"
                          h="full"
                          borderRadius={"unset"}
                          outline="unset"
                          border="unset"
                          boxShadow={"unset"}
                          _focus={{
                            border: "none",
                            boxShadow: "unset",
                          }}
                        />
                      </Flex>
                      <Box>
                        <AiOutlineSwap size={20} color="white" />
                      </Box>
                      <Flex alignItems={"center"}>
                        <Input
                          placeholder="0.0"
                          color="#fff"
                          w="full"
                          h="full"
                          borderRadius={"unset"}
                          outline="unset"
                          border="unset"
                          boxShadow={"unset"}
                          _focus={{
                            border: "none",
                            boxShadow: "unset",
                          }}
                        />
                        <Box>
                          <ChakraSelect
                            w="80px"
                            fontSize={"1rem"}
                            onChange={(e) => setSelectedToken(e.target.value)}
                            borderRadius={"unset"}
                            border="unset"
                          >
                            <option value="usdc">USDC</option>
                          </ChakraSelect>
                        </Box>
                      </Flex>
                    </Flex>

                    <Flex mt="1rem">
                      <Box w="full">
                        <Flex
                          w="full"
                          alignItems={"center"}
                          justifyContent="space-between"
                          fontSize={"12px"}
                        >
                          <Flex alignItems={"center"}>
                            <Text>Min: </Text>
                            <Text color={"app.accent.100"}>$50</Text>
                          </Flex>

                          <Flex alignItems={"center"}>
                            <Text>Max: </Text>
                            <Text color="app.accent.100">$10000</Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box></Box>
                    </Flex>
                  </Flex>
                </GridItem>

                <GridItem bg="defi.dark.second" borderRadius={"10px"}>
                  <Grid
                    h="full"
                    gridTemplateColumns={"25% 75%"}
                    gridTemplateRows={"15vh"}
                    gap="1rem"
                    p="0.8rem"
                    overflow={"hidden"}
                  >
                    <GridItem color="defi.light.second">
                      <Flex
                        direction={"column"}
                        justifyContent="center"
                        h="full"
                      >
                        <Text fontWeight={"bold"} fontSize="1rem">
                          TRON
                        </Text>
                        <Text>TRX</Text>
                      </Flex>
                    </GridItem>
                    <GridItem pr="1rem">
                      <canvas id="token-chart"></canvas>
                    </GridItem>
                  </Grid>
                </GridItem>

                {/*       <GridItem
                  bg="defi.dark.second"
                  p="1rem"
                  borderRadius={"10px"}
                ></GridItem> */}
              </Grid>

              <Grid
                paddingBottom={"2rem"}
                w="full"
                bg="defi.dark.second"
                borderRadius={"10px"}
                px="10px"
              >
                <TableContainer>
                  <Table size={"md"}>
                    <Thead border={"unset"}>
                      <Tr textTransform={"capitalize"} fontWeight="medium">
                        <Th>name</Th>
                        <Th isNumeric>price </Th>
                        <Th isNumeric>24% </Th>
                        <Th isNumeric>marketcap </Th>
                        <Th isNumeric>circulating </Th>
                      </Tr>
                    </Thead>
                    <Tbody color="defi.light.second">
                      {marketDatas &&
                        marketDatas.map(
                          (
                            {
                              name,
                              current_price,
                              price_change_percentage_24h,
                              market_cap,
                              circulating_supply,
                              total_supply,
                            },
                            key
                          ) => (
                            <Tr {...{ key }} border="unset">
                              <Td>{name}</Td>
                              <Td isNumeric>${current_price}</Td>
                              <Td isNumeric>{price_change_percentage_24h}</Td>
                              <Td isNumeric>${market_cap}</Td>
                              <Td isNumeric color="app.accent.100">
                                {circulating_supply}
                              </Td>
                            </Tr>
                          )
                        )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Grid>
            </GridItem>
          </Grid>
        </Box>
      </BodyWrapper>
    </>
  );
}

export default Analytics;
