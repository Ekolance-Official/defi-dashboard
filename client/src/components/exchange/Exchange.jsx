import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Select as ChakraSelect,
  Text,
} from "@chakra-ui/react";
import Select from "react-select";
import { useGetTokensQuery } from "../../store/slices/api";
import { tokens } from "../../pages/LandingPage";
import { WiRaindrop } from "react-icons/wi";

function Exchange() {
  const [selectedToken, setSelectedToken] = useState(null);
  const [to_token, setToToken] = useState(null);
  const { data } = useGetTokensQuery();
  const [amountTo, setAmountTo] = useState(0);

  return (
    <Flex w="full" direction={"column"}>
      <Box w="full">
        <Text color="defi.light.second">Amount</Text>
        <Flex h="50px" w="full">
          <Grid
            alignItems={"center"}
            h="full"
            gridTemplateColumns={"50% 50%"}
            w="full"
          >
            <GridItem mr="1rem">
              <Input
                color="#fff"
                w="80px"
                h="40px"
                borderRadius={"unset"}
                outline="unset"
                onChange={(e) => setAmoun(e.target.value)}
                borderColor="#fff"
                boxShadow={"unset"}
              />
            </GridItem>
            <GridItem>
              <Select
                className="dropdown-sect"
                options={tokens}
                onChange={(opt) => setSelectedToken(opt)}
              />
            </GridItem>
          </Grid>
        </Flex>
      </Box>
      <Box w="full" mt="20px">
        <Text color="defi.light.second">Amount</Text>
        <Flex h="50px" w="full">
          <Grid
            alignItems={"center"}
            h="full"
            gridTemplateColumns={"50% 50%"}
            w="full"
          >
            <GridItem mr="1rem">
              <Text color="white" fontSize={"18px"}>
                ETH 10,000
              </Text>
            </GridItem>
            <GridItem>
              <Select
                className="dropdown-sect"
                options={tokens}
                onChange={(opt) => setSelectedToken(opt)}
              />
            </GridItem>
          </Grid>
        </Flex>
      </Box>

      <Box w="full" mt="20px">
        <Flex w="full" justifyContent={"space-between"}>
          <Text color="defi.light.second">Your balance</Text>
          <Text color="defi.light.first">VGX 1,340</Text>
        </Flex>
        <Button
          bg="defi.light.second"
          fontWeight={"bold"}
          w="full"
          py="25px"
          mt="10px"
          borderRadius={"10px"}
        >
          Exchange
        </Button>
      </Box>
    </Flex>
  );
}

export default Exchange;
