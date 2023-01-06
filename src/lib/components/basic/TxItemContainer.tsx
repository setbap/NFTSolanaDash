import { Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TxItemContainer = ({ children }: { children: ReactNode }) => {
  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Stack
      spacing={["4", "6"]}
      direction={"column"}
      p={["5", "8"]}
      borderWidth="2px"
      borderColor="green.200"
      borderRadius={"2xl"}
      color={textColor}
      bgColor={bgCard}
      boxShadow={"base"}
      alignItems="center"
    >
      {children}
    </Stack>
  );
};
