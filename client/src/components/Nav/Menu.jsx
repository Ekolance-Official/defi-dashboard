import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import { AiOutlineMenu, AiFillPieChart, AiFillWallet } from "react-icons/ai";
import {
  AiOutlineWallet,
  CgCommunity,
  RiCommunityLine,
  BiLogOutCircle,
} from "react-icons/all";
import React from "react";
import { ExternalLink, InternalLink } from "../../utils/Links";

function Menu() {
  return (
    <Flex direction={"column"} h="full" justifyContent={"space-between"}>
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
              <AiOutlineMenu color="#202223" size={20} />
              <Text
                ml="10px"
                color="#202223"
                fontSize={{ lg: "20px" }}
                fontWeight={{ lg: "bold" }}
              >
                Dashboard
              </Text>
            </Flex>
          </InternalLink>
        </ListItem>
        <ListItem>
          <InternalLink to="/trade">
            <Flex p="10px" alignItems={"center"} mb="10px">
              <AiFillPieChart color="#BFC2C4" size={20} />
              <Text
                ml="10px"
                color="defi.light.second"
                fontSize={{ lg: "20px" }}
                fontWeight={{ lg: "bold" }}
              >
                Trade
              </Text>
            </Flex>
          </InternalLink>
        </ListItem>
        <ListItem>
          <InternalLink to="/">
            <Flex p="15px" alignItems={"center"} mb="10px">
              <AiOutlineWallet color="#BFC2C4" size={20} />
              <Text
                ml="10px"
                color="defi.light.second"
                fontSize={{ lg: "20px" }}
                fontWeight={{ lg: "bold" }}
              >
                Wallet
              </Text>
            </Flex>
          </InternalLink>
        </ListItem>
        <ListItem>
          <InternalLink to="/analytics">
            <Flex p="15px" alignItems={"center"} mb="10px">
              <AiFillWallet color="#BFC2C4" size={20} />
              <Text
                ml="10px"
                color="defi.light.second"
                fontSize={{ lg: "20px" }}
                fontWeight={{ lg: "bold" }}
              >
                Analytics
              </Text>
            </Flex>
          </InternalLink>
        </ListItem>
        <ListItem>
          <InternalLink to="/">
            <Flex p="10px" alignItems={"center"} mb="10px">
              <RiCommunityLine color="#BFC2C4" size={20} />
              <Text
                ml="10px"
                color="defi.light.second"
                fontSize={{ lg: "20px" }}
                fontWeight={{ lg: "bold" }}
              >
                Community
              </Text>
            </Flex>
          </InternalLink>
        </ListItem>
        <ListItem>
          <InternalLink to="/">
            <Flex p="10px" alignItems={"center"} mb="10px">
              <CgCommunity color="#BFC2C4" size={20} />
              <Text
                ml="10px"
                color="defi.light.second"
                fontSize={{ lg: "20px" }}
                fontWeight={{ lg: "bold" }}
              >
                Message
              </Text>
            </Flex>
          </InternalLink>
        </ListItem>
      </List>
      <List mb="1rem">
        <ListItem>
          <ExternalLink href="https://ekolance.io">
            <Flex p="10px" alignItems={"center"} mb="10px">
              <BiLogOutCircle color="#BFC2C4" size={20} />
              <Text
                ml="10px"
                color="defi.light.second"
                fontSize={{ lg: "20px" }}
                fontWeight={{ lg: "bold" }}
              >
                Log Out
              </Text>
            </Flex>
          </ExternalLink>
        </ListItem>
      </List>
    </Flex>
  );
}

export default Menu;
