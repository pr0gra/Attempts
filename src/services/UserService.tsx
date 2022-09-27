import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../interfaces/IUser";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    getUsersByName: builder.query({
      query: (userName: string) => ({
        url: `search/users?q=${userName}`,
      }),
    }),
    // getReposByName: builder.query({
    //   query: (userName: string) => ({
    //     url: ``,
    //   }),
    // }),
  }),
});
