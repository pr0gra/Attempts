import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../interfaces/IUser";
import { useParams } from "react-router-dom";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    searchUsersByName: builder.query({
      query: (args) => {
        const { userName, currentPage } = args;

        return {
          url: `search/users?q=${userName}&page=${currentPage}`,
          params: {
            per_page: 10,
          },
        };
      },
    }),
    getReposByName: builder.query({
      query: (args) => {
        const { userName, currentPage } = args;
        return {
          url: `users/${userName}/repos?page=${currentPage}`,
          params: {
            per_page: 10,
          },
        };
      },
    }),
    getUserInfo: builder.query({
      query: (userName: string) => ({
        url: `users/${userName}`,
      }),
    }),
    getUserIussues: builder.query({
      query: (args) => {
        const { userName, repo } = args;

        return {
          url: `repos/${userName}/${repo}/issues`,
        };
      },
    }),
  }),
});

//https://api.github.com/repos/wtorkanorka/Nimbly/issues
