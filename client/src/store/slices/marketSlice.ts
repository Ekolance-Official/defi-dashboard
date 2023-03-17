import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketSlice = createApi({
  reducerPath: "token",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.coingecko.com/api/v3/coins`,
  }),
  endpoints: (builder) => ({
    getMarket: builder.query({
      query: (name) =>
        `/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    }),
  }),
});

export const { useGetMarketQuery } = marketSlice;
