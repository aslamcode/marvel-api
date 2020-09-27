import { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from 'express';
import { ISession } from './session.interface';

export function superResponse(req: Request, res: Response, next: NextFunction) {
  Object.assign(res, new SuperResponseBase(res));
  next();
}

export type Response = SuperResponseBase & ExpressResponse;
export type Request = { session: ISession } & ExpressRequest;

class SuperResponseBase {

  constructor(private response: Response) {
  }

  success = (data: any) => {
    this.response.status(StatusCode.success).json(data);
  }

  created = (data: any) => {
    this.response.status(StatusCode.created).json(data);
  }

  accepted = (data: any) => {
    this.response.status(StatusCode.accepted).json(data);
  }

  invalid = (data: any) => {
    this.response.status(StatusCode.invalid).json(data);
  }

  unauthorized = (data: any) => {
    this.response.status(StatusCode.unauthorized).json(data);
  }

  forbidden = (data: any) => {
    this.response.status(StatusCode.forbidden).json(data);
  }

  notFound = (data: any) => {
    this.response.status(StatusCode.notFound).json(data);
  }

  timeout = (data: any) => {
    this.response.status(StatusCode.timeout).json(data);
  }

  internalError = (data: any) => {
    this.response.status(StatusCode.internalError).json(data);
  }

}

enum StatusCode {
  success = 200,
  created = 201,
  accepted = 202,
  updated = 204,
  invalid = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  timeout = 408,
  internalError = 500
}