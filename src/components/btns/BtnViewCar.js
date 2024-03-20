'use client'
import Link from 'next/link'
import { useState } from 'react'

const BtnViewCar = () => {
   return (
      <Link href="car" className="  w-32 h-10 flex justify-center items-center rounded-full text-base cursor-pointer border-2 border-zinc-800 bg-zinc-800 text-zinc-200  relative  hover:bg-transparent hover:text-zinc-800 transition-all duration-500">
         <div className="w-full h-full rounded-full absolute bg-zinc-900 opacity-10"></div>
         ver vehículo
      </Link>
   )
}

export default BtnViewCar
