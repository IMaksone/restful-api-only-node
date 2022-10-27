import bcrypt from "bcryptjs";

import { GetBodyType, GetHashType } from "./types";

export const getBody: GetBodyType = (request, callback) => {
  let body: any = [];

  request
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body);

      const str = body.toString();

      const parsedData = new URLSearchParams(str);
      const dataObj: any = {};

      for (var pair of parsedData.entries()) {
        dataObj[pair[0]] = pair[1];
      }

      callback(dataObj);
    });
};

export const getPasswordHash: GetHashType = async (password) =>
  await bcrypt
    .hash(password, 10)
    .catch((err) => console.log("password hash error", err));

export const getTokenHash: GetHashType = async (token) =>
  await bcrypt
    .hash(token, 10)
    .catch((err) => console.log("token hash error", err));
