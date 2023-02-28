import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../constant/item";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337/api/",
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_API_TOKEN;
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export type ResponseType = {
  data: Item[];
};

export type SingleProductResponseType = {
  data: Item;
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllProducts: builder.query<ResponseType, null>({
      query: () => "products?populate=image",
    }),
    getSingleProduct: builder.query<SingleProductResponseType, string>({
      query: (id) => `products/${id}?populate=image`,
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
