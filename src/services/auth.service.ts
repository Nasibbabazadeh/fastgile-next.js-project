import { post } from "@/http/methods"
import { ApiEndpoints } from "@/shared/enums/api.enum"
import { TRegisterUserSchema } from "@/shared/models/register.schema"
import { IAuthResponse, TLoginRequestProps } from "@/shared/types/auth"


export const handleRegister = async (payload: TRegisterUserSchema): Promise<IAuthResponse> => {
  const response = await post<IAuthResponse>(ApiEndpoints.REGISTER, payload)
  return response.data
}


export const sendVerificationCode = async (email: string): Promise<string> => {
  const response = await post<string>(`${ApiEndpoints.SEND_VERIFICATION_CODE}?email=${email}`, undefined)
  return response.data
}


export const handleLogin = async (payload: TLoginRequestProps): Promise<IAuthResponse> => {
  const response = await post<IAuthResponse>(ApiEndpoints.LOGIN, payload)
  return response.data
}