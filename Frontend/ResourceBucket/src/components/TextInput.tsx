import {UseFormRegister, FieldValues, Path, useForm} from 'react-hook-form'
import { useState, useRef } from 'react'
interface TextInputProps<T extends FieldValues> {

id: Path<T>
type: string
placeholder: string

label:string

error: string | undefined

register: UseFormRegister<T>

containerClassname?: string
inputClassname?: string   
labelClassname?: string

disabled?: boolean;
readOnly?: boolean;
required?: boolean;
maxLength?: number;
minLength?: number;

}

 






export const TextInput =<T extends FieldValues> ({
        id, 
        type, 
        placeholder,

        label,

        error, 
        containerClassname, 
        inputClassname, 
        labelClassname,

        disabled,
        readOnly,
        required,
        maxLength,
        minLength,


       register
       }: TextInputProps<T>) => {

          const [isActive, setIsActive] = useState(false);
          
          const {ref, ...rest} = register(id)
          const  inputRef = useRef<HTMLInputElement | null>(null)

          const handleFocus = () => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          };
          
  return (
    <div className={`${containerClassname} bg-slate-500 flex flex-col w-full p-1`} onClick={handleFocus}>
      
      <div className='w-full bg-slate-700 px-2 py-1'>

        <label htmlFor={id} className={`${labelClassname} ${isActive ? 'text-red-300' : 'text-black'}`}>
          {label}
        </label>

      <input 
        id={id as string}
        type={type} 
        {...rest}
        
        ref={(e)=>{
          ref(e)
          inputRef.current = e
        }}
        
        placeholder={placeholder} 
        className={`${inputClassname} ${error ? 'text-red-700 border-red-500 border-2 focus:outline-none'  : ''} focus:outline-2 focus:outline w-full`}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        onFocus={()=>setIsActive(true)}
        onBlur={()=>setIsActive(false)}
       
      
      />
      </div>
      {error && <span className={`${error ? 'text-red-700' : ''}`}>{error}</span>}
    </div>
  )
}
