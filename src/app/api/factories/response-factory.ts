import { IResponse } from '../interfaces/reponse.interface';

export function responseFactory(data: any, code: number, status: string, offset: number = 0, limit: number = 0, total: number = 0, count: number = 0): IResponse {
  let results: any[];

  if (Array.isArray(data)) {
    results = data;
  } else {
    results = [data];
  }

  const response = {
    code,
    status,
    copyright: '© 2020 MARVEL',
    attributionText: 'Data provided by Marvel. © 2020 MARVEL',
    attributionHTML: '<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>',
    etag: '1f15b704c5877b37fcd9b53296743c75e81d27d1',
    data: {
      offset: offset || 0,
      limit: limit || 0,
      total: total || 0,
      count: count || 0,
      results
    }
  };

  return response;
}