import { Model, Document, Query } from 'mongoose';
import { IList } from '../../../domain/interfaces/list.interface';
import { IRepository } from '../../../domain/interfaces/repository.interface';

export class BaseRepository<TEntity> implements IRepository<TEntity> {

  constructor(
    public model: Model<Document>
  ) {
  }

  async create(document: TEntity): Promise<TEntity> {
    try {
      const model = new this.model(document);

      const validateErrors = model.validateSync();
      if (validateErrors) {
        throw validateErrors;
      }

      return model.save() as any as Query<TEntity>;
    } catch (err) {
      console.warn('Error on BaseRepository.create', err);
      throw err;
    }
  }

  async deleteById(id: string) {
    try {
      await this.model.deleteOne({ _id: id }) as any as TEntity;
      return { status: true };
    } catch (err) {
      console.warn('Error on BaseRepository.deleteById', err);
      throw err;
    }
  }

  async updateById(id: string, document: TEntity, newDocument: boolean = true) {
    try {
      const result = await this.model.findOneAndUpdate({ _id: id }, document, { new: newDocument }).lean() as TEntity[];
      return result;
    } catch (err) {
      console.warn('Error on BaseRepository.updateById', err);
      throw err;
    }
  }

  async getAll(query: any = {}, select: string = '', populate: any = ''): Promise<TEntity[]> {
    try {
      const result = await this.model.find(query).select(select).populate(populate).lean() as any as TEntity[];
      return result;
    } catch (err) {
      console.warn('Error on BaseRepository.getAll', err);
      throw err;
    }
  }

  async listAll(query: any = {}, skip?: number, limit?: number, sort?: any, select: string = '', populate: any = ''): Promise<IList<TEntity>> {
    skip = Number(skip || 0);
    limit = limit != undefined ? Number(limit) : undefined;

    try {
      const result = await this.model.find(query).skip(skip).limit(limit).select(select).sort(sort).populate(populate) as any as TEntity[];
      const count = await this.model.find(query).count();
      return { data: result, total: count };

    } catch (err) {
      console.warn('Error on BaseRepository.listAll', err);
      throw err;
    }
  }

  async listAllWithAggregation(match: any = {}, project: any = {}, skip?: number, limit?: number, sort?: any): Promise<IList<TEntity>> {
    skip = Number(skip || 0);
    limit = limit != undefined ? Number(limit) : undefined;

    try {
      let query = this.model.aggregate([
        {
          $project: project
        },
        {
          $match: match
        }
      ]);

      if (limit) {
        query = query.limit(limit);
      }

      if (sort) {
        query = query.sort(sort);
      }

      const result = await query;
      const count = await this.model.find(match).count();
      return { data: result, total: count };

    } catch (err) {
      console.warn('Error on BaseRepository.listAllWithAggregation', err);
      throw err;
    }
  }

  async getById(id: string, select = '', populate: any = ''): Promise<TEntity> {
    try {
      const result = await this.model.findById(id).select(select).populate(populate).lean() as any as TEntity;
      return result;
    } catch (err) {
      console.warn('Error on BaseRepository.getById', err);
      throw err;
    }
  }

}