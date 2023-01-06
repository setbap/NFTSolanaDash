import NFT from "lib/pages/overview";
import {
  getNFT24HChange,
  getNFTCollectionsTransactions,
  getNFTCollectionsUniqueBuyers,
  getNFTCollectionsVolume,
  getNFTMarketplaceComparison,
  getNFTSelling,
  getNFTTotalDailyInfo,
  getNFTTotalInfo,
} from "lib/requests/overview";
import { ReturnDataType } from "lib/types/base";
import {
  NFT24HChange,
  NFTCollectionsTransactions,
  NFTCollectionsUniqueBuyers,
  NFTCollectionsVolume,
  NFTMarketplaceComparison,
  NFTSelling,
  NFTTotalDailyInfo,
  NFTTotalInfo,
} from "lib/types/types/overview";

export async function getStaticProps() {
  const [
    nFTTotalInfo,
    nFTTotalDailyInfo,
    nFTSelling,
    nFTMarketplaceComparison,
    nFTCollectionsTransactions,
    nFTCollectionsVolume,
    nFTCollectionsUniqueBuyers,
    nFT24HChange,
  ] = await Promise.all([
    getNFTTotalInfo(),
    getNFTTotalDailyInfo(),
    getNFTSelling(),
    getNFTMarketplaceComparison(),
    getNFTCollectionsTransactions(),
    getNFTCollectionsVolume(),
    getNFTCollectionsUniqueBuyers(),
    getNFT24HChange(),
  ]);

  return {
    props: {
      nFT24HChange,
      nFTTotalInfo,
      nFTTotalDailyInfo,
      nFTSelling,
      nFTMarketplaceComparison,
      nFTCollectionsTransactions,
      nFTCollectionsVolume,
      nFTCollectionsUniqueBuyers,
    },
    revalidate: 10 * 60,
  };
}

export interface NFTProps {
  nFT24HChange: ReturnDataType<NFT24HChange>;
  nFTTotalInfo: ReturnDataType<NFTTotalInfo>;
  nFTTotalDailyInfo: ReturnDataType<NFTTotalDailyInfo>;
  nFTSelling: ReturnDataType<NFTSelling[]>;
  nFTMarketplaceComparison: ReturnDataType<NFTMarketplaceComparison[]>;
  nFTCollectionsTransactions: ReturnDataType<NFTCollectionsTransactions[]>;
  nFTCollectionsVolume: ReturnDataType<NFTCollectionsVolume[]>;
  nFTCollectionsUniqueBuyers: ReturnDataType<NFTCollectionsUniqueBuyers[]>;
}

export default NFT;
