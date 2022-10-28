import { Routes, HttpMethods } from "_types";

export const defaultRoutes: Routes = {
  GET: [
    {
      url: "/",
      callback: (request, getResponse) =>
        getResponse(200, { message: "hello" }),
    },
  ],
  POST: [],
  PUT: [],
  DELETE: [],
};

export const httpMetods: HttpMethods = {};
Object.keys(defaultRoutes).forEach((key: any) => (httpMetods[key] = key));
