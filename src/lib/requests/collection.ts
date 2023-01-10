import { getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery, getCertainCollectionDailySingleNumberQuery, getCertainCollectionMarketplacesComparisonDailyAverageQuery, getCertainCollectionMarketplacesComparisonQuery, getCertainCollectionNFTSellingQuery, getCertainCollectionTotalSingleNumberQuery } from "lib/queries/collection";
import { CertainCollectioncurrentValueAndChangeRatherThanYesterday, CertainCollectionDailySingleNumber, CertainCollectionMarketplacesComparison, CertainCollectionMarketplacesComparisonDailyAverage, CertainCollectionNFTSelling, CertainCollectionTotalSingleNumber, CollectionName } from "lib/types/types/collection";
import { flipsideQueryExecuter, getSimpleArrayData, getSimpleInfo } from "./utils";


// 1
export const getCertainCollectionDailySingleNumber = () =>
    getSimpleInfo<CertainCollectionDailySingleNumber>(
        "0838d70c-5b07-44eb-96b3-7367a70c1ecf",
        "Daily Sales Volume(in USD),Daily NFT Price(in USD),Daily Sales Count,Daily Unique Buyers,Daily Unique Sellers"
    )
export const getCertainCollectionDailySingleNumberApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionDailySingleNumber[]>(getCertainCollectionDailySingleNumberQuery(collectionName));

// 2
export const getCertainCollectionTotalSingleNumber = () =>
    getSimpleInfo<CertainCollectionTotalSingleNumber>(
        "c1e4effb-d333-434d-82f2-9446e699f3a5",
        "Total Sales Volume(in USD),Total Unique Buyers,Total Unique Sellers,Total Sales Count"
    )

export const getCertainCollectionTotalSingleNumberNumberApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionTotalSingleNumber[]>(getCertainCollectionTotalSingleNumberQuery(collectionName));


// 3
export const getCertainCollectioncurrentValueAndChangeRatherThanYesterday = () =>
    getSimpleInfo<CertainCollectioncurrentValueAndChangeRatherThanYesterday>(
        "07e1d1cc-ef34-4623-9cf6-423f72fddab9",
        "24h Sales Count,24h Sales Volume (in USD),24h Unique Buyers,24h Unique Sellers"
    )

export const getCertainCollectioncurrentValueAndChangeRatherThanYesterdayApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectioncurrentValueAndChangeRatherThanYesterday[]>(getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery(collectionName));


// 4
export const getCertainCollectionNFTSelling = () =>
    getSimpleArrayData<CertainCollectionNFTSelling, CertainCollectionNFTSelling>(
        "d6ca14ae-b28a-49e4-ac26-3bca41ff6850",
        "1. Weekly number of NFTs sold,1. Cumulative number of NFTs sold,3. Weekly volume(in USD) of NFTs sold,2. Weekly number of NFT buyers Vs.sellers,3. Cumulative volume(in USD) of NFTs sold,4. Weekly average NFT price(in USD)"
    )

export const getCertainCollectionNFTSellingApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionNFTSelling[]>(getCertainCollectionNFTSellingQuery(collectionName));



// 5
export const getCertainCollectionMarketplacesComparison = () =>
    getSimpleArrayData<CertainCollectionMarketplacesComparison, CertainCollectionMarketplacesComparison>(
        "ce21943c-8bb0-4967-ad45-39a542c65ed4",
        "2. Marketplaces share in volume of sale,1. Marketplaces share in number of sale"
    )

export const getCertainCollectionMarketplacesComparisonApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionMarketplacesComparison[]>(getCertainCollectionMarketplacesComparisonQuery(collectionName));

// 6
export const getCertainCollectionMarketplacesComparisonDailyAverage = () =>
    getSimpleArrayData<CertainCollectionMarketplacesComparisonDailyAverage, CertainCollectionMarketplacesComparisonDailyAverage>(
        "dc8743e6-2a4b-45b1-aaf9-283b0b48926a",
        "1. Daily average number of sales on each marketplace,2. Daily average volume of sales on each marketplace,3. Daily average unique buyers on each marketplace,4. Daily average unique sellers on each marketplace,5. Daily average NFT price on each marketplace"
    )

export const getCertainCollectionMarketplacesComparisonDailyAverageApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionMarketplacesComparisonDailyAverage[]>(getCertainCollectionMarketplacesComparisonDailyAverageQuery(collectionName));

export const getCollectionNames = () =>
    getSimpleArrayData<CollectionName, CollectionName>(
        "4bb6fb1e-9ea6-40ed-85ec-e79a50e5ee8f",
        "Collection Names"
    )