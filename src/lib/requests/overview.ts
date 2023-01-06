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
import { getSimpleArrayData, getSimpleInfo } from "./utils";


export const getNFT24HChange = () =>
  getSimpleInfo<NFT24HChange>(
    "988c6716-a03c-4fa7-99b6-a76f75857fb4",
    "24h Sales Count, 24h Sales Volume (in USD), 24h Unique Buyers, 24h Unique Sellers"
  );


export const getNFTTotalInfo = () =>
  getSimpleInfo<NFTTotalInfo>(
    "6f16b7b2-6b30-49ca-a204-09c7e4244e3f",
    "Total Sales Volume (in USD),Total Unique Buyers,Total Unique Sellers,Total Sales Count"
  );


export const getNFTTotalDailyInfo = () =>
  getSimpleInfo<NFTTotalDailyInfo>(
    "3cb73b17-3524-43bf-8bbc-e6cd32e33cbf",
    "Daily Sales Volume (in USD),Daily NFT Price (in USD),Daily Sales Count,Daily Unique Buyers,Daily Unique Sellers"
  );


export const getNFTSelling = () =>
  getSimpleArrayData<NFTSelling, NFTSelling>(
    "e397d8ff-c1bb-425d-b860-d35c31687027",
    "Weekly volume (in USD) of NFTs sold,Cumulative volume (in USD) of NFTs sold,Cumulative number of NFTs sold,Weekly average NFT price (in USD),Weekly number of NFT buyers Vsellers,Weekly number of NFTs sold",
    "Day"
  );


export const getNFTMarketplaceComparison = () =>
  getSimpleArrayData<NFTMarketplaceComparison, NFTMarketplaceComparison>(
    "bc35bc50-7c23-4594-874c-24659f50d010",
    "Marketplaces share in volume of sale,Marketplaces share in number of sale"
  );


export const getNFTCollectionsTransactions = () =>
  getSimpleArrayData<NFTCollectionsTransactions, NFTCollectionsTransactions>(
    "f28af218-3fb2-4f7b-b275-aab0b685e587",
    "Top 10 NFT collections based on sold count"
  );


export const getNFTCollectionsVolume = () =>
  getSimpleArrayData<NFTCollectionsVolume, NFTCollectionsVolume>(
    "cc128d51-7af4-40b9-be5b-5292dbaf6c77",
    "Top 10 NFT collections based on volume"
  );

export const getNFTCollectionsUniqueBuyers = () =>
  getSimpleArrayData<NFTCollectionsUniqueBuyers, NFTCollectionsUniqueBuyers>(
    "b4becadb-65ae-4e2d-a51f-713129f48520",
    "Top 10 NFT collections based on unique buyers"
  );
