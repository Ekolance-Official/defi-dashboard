import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tokensSlice = createApi({
  reducerPath: "token",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://tokens.coingecko.com/uniswap`,
  }),
  endpoints: (builder) => ({
    getTokens: builder.query({
      query: (name) => `/all.json`,
    }),
  }),
});

export const { useGetTokensQuery } = tokensSlice;
