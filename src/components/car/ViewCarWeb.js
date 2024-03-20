'use client'
import useImageCar from '@/hook/useImageCar'
import BtnSlayder from '../btns/BtnSlayder'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import BtnPay from '../btns/BtnPay'
import BtnPosition from '../btns/BtnPosition'
import Link from 'next/link'


const ViewCarWeb = () => {
   const { img, add, sub } = useImageCar();
   

   return ( 
      <div className="hidden md:block w-full h-screen pt-[100px] px-[30px] xl:pt-[80px]  bg_back  ">
         <div className='w-full justify-center items-center flex flex-col'>
            <div className='flex text-center lg:text-6xl font-black text-[40px] leading-[40px]'>GANA UN TOYOTA COROLLA 2024</div>
            <div className='w-full flex flex-col justify-center items-center gap-8'>
               <div className="w-full mt-16  flex justify-center items-center">
                  <img src={img} />
               </div>
               <div className="w-28 h-10 bg-zinc-800 flex  items-center rounded-full ">
                  <button onClick={() => add()}   className="w-full h-full flex justify-center items-center rounded-full text-lg text-slate-100  hover:bg-slate-600">
                     <BsChevronLeft className="" />
                  </button>
                  <button onClick={() => sub()} className="w-full h-full  flex justify-center items-center rounded-full text-lg text-slate-100  hover:bg-slate-600">
                     <BsChevronRight className="" />
                  </button>
               </div>
               <div className="absolute left-[30px] bottom-[40px] xl:left-[40px] xl:bottom-[50px] ">
                  <div className="w-52 flex justify-between ">
                  <Link href="interior">
                     <button className="w-24 h-10 rounded-full text-zinc-100 hover:bg-opacity-10 hover:border-[2px] hover:border-zinc-800 hover:font-medium hover:text-zinc-800  bg-zinc-800 ">Interior</button>
                  </Link>
                     <button className="w-24 h-10 rounded-full cursor-default bg-opacity-10 border-[2px] border-zinc-800 font-medium text-zinc-800  ">Exterior</button>
                  </div>
               </div>
               <div className="absolute right-[30px] bottom-[40px] xl:right-[40px] xl:bottom-[50px]">
                  <BtnPay/>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default ViewCarWeb;