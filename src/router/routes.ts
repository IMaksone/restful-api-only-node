import { defaultRoutes as routes } from "./params";
import { rootTemplates, rootWorker } from "../databases";

routes.GET.push({
  url: "/templates",
  callback: (request, getResponse) => {
    rootWorker(rootTemplates.getAllTemplates(undefined), {
      error: (error) => console.log("Get all templates error: ", error),
      success: (results, fields) => getResponse(200, results),
    });
  },
});

routes.POST.push({
  url: "/templates",
  callback: (request, getResponse) => {
    let body: any = [];

    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body);
      });

    rootWorker(rootTemplates.addTemplate({ value: body.value }), {
      error: (error) => console.log(error),
      success: (results, fields) => getResponse(200, results),
    });
  },
});

export default routes;
