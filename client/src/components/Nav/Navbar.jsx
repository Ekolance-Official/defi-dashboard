import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { AiFillWallet } from "react-icons/all";

function Navbar() {
  return (
    <Flex
      alignItems={"center"}
      mx="auto"
      zIndex={2}
      width={{
        base: "100%",
        md: "100%",
        lg: "1024px",
        xll: "1323px",
        r: "1280px",
      }}
      minW="20rem"
      left="50%"
      pb="16px"
      pt="10px"
      position={{ base: "fixed", lg: "unset" }}
      top={{ lg: "unset", base: "0px" }}
    >
      <Grid w="full" gridTemplateColumns={{ lg: "20% 80%" }}>
        <GridItem pl={"20px"}>
          <Text
            color="defi.light.second"
            fontSize={{ lg: "35px" }}
            fontWeight="bold"
          >
            DApp
          </Text>
        </GridItem>
        <GridItem pr="20px">
          <Flex w="full" justifyContent={"flex-end"} alignItems="center">
            <Button
              bg="unset"
              _hover={"unset"}
              color="defi.light.second"
              borderWidth={"2px"}
              borderColor="defi.light.second"
            >
              <Flex alignItems={"center"}>
                <Text fontSize={{ lg: "18px" }}>Connect</Text>
              </Flex>
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Navbar;
