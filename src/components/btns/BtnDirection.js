'use client'
import { useState } from 'react'

const BtnDirection = () => {
   const [active, setActive] = useState(false)

   function changeBtn() {
      setActive(!active)
   }

   return (
      <div
         onClick={() => changeBtn()}
         className={`${active ? 'bg-slate-900' : 'bg-red-900'} w-32 h-10 flex justify-center items-center rounded-full text-base cursor-pointer text-slate-200 `}
      >
         Abroad
      </div>
   )
}

export default BtnDirection
