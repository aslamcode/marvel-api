import { IList } from '../../interfaces/list.interface';
import { IRepository } from '../../interfaces/repository.interface';

export class BaseService<T> {

  constructor(
    public repository: IRepository
  ) {
  }

  async create(document: T): Promise<T> {
    try {
      return new Promise<T>(() => {});
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async softDeleteById(id: string) {
    try {
      return new Promise<T>(() => {});
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async deleteById(id: string) {
    try {
      return new Promise<T>(() => {});
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async updateById(id: string, document: T, newDocument: boolean = true) {
    try {
      return new Promise<T>(() => {});
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async getAll(query: any = {}, select: string = '', populate: any = ''): Promise<T[]> {
    try {
      return new Promise<T[]>(() => {});
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async listAll(query: any = {}, skip?: number, limit?: number, sort?: any, select: string = '', populate: any = ''): Promise<IList<T>> {
    skip = Number(skip || 0);
    limit = limit != undefined ? Number(limit) : undefined;

    try {
      return new Promise<IList<T>>(() => {});
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  async getById(id: string, select = '', populate: any = ''): Promise<T> {
    try {
      return new Promise<T>(() => {});
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

}