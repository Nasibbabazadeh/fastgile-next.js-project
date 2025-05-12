export type TFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  autoComplete: string;
  type: string;
  eyeIcon?: boolean;
}


export const registerFields: TFieldProps[] = [
  {
    name: "firstName",
    label: "Ad",
    type: "text",
    placeholder: "Ad",
    autoComplete: "firstName"
  },
  {
    name: "lastName",
    label: "Soyad",
    type: "text",
    placeholder: "Soyad",
    autoComplete: "lastName"
  },
  {
    name: "nickName",
    label: "Nickname",
    type: "text",
    placeholder: "Nickname",
    autoComplete: "nickname"
  },
  {
    name: "email",
    label: "Elektron poçt",
    type: "email",
    placeholder: "example@gmail.com",
    autoComplete: "email"
  },
  {
    name: "password",
    label: "Şifrə",
    type: "password",
    placeholder: "Şifrə",
    autoComplete: "current-password",
    eyeIcon: true
  },
  {
    name: "confirmPassword",
    label: "Şifrənin təkrarı",
    type: "password",
    placeholder: "Şifrəni təkrar daxil et",
    autoComplete: "repeat-password",
    eyeIcon: true
  },
];


export const loginFields: TFieldProps[] = [
  {
    name: "email",
    label: "Elektron poçt",
    type: "email",
    placeholder: "example@gmail.com",
    autoComplete: "email"
  },
  {
    name: "password",
    label: "Şifrə",
    type: "password",
    placeholder: "Şifrə",
    autoComplete: "current-password",
    eyeIcon: true
  },
]