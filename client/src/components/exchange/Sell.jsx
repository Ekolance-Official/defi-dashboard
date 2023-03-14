import React from "react";
import { Box, Flex, Text, Button, Input, Select } from "@chakra-ui/react";

function Sell() {
  return (
    <Flex w="full" flexDirection={"column"}>
      <Box w="full">
        <Text color="defi.light.second">Coin</Text>
        <Flex h="50px" bg="red" w="full">
          Box
        </Flex>
      </Box>

      <Box w="full" mt="20px">
        <Text color="defi.light.second">Amount</Text>
        <Flex
          h="50px"
          w="full"
          alignItems={"center"}
          justifyContent="space-between"
          bg="defi.dark.second"
          py="2px"
        >
          <Input color="#fff" w="100px" h="full" outline="unset" />
          <Box>
            <Select placeholder="Select option">
              <option value="option1">USD</option>
              <option value="option2">USDC</option>
            </Select>
          </Box>
        </Flex>
      </Box>

      <Box w="full" mt="20px">
        <Flex w="full" justifyContent={"space-between"}>
          <Text color="defi.light.second">Total amount</Text>
          <Text color="defi.light.first">$1,340</Text>
        </Flex>
        <Button
          bg="defi.light.second"
          fontWeight={"bold"}
          w="full"
          py="25px"
          mt="10px"
          borderRadius={"10px"}
        >
          Sell Ethereum
        </Button>
      </Box>
    </Flex>
  );
}

export default Sell;
