import React, {useState, useRef, useEffect}from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

import { Icon } from "@iconify/react";

interface InputFieldPropsType<T extends FieldValues>{

id: Path<T>
type: string

label: string

error: string | undefined

register: UseFormRegister<T>

containerClassname?: string
inputClassname?: string
labelClassname?: string

disabled?: boolean
readOnly?: boolean
required?: boolean
maxLength?: number
minLength?: number

}



export const InputField =<T extends FieldValues> ({

    id,
    type,
   

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

    register}: InputFieldPropsType<T>) => {

    const {ref, ...rest} = register(id)

    const InputRef = useRef<HTMLInputElement | null>(null);
    const [isValued, setisValued] = useState<boolean>(false);
    const [isFocus, setisFocus] = useState<boolean>(false);

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handleLabel = () => {
        setisValued(!!InputRef.current?.value);
    };

    const handleFocus = () => {
        setisFocus(true);
        InputRef.current?.focus();
    };

    const handleBlur = () => {
       
        setTimeout(() => {
            if (InputRef.current && !InputRef.current.contains(document.activeElement)) {
                setisFocus(false);
                handleLabel();
            }
        }, 100); 
    };

    console.log(isFocus)
    console.log(isValued, `${id} Valued`)
    console.log(error)

    console.log(isVisible, "Visible?")
    console.log(type, "TYPE")
    console.log(label, `${label} & ${label === "Password"}?`)


    const handleVisible = () => {
        setIsVisible(prevVisible => {
          const newVisible = !prevVisible;
      
          if (InputRef.current) {
            InputRef.current.type = newVisible ? "text" : "password";
          }
      
          return newVisible;  
        });
    };


    return (
        <>
          
            <div className={`${containerClassname} w-full h-fit flex flex-col` }>
               
                <div className={`w-full h-[3.75em] ring-gray-300 rounded-md p-2 flex flex-row cursor-text
                    ${isFocus ? 'ring-2' : 'ring-1'}
                `}
                onClick={handleFocus}
                >
                    <div className='w-full h-full relative pt-[20px] pb-[3px] pl-[8px] cursor-text'>
                       
                        <label htmlFor={id} 
                            className={` absolute z-10 text-nowrap transition-all text-gray-400 cursor-text font-Inter
                             ${labelClassname}
                            ${isValued || isFocus ? 'text-[0.8em] leading-0 -top-[4px] tracking-[0.1em]' : 'leading-0 text-[1em] top-[9px]'}
                        
                            `}>
                            {label}
                        </label> 
                      
                        
                        <input 
                        id={id as string}
                        type={type} 

                        {...rest}

                        ref={(e)=>{
                            ref(e)
                            InputRef.current = e
                        }} 

                        className={`${inputClassname} focus:outline-none text-[1em] leading-0 w-full  relative`} 
                   
                        onFocus={handleFocus} 
                        onBlur={handleBlur} 
                    
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        minLength={minLength}
                        maxLength={maxLength}
                        
                        
                        />

                       
                        
                       

                    </div>

                    {(label === "Password" || label === "Confirm Password") &&
                            <div className=' w-[fit] h-full flex flex-col justify-center items-center relative pr-2'
                            
                            onClick={handleVisible}
                            >
                                {isVisible ? 

                                <Icon icon="mdi:eye-outline"  className='text-[1.4em] text-gray-400 cursor-pointer' />
                                   
                                 : 
                                 <Icon icon="mdi:eye-off-outline" className='text-[1.4em] text-gray-400 relative cursor-pointer' />
                                 }
                            </div>
                    } 
                      
                 
                    
                </div>

                { error &&
                
                    <div className={`flex flex-row items-center p-1`}>
                        <Icon icon="tabler:alert-circle-filled" className='text-red-700 self-start text-[1em] min-w-[1em] mr-1'/>
                        <span className='text-red-700 text-[0.8em] leading-[1.2em]'>{error}</span>
                    </div>
                }



                {/* <div className='w-full bg-slate-400 pt-[2px]'>
                    {error && <span className={` leading-[1px] ${error ? 'text-red-700' : ''} text-[0.8em] bg-slate-100`}>{error}</span>}
                </div>  */}
            </div>




        {/* <div 
            className={`
                w-full h-[3.75em] ring-gray-300 rounded-md flex flex-col justify-end cursor-text relative bg-slate-50 p-2
                ${containerClassname}
                ${isFocus ? ' ring-2' : 'ring-1'}
            `}
            onClick={handleFocus}
        >
         <div className={`px-2 pb-[3px] relative flex flex-col w-full h-full pt-[18px]`}>
            <label
                htmlFor={id}
                className={` text-gray-500 text-nowrap cursor-text transition-all z-10 absolute
                    ${labelClassname}
                    ${isValued || isFocus ? 'text-[0.8em] leading-0 -top-[4px]' : 'leading-0 text-[1em] top-2'}
                `}
            >
                   {label}
            </label>

                <input 

                    id={id as string}
                    type={type}
                    placeholder={placeholder}

                    {...rest}

                    ref={(e)=>{
                        ref(e)
                        InputRef.current = e
                    }}

                    className={`${inputClassname} focus:outline-none relative text-[1em] leading-3 w-full bg-CWhite`} 
                   
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                  
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    minLength={minLength}
                    maxLength={maxLength}
                />
                
                {label === "Password" || label === "Confirm Password" ? 
                    <div onClick={handleVisible}>
                        Hidden
                    </div> :
                    <>
                    </>
                }
           
           </div>        
        </div>
        <div className='w-full px-2'>
        {error && <span className={`${error ? 'text-red-700' : ''} text-[0.8em]`}>{error}</span>}
        </div> */}

        </>
    );
};