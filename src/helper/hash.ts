import bcrypt from "bcryptjs";

import { GetHashType } from "_types";

export const getPasswordHash: GetHashType = async (password) =>
await bcrypt
  .hash(password, 10)
  .catch((err) => console.log("password hash error", err));

export const getTokenHash: GetHashType = async (token) =>
await bcrypt
  .hash(token, 10)
  .catch((err) => console.log("token hash error", err));