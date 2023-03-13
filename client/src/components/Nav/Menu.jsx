import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import { AiOutlineMenu, AiFillPieChart, AiFillWallet } from "react-icons/ai";
import { IoAnalytics, CgCommunity } from "react-icons/all";
import React from "react";
import { InternalLink } from "../../utils/Links";

function Menu() {
  return (
    <List w={{ lg: "full" }}>
      <ListItem>
        <InternalLink to="/#home">
          <Flex
            p="15px"
            alignItems={"center"}
            bg={"defi.light.second"}
            borderRadius="10px"
            mb="10px"
          >
            <AiOutlineMenu color="#202223" size={40} />
            <Text
              ml="10px"
              color="#202223"
              fontSize={{ lg: "30px" }}
              fontWeight={{ lg: "bold" }}
            >
              Overview
            </Text>
          </Flex>
        </InternalLink>
      </ListItem>
      <ListItem>
        <InternalLink to="/#trade">
          <Flex p="15px" alignItems={"center"} mb="10px">
            <AiFillPieChart color="#BFC2C4" size={40} />
            <Text
              ml="10px"
              color="defi.light.second"
              fontSize={{ lg: "30px" }}
              fontWeight={{ lg: "bold" }}
            >
              Trade
            </Text>
          </Flex>
        </InternalLink>
      </ListItem>
      <ListItem>
        <InternalLink to="/#wallet">
          <Flex p="15px" alignItems={"center"} mb="10px">
            <AiFillWallet color="#BFC2C4" size={40} />
            <Text
              ml="10px"
              color="defi.light.second"
              fontSize={{ lg: "30px" }}
              fontWeight={{ lg: "bold" }}
            >
              Wallet
            </Text>
          </Flex>
        </InternalLink>
      </ListItem>
      <ListItem>
        <InternalLink to="/#analytics">
          <Flex p="15px" alignItems={"center"} mb="10px">
            <IoAnalytics color="#BFC2C4" size={40} />
            <Text
              ml="10px"
              color="defi.light.second"
              fontSize={{ lg: "30px" }}
              fontWeight={{ lg: "bold" }}
            >
              Analytics
            </Text>
          </Flex>
        </InternalLink>
      </ListItem>
      <ListItem>
        <InternalLink to="/#community">
          <Flex p="15px" alignItems={"center"} mb="10px">
            <CgCommunity color="#BFC2C4" size={40} />
            <Text
              ml="10px"
              color="defi.light.second"
              fontSize={{ lg: "30px" }}
              fontWeight={{ lg: "bold" }}
            >
              Community
            </Text>
          </Flex>
        </InternalLink>
      </ListItem>
    </List>
  );
}

export default Menu;
