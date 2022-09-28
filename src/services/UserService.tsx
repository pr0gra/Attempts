import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../interfaces/IUser";
import { useParams } from "react-router-dom";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    searchUsersByName: builder.query({
      query: (userName: string) => ({
        url: `search/users?q=${userName}`,
      }),
    }),
    getReposByName: builder.query({
      query: (userName: string) => ({
        url: `users/${userName}/repos`,
      }),
    }),
    getUserInfo: builder.query({
      query: (userName: string) => ({
        url: `users/${userName}`,
      }),
    }),
    getUserIussues: builder.query({
      query: (args) => {
        const { userName, repo } = args;
        console.log(args);
        return {
          url: `repos/${userName}/${repo}/issues`,
        };
      },
    }),
  }),
});

//https://api.github.com/repos/wtorkanorka/Nimbly/issues
