import { Box, GridItem, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import HeaderSection from "lib/components/basic/HeaderSection";
import TextBox from "lib/components/charts/TextBox";
import Image from "next/image";
const About = () => {
  return (
    <Box px={6} maxW="container.xl" mx={"auto"}>
      <GridItem
        mt={"6"}
        colSpan={3}
        height={"320px"}
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg)",
          backgroundPosition: "25% center",
          backgroundSize: "cover",
        }}
        width="100%"
        borderRadius={"lg"}
        position="relative"
      >
        <Box
          position={"absolute"}
          bottom="70px"
          zIndex={"1"}
          right={"20px"}
          px="8px"
        >
          <Image
            width={75}
            height={75}
            src="/og_big.png"
            alt="Solana og Image big size"
          />
        </Box>
        <Box position={"absolute"} bottom="8px" width={"100%"} px="8px">
          <HeaderSection title={"elSina"}>
            {`
  __[Page Source | elSina(SETBAP)](https://github.com/setbap/MegaSolanaDash)__
`}
          </HeaderSection>
        </Box>
      </GridItem>
      <SimpleGrid
        my={"6"}
        columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <TextBox hasPattern spanSize={1}>
          {`
__Twitter__
          
##### [@elSinaCrypto](https://twitter.com/elsinaCrypto)
`}
        </TextBox>
        <TextBox hasPattern spanSize={1}>
          {`
__Discord__
          
##### @elsina#6747
`}
        </TextBox>
        <TextBox hasPattern spanSize={1}>
          {`
__Github__
          
 ##### [ @SETBAP](https://github.com/setbap)
`}
        </TextBox>
      </SimpleGrid>
      <HeaderSection title={"About"}>
        {`
This dashboard is made with love by members of the Solana community, in partnership with MetricsDao and Flipside Crypto. We hope it serves as a valuable window into high-level metrics that display the vitality and growth of the Solana Blockchain.

`}
      </HeaderSection>
      <Box mb={"5"} />
      <HeaderSection title={"Methodology"}>
        {`

-   Data is drawn from a combination of Flipside Crypto’s Solana tables and existing APIs.
    
-   For charts where data comes from Flipside’s data, a link to the underlying query is provided in the Settings gear wheel at the top right of each visualization.
    

Last Updated: __${new Date().toLocaleString("en", { dateStyle: "full" })}__
`}
      </HeaderSection>
      <Box pb={"6"} />
    </Box>
  );
};

export default About;
