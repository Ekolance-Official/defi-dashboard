import {
  Button,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { VscMenu } from "react-icons/vsc";
import { InternalLink, NavLink } from "../../utils/Links";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    {
      name: "Trade",
      path: "/trade",
    },
    {
      name: "Analytics",
      path: "/analytics",
      // id: "team",
    },
  ];

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
      left={{ lg: "50%", base: "unset" }}
      pb="16px"
      pt={{ lg: "10px", base: "none" }}
      position={{ base: "fixed", lg: "unset" }}
      top={{ lg: "unset", base: "0px" }}
      h={{ base: "5rem", lg: "unset" }}
    >
      <Grid
        display={{ base: "flex", lg: "grid" }}
        px={{ base: "1rem", lg: "unset" }}
        w="full"
        gridTemplateColumns={{ base: "unset", lg: "20% 80%" }}
        bg={{ base: "app.dark.100", lg: "unset" }}
        h="full"
        alignItems={"center"}
      >
        <GridItem pl={{ lg: "20px", base: "unset" }}>
          <InternalLink to="/">
            <Text
              color="defi.light.second"
              fontSize={{ lg: "35px" }}
              fontWeight="bold"
            >
              DApp
            </Text>
          </InternalLink>
        </GridItem>
        <Spacer display={{ lg: "none" }} />
        <GridItem pr={{ lg: "20px", base: "unset" }}>
          <Flex w="full" justifyContent={"flex-end"} alignItems="center">
            <Button
              display={{
                base: "none",
                lg: "inline-block",
              }}
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

            <IconButton
              display={{ base: "block", lg: "none" }}
              color="app.accent.100"
              align="center"
              icon={<VscMenu size={20} />}
              variant={"ghost"}
              onClick={onOpen}
              _hover={{ bg: "none" }}
              _focus={{ outline: "none", bg: "none" }}
              _active={{ outline: "none", bg: "none" }}
              aria-label={""}
            />

            <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
              <DrawerOverlay />
              <DrawerContent bg="app.dark.100" color="app.light">
                <DrawerCloseButton />
                <DrawerBody>
                  <Flex
                    direction="column"
                    w="full"
                    justify="center"
                    align="center"
                    textAlign={"center"}
                  >
                    <Text
                      color="defi.light.second"
                      fontSize={{ lg: "35px" }}
                      fontWeight="bold"
                    >
                      DApp
                    </Text>

                    <Button
                      mt="20px"
                      _hover={"unset"}
                      color="defi.light.second"
                      borderWidth={"2px"}
                      borderColor="defi.light.second"
                    >
                      <Flex alignItems={"center"}>
                        <Text fontSize={{ lg: "18px" }}>Connect</Text>
                      </Flex>
                    </Button>

                    {navLinks.map((link, index) => (
                      <NavLink key={index} to={link.path} role="group">
                        <Button
                          w="75%"
                          variant="ghost"
                          transition="all 0.2s ease-in-out"
                          onClick={() => {
                            document.getElementById(link.id).scrollIntoView({
                              block: "center",
                              behavior: "smooth",
                            });
                            onClose();
                          }}
                          fontSize="xl"
                          textTransform={"uppercase"}
                          _groupHover={{
                            color: "app.accent.100",
                            fontWeight: "600",
                            bg: "whiteAlpha.100",
                          }}
                        >
                          {link.name}
                        </Button>
                      </NavLink>
                    ))}
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Navbar;
