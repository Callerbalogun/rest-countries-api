import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Country } from "../../components/types";

const fetchCountriesApi = createApi({
  reducerPath: "fetchCountriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], number | void>({
      query: () => "/all",
      transformResponse: (response: Country[], arg) => {
        if (typeof arg === "number") {
          return response.slice(0, arg);
        }
        return response;
      },
    }),
  }),
});

export const { useGetAllCountriesQuery } = fetchCountriesApi;
export default fetchCountriesApi;
