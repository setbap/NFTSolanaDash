import Collection from "lib/pages/collection";
import { getCertainCollectioncurrentValueAndChangeRatherThanYesterday, getCertainCollectionDailySingleNumber, getCertainCollectionMarketplacesComparison, getCertainCollectionMarketplacesComparisonDailyAverage, getCertainCollectionNFTSelling, getCertainCollectionTotalSingleNumber, getCollectionNames } from "lib/requests/collection";



export async function getStaticProps() {
    const [
        certainCollectionDailySingleNumber,
        certainCollectionTotalSingleNumber,
        certainCollectioncurrentValueAndChangeRatherThanYesterday,
        certainCollectionNFTSelling,
        certainCollectionMarketplacesComparison,
        certainCollectionMarketplacesComparisonDailyAverage,
        collectionNames
    ] = await Promise.all([
        getCertainCollectionDailySingleNumber(),
        getCertainCollectionTotalSingleNumber(),
        getCertainCollectioncurrentValueAndChangeRatherThanYesterday(),
        getCertainCollectionNFTSelling(),
        getCertainCollectionMarketplacesComparison(),
        getCertainCollectionMarketplacesComparisonDailyAverage(), getCollectionNames()
    ]);

    return {
        props: {
            certainCollectionDailySingleNumber,
            certainCollectionTotalSingleNumber,
            certainCollectioncurrentValueAndChangeRatherThanYesterday,
            certainCollectionNFTSelling,
            certainCollectionMarketplacesComparison,
            certainCollectionMarketplacesComparisonDailyAverage,
            collectionNames,
        },
        revalidate: 10 * 60,
    };
}

export type CollectionProps = Pick<
    Awaited<ReturnType<typeof getStaticProps>>,
    "props"
>["props"];

export default Collection;
