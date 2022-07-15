import http from 'http';

import router from './router/router';

import { hostname, port } from './constants/constants.json';
import { RequestType, ResponseType } from './router/types';

const server = http.createServer((req: RequestType, res: ResponseType) => {
  res.setHeader('Content-Type', 'text/plain');

  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 500;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });

  router(req, (statusCode = 200, end = '') => {
    res.statusCode = statusCode;
    res.end(typeof end === 'string' ? end : JSON.stringify(end));
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
