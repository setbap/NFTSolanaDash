export const getCertainCollectionDailySingleNumberQuery = (collectionName: string) => `
with price as (
select 
  date_trunc('day', hour) as date,
  avg(price) as usd_price
from ethereum.core.fact_hourly_token_prices
where 
  token_address = lower('0xD31a59c85aE9D8edEFeC411D448f90841571b89c') 
group by 1
),
info as (
SELECT 
  date_trunc('day', block_timestamp) as "Day",
  sum(sales_amount * usd_price) as "Sales Volume",
  avg(sales_amount * usd_price) as "AVG NFT Price",
  count(distinct purchaser) as "Unique Buyers",
  count(distinct seller) as "Unique Sellers",
  count(distinct tx_id) as "Sales Count"
FROM solana.core.fact_nft_sales s join price n on block_timestamp::date = date join solana.core.dim_nft_metadata m on s.mint = m.mint
where 
  "Day" >= current_date - 90 and 
  project_name = '${collectionName}' and 
  succeeded = TRUE
group by 1
),
avg_info as (
select 
  avg("Sales Volume") as "Daily Sales Volume (in USD)",
  avg("AVG NFT Price") as "Daily NFT Price (in USD)",
  avg("Sales Count") as "Daily Sales Count",
  avg("Unique Buyers") as "Daily Unique Buyers",
  avg("Unique Sellers") as "Daily Unique Sellers"
from info 
)
select *
from avg_info
`


export const getCertainCollectionTotalSingleNumberQuery = (collectionName: string) =>
    `
with price as (
select 
  date_trunc('day', hour) as date,
  avg(price) as usd_price
from ethereum.core.fact_hourly_token_prices
where 
  token_address = lower('0xD31a59c85aE9D8edEFeC411D448f90841571b89c') 
group by 1
)
SELECT 
  sum(sales_amount * usd_price) as "Total Sales Volume (in USD)",
  count(distinct purchaser) as "Total Unique Buyers",
  count(distinct seller) as "Total Unique Sellers",
  count(distinct tx_id) as "Total Sales Count"
FROM solana.core.fact_nft_sales s join price n on block_timestamp::date = date join solana.core.dim_nft_metadata m on s.mint = m.mint
where 
  project_name = '${collectionName}' and 
  succeeded = TRUE 
`
export const getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery = (collectionName: string) => `
-- only show current value and change %
with price as (
select 
  date_trunc('day', hour) as date,
  avg(price) as usd_price
from ethereum.core.fact_hourly_token_prices
where 
  token_address = lower('0xD31a59c85aE9D8edEFeC411D448f90841571b89c') 
group by 1
),
change as (
select 
  date_trunc('day', block_timestamp) as "Day",
  
  count(distinct tx_id) as "24h Sales Count",  
  lag("24h Sales Count",1) over(order by "Day") as "Previous 24h Sales Count",
  (("24h Sales Count" - "Previous 24h Sales Count") / "Previous 24h Sales Count") * 100 as "change (%) Sales Count",
  
  sum(sales_amount * usd_price) as "24h Sales Volume (in USD)", 
  lag("24h Sales Volume (in USD)",1) over(order by "Day") as "Previous 24h Sales Volume",
  (("24h Sales Volume (in USD)" - "Previous 24h Sales Volume") / "Previous 24h Sales Volume") * 100 as "change (%) Sales Volume",
  
  count(distinct purchaser) as "24h Unique Buyers", 
  lag("24h Unique Buyers",1) over(order by "Day") as "Previous 24h Unique Buyers",
  (("24h Unique Buyers" - "Previous 24h Unique Buyers") / "Previous 24h Unique Buyers") * 100 as "change (%) Unique Buyers",
  
  count(distinct seller) as "24h Unique Sellers", 
  lag("24h Unique Sellers",1) over(order by "Day") as "Previous 24h Unique Sellers",
  (("24h Unique Sellers" - "Previous 24h Unique Sellers") / "Previous 24h Unique Sellers") * 100 as "change (%) Unique Sellers"
from solana.core.fact_nft_sales s join price n on block_timestamp::date = date join solana.core.dim_nft_metadata m on s.mint = m.mint
where 
  "Day" >= current_date - 2 and "Day" < current_date and 
  project_name = '${collectionName}' and 
  succeeded = TRUE
group by 1
)
select * 
from change 
where "Day" = current_date - 1
`

// 
export const getCertainCollectionNFTSellingQuery = (collectionName: string) =>
    `
with price as (
select 
  date_trunc('day', hour) as date,
  avg(price) as usd_price
from ethereum.core.fact_hourly_token_prices
where 
  token_address = lower('0xD31a59c85aE9D8edEFeC411D448f90841571b89c') 
group by 1
),
info as (
SELECT 
  date_trunc('week', block_timestamp) as "Day",
  sum(sales_amount * usd_price) as "Sales Volume",
  avg(sales_amount * usd_price) as "AVG NFT Price",
  count(distinct purchaser) as "Unique Buyers",
  count(distinct seller) as "Unique Sellers",
  count(distinct tx_id) as "Sales Count",

  avg("Sales Volume") over (order by "Day", "Day" rows between 6 preceding and current row) as "MA7 Sales Volume",
  avg("Sales Count") over (order by "Day", "Day" rows between 6 preceding and current row) as "MA7 Sales Count",
  avg("AVG NFT Price") over (order by "Day", "Day" rows between 6 preceding and current row) as "MA7 AVG NFT Price",

  sum("Sales Volume") over (order by "Day") as "Cum Sales Volume",
  sum("Sales Count") over (order by "Day") as "Cum Sales Count"
FROM solana.core.fact_nft_sales s join price n on block_timestamp::date = date join solana.core.dim_nft_metadata m on s.mint = m.mint
where  
  project_name = '${collectionName}' and 
  succeeded = TRUE 
group by 1
),
avg_info as (
select 
  avg("Sales Volume") as "AVG Sales Volume",
  avg("AVG NFT Price") as "Total AVG NFT Price",
  avg("Sales Count") as "AVG Sales Count"
from info 
)
select *
from info, avg_info
order by "Day"
`

export const getCertainCollectionMarketplacesComparisonQuery = (collectionName: string) =>
    `
with price as (
select 
  date_trunc('day', hour) as date,
  avg(price) as usd_price
from ethereum.core.fact_hourly_token_prices
where 
  token_address = lower('0xD31a59c85aE9D8edEFeC411D448f90841571b89c') 
group by 1
)

SELECT 
  -- date_trunc('week', block_timestamp) as "Day",
  case when marketplace ilike '%magic eden%' then 'magic eden' else marketplace end as "Marketplace",
  sum(sales_amount * usd_price) as "Sales Volume",
  avg(sales_amount * usd_price) as "AVG NFT Price",
  count(distinct purchaser) as "Unique Buyers",
  count(distinct seller) as "Unique Sellers",
  count(distinct tx_id) as "Sales Count"
FROM solana.core.fact_nft_sales s join price n on block_timestamp::date = date join solana.core.dim_nft_metadata m on s.mint = m.mint
where 
  project_name = '${collectionName}' and 
  succeeded = TRUE
group by 1
`

export const getCertainCollectionMarketplacesComparisonDailyAverageQuery = (collectionName: string) =>
    `
with price as (
select 
  date_trunc('day', hour) as date,
  avg(price) as usd_price
from ethereum.core.fact_hourly_token_prices
where 
  token_address = lower('0xD31a59c85aE9D8edEFeC411D448f90841571b89c') 
group by 1
),
info as (
SELECT 
  date_trunc('day', block_timestamp) as "Day",
  case when marketplace ilike '%magic eden%' then 'magic eden' else marketplace end as "Marketplace",
  sum(sales_amount * usd_price) as "Sales Volume",
  avg(sales_amount * usd_price) as "AVG NFT Price",
  count(distinct purchaser) as "Unique Buyers",
  count(distinct seller) as "Unique Sellers",
  count(distinct tx_id) as "Sales Count"
FROM solana.core.fact_nft_sales s join price n on block_timestamp::date = date join solana.core.dim_nft_metadata m on s.mint = m.mint
where 
  "Day" >= current_date - 90 and 
  project_name = '${collectionName}' and 
  succeeded = TRUE
group by 1, 2
),
avg_info as (
select 
  "Marketplace",
  avg("Sales Volume") as "Daily Sales Volume (in USD)",
  avg("AVG NFT Price") as "Daily NFT Price (in USD)",
  avg("Sales Count") as "Daily Sales Count",
  avg("Unique Buyers") as "Daily Unique Buyers",
  avg("Unique Sellers") as "Daily Unique Sellers"
from info 
group by 1
)
select *
from avg_info
`