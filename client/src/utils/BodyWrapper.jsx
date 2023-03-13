import React from "react";
import { Box } from "@chakra-ui/react";

function BodyWrapper({ bgColor, children }) {
  return (
    <Box
      bg={bgColor}
      width={{ base: "auto", lg: "1320px" }}
      maxW={"1320px"}
      mx="auto"
      pb="60px"
      position={"relative"}
    >
      {children}
    </Box>
  );
}

export default BodyWrapper;
