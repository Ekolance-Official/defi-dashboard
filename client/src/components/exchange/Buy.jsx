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
import { useGetTokensQuery } from "../../store/slices/tokenSlice";
import { tokens } from "../../pages/LandingPage";

function Buy() {
  const [selectedToken, setSelectedToken] = useState(null);
  const [to_token, setToToken] = useState(null);
  const { data } = useGetTokensQuery();
  const [amountTo, setAmountTo] = useState(0);

  return (
    <Flex w="full" direction={"column"}>
      <Box w="full">
        <Text color="defi.light.second">Coin</Text>
        <Flex h="50px" w="full">
          <Grid
            alignItems={"center"}
            gridTemplateColumns={selectedToken ? "15% 85%" : "0% 100%"}
            w="full"
          >
            <GridItem mr="1rem">
              <Image
                display={selectedToken ? "inline-block" : "none"}
                height={"20px"}
                width="20px"
                src={selectedToken && selectedToken.logoURI}
              />
            </GridItem>
            <GridItem>
              <Select
                className="dropdown-select"
                options={tokens}
                onChange={(opt) => setSelectedToken(opt)}
              />
            </GridItem>
          </Grid>
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
        >
          <Input
            color="#fff"
            w="full"
            h="full"
            borderRadius={"unset"}
            outline="unset"
            onChange={(e) => setAmoun(e.target.value)}
            border="unset"
            boxShadow={"unset"}
            _focus={{
              border: "none",
              boxShadow: "unset",
            }}
          />
          <Box>
            <ChakraSelect
              onChange={(e) => setSelectedToken(e.target.value)}
              bg=" rgb(194, 222, 209)"
              borderRadius={"unset"}
              border="unset"
            >
              <option value="usdc">USDC</option>
            </ChakraSelect>
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
          Buy
        </Button>
      </Box>
    </Flex>
  );
}

export default Buy;
