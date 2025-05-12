'use client'
import Button from '@/components/ui/button/button'
import FormField, { ValidFieldNames } from '@/components/ui/form-field/form-field'
import { handleRegister, sendVerificationCode } from '@/services/auth.service'
import { RegisterUserSchema, TRegisterUserSchema } from '@/shared/models/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerFields, TFieldProps } from './fields'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function RegisterComponent() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TRegisterUserSchema>({
    resolver: zodResolver(RegisterUserSchema),
  })

  const onSubmit = async (payload: TRegisterUserSchema) => {
    const response = await handleRegister(payload)
    if (response) {
      const response = await sendVerificationCode(payload.email)
      if (response) {
        toast.success(response)
        localStorage.setItem('email', payload.email)
        reset()
        router.push('/verify-email')
      }
    }
  }

  return (
    <div>
      <h3>
        Qeydiyyat
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {registerFields.map((field: TFieldProps) => (
          <FormField
            key={field.name}
            inputProps={{
              type: field.type,
              placeholder: field.placeholder,
              autoComplete: field.autoComplete,
            }}
            eyeIcon={field.eyeIcon}
            labelName={field.label}
            name={field.name as ValidFieldNames}
            register={register}
            error={errors[field.name as ValidFieldNames]}
          />
        ))}

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? 'Zəhmət olmasa, gözləyin...'
            : 'Qeydiyyatdan keç'}
        </Button>
      </form>

    </div>
  )
}
