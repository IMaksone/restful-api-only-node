import query from './restQuery';
import { QueryType } from 'databases/types';

export const getAllTemplates: QueryType = (args) =>
  query({
    query: 'SELECT * FROM templates',
    params: [],
    ...args,
  });

export const addTemplate: QueryType = (args, params) =>
  query({
    query: `INSERT INTO templates (value) VALUES (${params.value})`,
    params: [],
    ...args,
  });
