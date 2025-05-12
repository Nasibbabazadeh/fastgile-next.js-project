import { ApiResponseTypes } from "../enums/api.enum";

export interface ApiResponse<T> {
  systemMessage: string;
  statusCode: number;
  data: T;
  type: ApiResponseTypes.ERROR | ApiResponseTypes.SUCCESS;
}


export interface IExamProfessions {
  id: string;
  description: string;
  isNew: boolean;
  isDefault: boolean;
}