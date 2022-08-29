import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";
const SectionContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Container
      width="100%"
      maxW="1440px"
      mx="auto"
      px={{ xs: "0px", md: "50px", lg: "150px" }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default SectionContainer;
