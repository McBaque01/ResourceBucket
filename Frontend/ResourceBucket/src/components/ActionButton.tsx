import React, { ReactNode } from 'react'
import { string } from 'zod';

import { Icon } from '@iconify/react';

interface ActionButtonPropsType {

icon?:ReactNode | string;
name: string;

classname?: string;

handleClick: () => void
  
}


export const ActionButton: React.FC<ActionButtonPropsType> = ({icon, name, classname,handleClick}: ActionButtonPropsType) => {
  return (
    <button onClick={handleClick} className={`${classname ? classname : "bg-[#202020] text-white w-full min-h-[3.4em] hover:bg-[#2c2c2c] text-[1em] font-medium tracking-wide rounded-md"} flex flex-row justify-center items-center gap-2 cursor-pointer`}>
      
        {icon && <span className="cursor-pointer">{icon}</span>}
        <span className='cursor-pointer'>{name}</span>
    </button>
  )
}
