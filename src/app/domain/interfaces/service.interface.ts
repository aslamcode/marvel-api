import { IList } from './list.interface';

export interface IService<TEntity> {

  create(document: TEntity): Promise<TEntity>;
  getAll(query?: any, select?: string, populate?: any): Promise<TEntity[]>;
  listAll(query?: any, skip?: number, limit?: number, sort?: any, select?: string, populate?: any): Promise<IList<TEntity>>;
  getById(id: string, select?: string, populate?: any): Promise<TEntity>;

}