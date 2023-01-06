import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { NFTProps } from "pages";
import DonutChart from "lib/components/charts/DonutChart";
import BarGraph from "lib/components/charts/BarGraph";
import HeaderSection from "lib/components/basic/HeaderSection";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

const NFT = ({
  nFTTotalInfo,
  nFTTotalDailyInfo,
  nFTSelling,
  nFTMarketplaceComparison,
  nFTCollectionsTransactions,
  nFTCollectionsVolume,
  nFTCollectionsUniqueBuyers,
  nFT24HChange,
}: NFTProps): JSX.Element => {
  const nFTTotalInfoName = nFTTotalInfo.title.split(",");
  const nFTTotalDailyInfoName = nFTTotalDailyInfo.title.split(",");
  const nFTSellingName = nFTSelling.title.split(",");
  const nFTMarketplaceComparisonName =
    nFTMarketplaceComparison.title.split(",");
  const nFT24HChangeName = nFT24HChange.title.split(",");

  return (
    <>
      <NextSeo
        title={`Solana | Supply`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Solana  | Supply`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} pt="4" px={{ base: 3, sm: 2, md: 8 }}>
        <HeaderSection title="Solana NFT">
          {`
Solana is an open-source blockchain that is well-suited to hosting and trading Non-Fungible Tokens (NFTs). NFTs are digital tokens that represent digital assets, such as artwork, collectibles, or even real-world items like tickets or concert passes. The Solana protocol enables developers to create, transfer, and trade NFTs in a secure and trustless fashion. It also offers scalability, low transaction fees, and fast transaction times. Solana has become a popular platform for the creation, trading, and collection of digital assets and NFTs, with many high-profile projects launching on the Solana blockchain.
`}
        </HeaderSection>
        <Box pt={"4"}></Box>
        <HeaderSection title="Glance">
          {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </HeaderSection>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={nFTTotalDailyInfo.data["Daily Sales Volume (in USD)"]}
            title={nFTTotalDailyInfoName[0]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalDailyInfo.key}
          />

          <StatsCard
            stat={nFTTotalInfo.data["Total Sales Volume (in USD)"]}
            title={nFTTotalInfoName[0]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalInfo.key}
          />

          <StatsCard
            stat={nFTTotalDailyInfo.data["Daily Sales Count"]}
            title={nFTTotalDailyInfoName[2]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalDailyInfo.key}
          />

          <StatsCard
            stat={nFTTotalInfo.data["Total Sales Count"]}
            title={nFTTotalInfoName[3]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalInfo.key}
          />

          <StatsCard
            stat={nFTTotalDailyInfo.data["Daily Unique Buyers"]}
            title={nFTTotalDailyInfoName[3]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalDailyInfo.key}
          />

          <StatsCard
            stat={nFTTotalInfo.data["Total Unique Buyers"]}
            title={nFTTotalInfoName[1]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalInfo.key}
          />

          <StatsCard
            stat={nFTTotalDailyInfo.data["Daily Unique Sellers"]}
            title={nFTTotalDailyInfoName[4]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalDailyInfo.key}
          />

          <StatsCard
            stat={nFTTotalInfo.data["Total Unique Sellers"]}
            title={nFTTotalInfoName[2]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalInfo.key}
          />

          <StatsCard
            stat={nFTTotalDailyInfo.data["Daily NFT Price (in USD)"]}
            title={nFTTotalDailyInfoName[1]}
            status="inc"
            hasArrowIcon={false}
            link={nFTTotalDailyInfo.key}
          />
          <HeaderSection title="24h changes" />
          <StatsCard
            stat={nFT24HChange.data["24h Sales Count"]}
            title={nFT24HChangeName[0]}
            change={nFT24HChange.data["change (%) Sales Count"]}
            status={
              nFT24HChange.data["change (%) Sales Count"] >= 0 ? "inc" : "dec"
            }
            hasArrowIcon={true}
            link={nFT24HChange.key}
          />
          <StatsCard
            stat={nFT24HChange.data["24h Sales Volume (in USD)"]}
            title={nFT24HChangeName[1]}
            change={nFT24HChange.data["change (%) Sales Volume"]}
            status={
              nFT24HChange.data["change (%) Sales Volume"] >= 0 ? "inc" : "dec"
            }
            hasArrowIcon={true}
            link={nFT24HChange.key}
          />
          <StatsCard
            stat={nFT24HChange.data["24h Unique Buyers"]}
            title={nFT24HChangeName[2]}
            change={nFT24HChange.data["change (%) Unique Buyers"]}
            status={
              nFT24HChange.data["change (%) Unique Buyers"] >= 0 ? "inc" : "dec"
            }
            hasArrowIcon={true}
            link={nFT24HChange.key}
          />
          <StatsCard
            stat={nFT24HChange.data["24h Unique Sellers"]}
            title={nFT24HChangeName[3]}
            change={nFT24HChange.data["change (%) Unique Sellers"]}
            status={
              nFT24HChange.data["change (%) Unique Sellers"] >= 0
                ? "inc"
                : "dec"
            }
            hasArrowIcon={true}
            link={nFT24HChange.key}
          />
        </SimpleGrid>

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          pb={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="NFT selling" />

          <LineChartWithBar
            data={nFTSelling.data}
            queryLink={nFTSelling.key}
            title={nFTSellingName[5]}
            baseSpan={2}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Sales Count"}
            lineDataKey="AVG Sales Count"
            additionalLineKey={["MA7 Sales Count"]}
          />
          <ChartBox
            xAxisDataKey={"Day"}
            areaDataKey={"Cum Sales Count"}
            title={nFTSellingName[2]}
            baseSpan={1}
            customColor={colors[0]}
            queryLink={nFTSelling.key}
            data={nFTSelling.data}
          />
          <StackedAreaChart
            values={nFTSelling.data}
            queryLink={nFTSelling.key}
            modalInfo=""
            title={nFTSellingName[4]}
            baseSpan={3}
            dataKey="Day"
            oyLabel=""
            oxLabel="Action"
            labels={[
              {
                key: "Unique Buyers",
                color: colors[0],
              },
              {
                key: "Unique Sellers",
                color: colors[1],
              },
            ]}
          />
          <LineChartWithBar
            data={nFTSelling.data}
            queryLink={nFTSelling.key}
            title={nFTSellingName[0]}
            baseSpan={2}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Sales Volume"}
            lineDataKey="AVG Sales Volume"
            additionalLineKey={["MA7 Sales Volume"]}
          />
          <ChartBox
            xAxisDataKey={"Day"}
            areaDataKey={"Cum Sales Volume"}
            title={nFTSellingName[1]}
            baseSpan={1}
            customColor={colors[0]}
            queryLink={nFTSelling.key}
            data={nFTSelling.data}
          />

          <LineChartWithBar
            data={nFTSelling.data}
            queryLink={nFTSelling.key}
            title={nFTSellingName[3]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"AVG NFT Price"}
            lineDataKey="Total AVG NFT Price"
          />

          <HeaderSection title="Marketplaces Comparison" />
          <DonutChart
            queryLink={nFTMarketplaceComparison.key}
            data={nFTMarketplaceComparison.data}
            modalInfo=""
            baseSpan={1}
            title={nFTMarketplaceComparisonName[1]}
            nameKey="Marketplace"
            dataKey="Sales Count"
          />
          <DonutChart
            queryLink={nFTMarketplaceComparison.key}
            data={nFTMarketplaceComparison.data}
            modalInfo=""
            baseSpan={1}
            title={nFTMarketplaceComparisonName[0]}
            nameKey="Marketplace"
            dataKey="Sales Volume"
          />
          <HeaderSection title="NFT collections" />
          {/* 
          nFTCollectionsTransactions
nFTCollectionsVolume
nFTCollectionsUniqueBuyers
 */}
          <BarGraph
            values={nFTCollectionsTransactions.data}
            queryLink={nFTCollectionsTransactions.key}
            isNotDate
            modalInfo=""
            title={nFTCollectionsTransactions.title}
            baseSpan={1}
            dataKey="Collection Name"
            oyLabel=""
            oxLabel="Collection Name"
            hideLegend
            labels={[
              {
                key: "Sales Count",
                color: colors[2],
              },
            ]}
          />
          <BarGraph
            values={nFTCollectionsVolume.data}
            queryLink={nFTCollectionsVolume.key}
            isNotDate
            modalInfo=""
            title={nFTCollectionsVolume.title}
            baseSpan={1}
            dataKey="Collection Name"
            oyLabel=""
            oxLabel="Collection Name"
            hideLegend
            labels={[
              {
                key: "Sales Volume",
                color: colors[2],
              },
            ]}
          />
          <BarGraph
            values={nFTCollectionsUniqueBuyers.data}
            queryLink={nFTCollectionsUniqueBuyers.key}
            isNotDate
            modalInfo=""
            title={nFTCollectionsUniqueBuyers.title}
            baseSpan={1}
            dataKey="Collection Name"
            oyLabel=""
            oxLabel="Collection Name"
            hideLegend
            labels={[
              {
                key: "Unique Buyers",
                color: colors[2],
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NFT;
