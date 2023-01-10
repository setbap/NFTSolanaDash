import { getCertainCollectioncurrentValueAndChangeRatherThanYesterdayApi, getCertainCollectionDailySingleNumberApi, getCertainCollectionMarketplacesComparisonApi, getCertainCollectionMarketplacesComparisonDailyAverageApi, getCertainCollectionNFTSellingApi, getCertainCollectionTotalSingleNumberNumberApi } from "lib/requests/collection";


export default async function addressHandler(req: any, res: any) {
  const {
    query: { collectionName },
    method,
  } = req;

  switch (method) {
    case "GET":
      const collectionData = await getCollectionData(collectionName);
      res.status(200).json(collectionData);
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

}
async function getCollectionData(collectionName: string) {
  const [
    certainCollectionDailySingleNumber, certainCollectionTotalSingleNumber, certainCollectioncurrentValueAndChangeRatherThanYesterday, certainCollectionNFTSelling, certainCollectionMarketplacesComparison, certainCollectionMarketplacesComparisonDailyAverage,
  ] = await Promise.all([
    getCertainCollectionDailySingleNumberApi(collectionName),
    getCertainCollectionTotalSingleNumberNumberApi(collectionName),
    getCertainCollectioncurrentValueAndChangeRatherThanYesterdayApi(collectionName),
    getCertainCollectionNFTSellingApi(collectionName),
    getCertainCollectionMarketplacesComparisonApi(collectionName),
    getCertainCollectionMarketplacesComparisonDailyAverageApi(collectionName)
  ]);
  return ({
    certainCollectionDailySingleNumber: certainCollectionDailySingleNumber[0],
    certainCollectionTotalSingleNumber: certainCollectionTotalSingleNumber[0],
    certainCollectioncurrentValueAndChangeRatherThanYesterday: certainCollectioncurrentValueAndChangeRatherThanYesterday[0],
    certainCollectionNFTSelling,
    certainCollectionMarketplacesComparison,
    certainCollectionMarketplacesComparisonDailyAverage,
    collectionName
  });
}

export type CollectionDataApi = Awaited<ReturnType<typeof getCollectionData>>
