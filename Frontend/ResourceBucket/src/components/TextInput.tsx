import {UseFormRegister, FieldValues, Path} from 'react-hook-form'
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

        register}: TextInputProps<T>) => {




          
  return (
    <div className={`${containerClassname} bg-slate-500 flex flex-col w-full p-1`}>
      <label htmlFor={id} className={`${labelClassname}`}>
        {label}
      </label>
      <div className='w-full'>
      <input 
        id={id as string}
        type={type} 
        {...register(id)} 
        placeholder={placeholder} 
        className={`${inputClassname} ${error ? 'text-red-700 border-red-500 border-2 focus:outline-none'  : ''} focus:outline-2 focus:outline w-full`}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
      />
      </div>
      {error && <span className={`${error ? 'text-red-700' : ''}`}>{error}</span>}
    </div>
  )
}
