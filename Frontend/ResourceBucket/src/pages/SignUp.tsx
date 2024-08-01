import React from 'react'
import { TextInput } from '../components/TextInput'

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm} from 'react-hook-form'

import axios from 'axios'

import { signUpSchema } from '../schema/SignUpSchema'


type SignUpSchemaType = z.infer<typeof signUpSchema>

axios.defaults.withCredentials = true;
export const SignUp = () => {



  const { register, handleSubmit, formState: { errors, isValid}}= useForm<SignUpSchemaType>({
    mode: 'onChange',
    resolver:zodResolver(signUpSchema),
  })


  const SignUpSubmit:SubmitHandler<SignUpSchemaType> = () => {

  }
  

  console.log(isValid)

  return (
   
      <div>SignIn
        <form onSubmit={handleSubmit(SignUpSubmit)}>
        <TextInput<SignUpSchemaType>
          id="email"
          type="text"
          placeholder="Email"

          label="Email"

          error={errors.email?.message}
          register={register}
  
        />

        <TextInput<SignUpSchemaType>
          id="password"
          type="text"
          placeholder="password"

          label="password"

          error={errors.password?.message}
          register={register}
  
        />

        <TextInput<SignUpSchemaType>
          id="confirmPassword"
          type="text"
          placeholder="Confirm Password"

          label="Confirm Password"

          error={errors.confirmPassword?.message}
          register={register}

        />

        </form>
      </div>
    // </FormProvider>
  )
}
