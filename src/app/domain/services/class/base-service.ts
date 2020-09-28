import { IList } from '../../interfaces/list.interface';
import { IRepository } from '../../interfaces/repository.interface';
import { IService } from '../../interfaces/service.interface';

export class BaseService<TEntity> implements IService<TEntity> {

  constructor(
    public repository: IRepository<TEntity>
  ) {
  }

  async create(document: TEntity): Promise<TEntity> {
    try {
      return this.repository.create(document);
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async getAll(query: any = {}): Promise<TEntity[]> {
    try {
      return this.repository.getAll(query);
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async listAll(query: any = {}, skip?: number, limit?: number, sort?: any): Promise<IList<TEntity>> {
    skip = Number(skip || 0);
    limit = limit != undefined ? Number(limit) : undefined;

    try {
      return this.repository.listAll(query, skip, limit, sort);
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async getById(id: string): Promise<TEntity> {
    try {
      return this.repository.getById(id);
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async clear(): Promise<boolean> {
    try {
      return this.repository.clear();
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

}