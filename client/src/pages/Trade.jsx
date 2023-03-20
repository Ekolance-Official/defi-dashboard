import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Buy from "../components/exchange/Buy";
import Exchange from "../components/exchange/Exchange";
import Sell from "../components/exchange/Sell";
import Navbar from "../components/Nav/Navbar";
import BodyWrapper from "../utils/BodyWrapper";

function Trade() {
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
          px="10px"
        >
          <Flex mt="20px" bg="defi.dark.second" px="10px" borderRadius={"10px"}>
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
        </Box>
      </BodyWrapper>
    </>
  );
}

export default Trade;
