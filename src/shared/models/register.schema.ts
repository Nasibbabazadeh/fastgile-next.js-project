import { z } from 'zod'

const nameSurnameRegex = /^[a-zA-ZəƏüÜöÖğĞıİçÇşŞ]+$/

const nicknameRegex =
  /^(?!.*__)(?!^\d)(?!.*_$)[a-zA-ZƏəĞğİıÖöŞşÜüÇç\d]+(_[a-zA-ZƏəĞğİıÖöŞşÜüÇç\d]+)?$/

export const RegisterUserSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: 'Adınızı daxil edin' })
      .min(3, 'Ən az 3 simvol olmalı')
      .regex(nameSurnameRegex, { message: 'Ad formatı yanlışdır' })
      .max(20, 'Çox uzundur'),
    lastName: z
      .string()
      .min(1, { message: 'Soyadınızı daxil edin' })
      .min(3, 'Ən az 3 simvol olmalı')
      .regex(nameSurnameRegex, { message: 'Soyad formatı yanlışdır' })
      .max(20, 'Çox uzundur'),
    nickName: z
      .string()
      .min(1, { message: 'Ləqəbinizi daxil edin' })
      .min(3, 'Ən az 3 simvol olmalı')
      .regex(nicknameRegex, { message: 'Ləqəb formatı yanlışdır' }),
    email: z
      .string()

      .min(1, { message: 'Email ünvanını daxil edin' })
      .email({ message: 'Email formatı yanlışdır' }),
    password: z
      .string()
      .min(1, { message: 'Şifrənizi yenidən daxil edin' })
      .min(6, { message: 'Ən azı 6 simvol olmalı' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Şifrənizi təsdiq edin' })
      .min(6, { message: 'Ən azı 6 simvol olmalı' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type TRegisterUserSchema = z.infer<typeof RegisterUserSchema>
