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
import React from "react";
import Menu from "../components/Nav/Menu";
import Navbar from "../components/Nav/Navbar";
import { useGetMarketQuery } from "../store/slices/marketSlice";
import BodyWrapper from "../utils/BodyWrapper";

function Analytics() {
  const { data } = useGetMarketQuery();
  const marketDatas = data && data.slice(0, 30);

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
          <Grid w="full" h="full" gridTemplateColumns={{ lg: "20% 80%" }}>
            <GridItem
              pl={{ lg: "20px" }}
              h="full"
              display={{ base: "none", lg: "inline-grid" }}
            >
              <Menu />
            </GridItem>
            <GridItem px={{ lg: "30px" }}>
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
                      <Tr textTransform={"capitalize"}>
                        <Th>name</Th>
                        <Th isNumeric>price </Th>
                        <Th isNumeric>24% </Th>
                        <Th isNumeric>marketcap </Th>
                        <Th isNumeric>circulating </Th>
                        <Th isNumeric>supply</Th>
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
                              <Td isNumeric>{circulating_supply}</Td>
                              <Td isNumeric>{total_supply}</Td>
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
