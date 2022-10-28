import { GetBodyType } from "_types";

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
