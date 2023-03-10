import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsClock, BsHash } from "react-icons/bs";
import moment from "moment";
import { FaEthereum } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ReactNode } from "react";

export interface Prop {
  data: {
    tx_hash: string;
    block_timestamp: string;
    nonce: number;
    origin_function_signature: string;
  };
}

export const TxBox = ({
  data: { nonce, origin_function_signature, block_timestamp, tx_hash },
}: Prop) => {
  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const etherScanLink = `https://optimistic.etherscan.io/tx/${tx_hash}`;
  return (
    <Stack
      spacing={["2", "6"]}
      direction={"column"}
      p={["3", "8"]}
      borderWidth="2px"
      borderColor="green.200"
      borderRadius={"2xl"}
      color={textColor}
      bgColor={bgCard}
      boxShadow={"base"}
    >
      <Link href={etherScanLink} target="_blank" color={"blue.300"}>
        <Box
          __css={{ "&:before": { context: "as" } }}
          fontSize={["md", "xl", "2xl"]}
          noOfLines={1}
          as="p"
        >
          {tx_hash}
        </Box>
      </Link>
      <Stack
        justifyContent={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <TxItem
          Icon={<BsClock color="#f5a334" fontSize={"1.25rem"} />}
          data={moment(block_timestamp).format("YYYY MMM DD  HH:MM")}
        />
        <TxItem Icon={<>Nonce:</>} data={nonce.toString()} />
        <TxItem
          Icon={<>Function Signature:</>}
          data={origin_function_signature.toString()}
        />
      </Stack>
    </Stack>
  );
};

const TxItem = ({ Icon, data }: { Icon: ReactNode; data: string }) => {
  return (
    <Stack
      flex={1}
      alignItems={"center"}
      justifyContent={{ md: "start", lg: "center" }}
      direction={"row"}
    >
      <Box color="gray">{Icon}</Box>
      <Text fontSize={["large", "larger"]}>{data}</Text>
    </Stack>
  );
};
