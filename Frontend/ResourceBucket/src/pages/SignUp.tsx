import React from 'react'
import { TextInput } from '../components/TextInput'
import { InputField } from '../components/InputField'

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm} from 'react-hook-form'

import axios from 'axios'

import { signUpSchema } from '../schema/SignUpSchema'


import logo from '../assets/ResourcrBucket-01.svg'
import { ActionButton } from '../components/ActionButton'

import { Icon } from "@iconify/react";

import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

type SignUpSchemaType = z.infer<typeof signUpSchema>

axios.defaults.withCredentials = true;
export const SignUp = () => {



  const { register, handleSubmit, formState: { errors, isValid}}= useForm<SignUpSchemaType>({
    mode: 'onChange',
    resolver:zodResolver(signUpSchema),
  })


  const SignUpSubmit:SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data)
    alert(data.Email)
  }
  
console.log(isValid, 'isValid register')
console.log(errors, 'errors register')
  
const GoogleLogin = useGoogleLogin({
  onSuccess: tokenResponse => console.log(tokenResponse),

  onError: ErrorResponse => console.log(ErrorResponse.error_description)
});

  

  return (
   
      <div className='w-full h-screen bg-white flex flex-col items-center min-w-fit'>

      

        <div className='min-w-[366px] max-w-[366px]'>

          <header className=' flex flex-col items-center p-2'>
           
            <img src={logo} className='w-[6em] '/>
            
          </header>

        <form onSubmit={handleSubmit(SignUpSubmit)} className='w-full h-fit flex flex-col gap-2 justify-around items-center'>
          <div className='flex flex-col justify-end items-center h-[8em]'>
            <h1 className=' bg-white w-fit font-medium text-[2em] font-Inter'>Create an account</h1>
          </div>

      <div className='flex flex-row gap-2'>
      <InputField<SignUpSchemaType>
            id="Firstname"
            type="text"
          
            label="Firstname"
  
            error={errors.Firstname?.message}
            register={register}
     
          />
           <InputField<SignUpSchemaType>
            id="Lastname"
            type="text"
           
  
            label="Lastname"
  
            error={errors.Lastname?.message}
            register={register}
     
          />
      </div>


        <InputField<SignUpSchemaType>
            id="Email"
            type="text"
           
  
            label="Email"
  
            error={errors.Email?.message}
            register={register}
     
          />

           <InputField<SignUpSchemaType>
            id="Password"
            type="password"
           
            label="Password"
  
            error={errors.Password?.message}
            register={register}
     
          />


          <InputField<SignUpSchemaType>
            id="ConfirmPassword"
            type="password"
          
  
            label="Confirm Password"
  
            error={errors.ConfirmPassword?.message}
            register={register}
     
          /> 

        {/* <TextInput<SignUpSchemaType>
          id="Email"
          type="text"
          placeholder="Email"

          label="Email"

          error={errors.Email?.message}
          register={register}
  
        />

        <TextInput<SignUpSchemaType>
          id="Password"
          type="text"
          placeholder="password"

          label="password"

          error={errors.Password?.message}
          register={register}
  
        />

        <TextInput<SignUpSchemaType>
          id="ConfirmPassword"
          type="text"
          placeholder="Confirm Password"

          label="Confirm Password"

          error={errors.ConfirmPassword?.message}
          register={register}

        /> */}
       
        <button onClick={()=>SignUpSubmit}
          className='bg-[#202020] text-white w-full min-h-[3.4em] hover:bg-[#2c2c2c] text-[1em] font-medium tracking-wide rounded-md'
          
          >Continue</button>


          



        </form>

        <div className='w-full h-fit flex flex-row justify-center items-center gap-2 my-6'>

          <div className='w-full h-[2px] bg-gray-300'>

          </div>
          <p className=' text-gray-400'>OR</p>
          <div className='w-full h-[2px] bg-gray-300'>

          </div>

        </div>


        <ActionButton 
        
          icon={<Icon icon="ion:logo-google" className='text-[1.2em] cursor-pointer'/>}
          name={'Continue with Google'} 
          handleClick={()=>GoogleLogin()} 
          classname={"w-full h-[3.35em] bg-gray-200 rounded-md font-Inter font-semibold hover:bg-gray-300"}
        />

        </div>
      </div>
   
  )
}
