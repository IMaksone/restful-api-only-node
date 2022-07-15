import { defaultRoutes as routes } from './params';
import { getAllTemplates, addTemplate } from '../databases/mysql/rest/queries';

routes.GET.push({
  url: '/templates',
  callback: (request, getResponse) => {
    getAllTemplates(
      {
        error: (error) => console.log('Get all templates error: ', error),
        success: (results, fields) => getResponse(200, results),
      },
      undefined
    );
  },
});

routes.POST.push({
  url: '/templates',
  callback: (request, getResponse) => {
    let body: any = [];
    request
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        console.log(Buffer.concat(body).toJSON())
        body = Buffer.concat(body);
      });
      console.log(body)

    addTemplate(
      {
        error: (error) => null,//console.log('Add template error: ', error),
        success: (results, fields) => getResponse(200, results),
      },
      { value: body.value }
    );
  },
});

export default routes;
