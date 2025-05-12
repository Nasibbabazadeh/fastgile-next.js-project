export interface IAuthResponse {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  token: string;
}

export type TLoginRequestProps = {
  email: string;
  password: string;
}