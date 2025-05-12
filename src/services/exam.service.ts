import { get } from "@/http/methods"
import { ApiEndpoints } from "@/shared/enums/api.enum"
import { IExamProfessions } from "@/shared/types/api"

export const getExamProfessions = async (): Promise<IExamProfessions[]> => {
  const response = await get<IExamProfessions[]>(ApiEndpoints.EXAM_PROFESSION)
  return response?.data
}