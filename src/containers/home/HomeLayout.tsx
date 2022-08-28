import React from "react";
import SectionContainer from "@/src/components/common/SectionContainer";
import {
  Flex,
  Box,
  Link,
  Img,
  Button,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "@/src/components/navbar/Navbar";
const HomeLayout: React.FC = () => {
  const [isLarger] = useMediaQuery("(min-width: 480px)");
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Flex
          justifyContent="space-between"
          flexDir={{ xs: "column-reverse", sm: "row" }}
        >
          <Flex
            flexDir="column"
            alignItems={{ xs: "center", sm: "flex-start" }}
            px={{ xs: "20px", sm: "0px" }}
          >
            <Heading
              pt={{ xs: "50px", sm: "150px" }}
              fontWeight="700"
              fontSize={{ xs: "35px", sm: "80px" }}
            >
              Make {isLarger ? <br /> : null} remote work
            </Heading>

            <Text
              py={{ xs: "10px", sm: "40px" }}
              fontWeight="500"
              color="bg.gray"
            >
              Get your team is sync , no matter your location{" "}
              {isLarger ? <br /> : null} streamline process , creat team rituals
              , and {isLarger ? <br /> : null} watch productivity soar.
            </Text>

            <Button
              bg="bg.black"
              color="bg.white"
              fontSize="15px"
              w="40%"
              borderRadius="10px"
              py="25px"
            >
              Learn More
            </Button>
            <Flex
              p={{ xs: "40px 0px", sm: "80px 0 0 0" }}
              gap={{ xs: "5", sm: "8" }}
              alignItems="center"
            >
              <Img src="/svg/client-databiz.svg" alt="databiz" h="15px" />
              <Img src="/svg/client-audiophile.svg" alt="audiophile" h="30px" />
              <Img src="/svg/client-meet.svg" alt="meet" h="15px" />
              <Img src="/svg/client-maker.svg" alt="maker" h="15px" />
            </Flex>
          </Flex>
          <Flex pt="50px" display={{ xs: "none", sm: "flex" }}>
            <Img
              src="/png/image-hero-desktop.png"
              alt="hero-desktop"
              h="600px"
            />
          </Flex>
          <Flex pt="50px" display={{ xs: "flex", sm: "none" }}>
            <Img
              src="/png/image-hero-mobile.png"
              alt="hero-desktop"
              h="350px"
            />
          </Flex>
        </Flex>
      </SectionContainer>
    </>
  );
};

export default HomeLayout;
