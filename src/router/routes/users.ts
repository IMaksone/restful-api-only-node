import { Routes } from "_types";
import { httpMetods } from "../variables";

import { rootTemplates, rootWorker } from "_db";
import { getBody, getPasswordHash, getTokenHash } from "_helper";

const usersRotes: Routes = {
  [httpMetods.GET]: [],
  [httpMetods.POST]: [],
  [httpMetods.PUT]: [],
  [httpMetods.DELETE]: [],
};

usersRotes.GET.push({
  url: "/users",
  callback: (request, getResponse) => {
    rootWorker(rootTemplates.getAllUsers(undefined), {
      error: (error) => console.log("Get all users error: ", error),
      success: (results, fields) => getResponse(200, results),
    });
  },
});

usersRotes.POST.push({
  url: "/users",
  callback: async (request, getResponse) => {
    getBody(request, async (body) => {
      const password = await getPasswordHash(body.password);

      const token = await getTokenHash(body.login);

      rootWorker(
        rootTemplates.addUser({ login: body.login, password, token }),
        {
          error: (error) => console.log("POST add user error: ", error),
          success: (results, fields) =>
            results.rowCount
              ? getResponse(200, {
                  message: "User was added!",
                  login: body.login,
                  token: token,
                })
              : getResponse(409, {
                  message: "User already exist!",
                  login: body.login,
                  token: token,
                }),
        }
      );
    });
  },
});

usersRotes.PUT.push({
  url: "/users",
  callback: async (request, getResponse) => {
    getBody(request, async (body) => {
      const password = await getPasswordHash(body.password);

      rootWorker(
        rootTemplates.updateUserPassword({ login: body.login, password }),
        {
          error: (error) => {
            console.log("PUT update user password error: ", error);
            getResponse(500, {
              message: "Internal Server Error",
              login: body.login,
            });
          },
          success: (results, fields) =>
            results.rowCount
              ? getResponse(200, {
                  message: "User was updated!",
                  login: body.login,
                })
              : getResponse(404, {
                  message: "User don't exist!",
                  login: body.login,
                }),
        }
      );
    });
  },
});

export default usersRotes;
