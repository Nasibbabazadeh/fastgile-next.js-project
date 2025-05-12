'use client'
import Button from '@/components/ui/button/button'
import FormField, { ValidFieldNames } from '@/components/ui/form-field/form-field'
import { useAuthStore } from '@/store/useAuthStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef, useState } from 'react'
import { loginFields, TFieldProps } from '../register/fields'
import { handleLogin } from '@/services/auth.service'
import toast from 'react-hot-toast'
export default function LoginComponent() {
  const setAuth = useAuthStore(state => state.setAuth);
  const router = useRouter()
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)
      const email = emailInputRef.current?.value
      const password = passwordInputRef.current?.value
      if (!email || !password) {
        toast.error('Zəhmət olmasa, bütün sahələri doldurun.')
        return
      }
      const data = await handleLogin({ email, password })
      if (data) {
        const { firstName, lastName, nickName, email, token } = data
        setAuth({ token })
        localStorage.setItem('fullName', `${firstName} ${lastName}`)
        localStorage.setItem('email', email)
        localStorage.setItem('nickName', nickName)
        router.push('/')
      }
    }
    finally {
      setIsSubmitting(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      <h3>
        Daxil ol
      </h3>
      {loginFields.map((field: TFieldProps) => (
        <FormField
          key={field.name}
          inputProps={{
            type: field.type,
            placeholder: field.placeholder,
            autoComplete: field.autoComplete,
            ref: field.name === 'email' ? emailInputRef : passwordInputRef
          }}
          eyeIcon={field.eyeIcon}
          labelName={field.label}
          name={field.name as ValidFieldNames}
        />
      ))}
      <Button disabled={isSubmitting}>
        {isSubmitting ? 'Zəhmət olmasa, gözləyin...' : 'Daxil ol'}
      </Button>
    </form>
  )
}
