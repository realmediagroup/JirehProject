import BtnPay from '@/components/btns/BtnPay';
import SliderInside from '@/components/sliders/SliderInside';
import Imagenes from '../imagenes/Imagenes.js';
import Link from 'next/link';


const ViewInterior = () => {

   return ( 

      <div className="hidden md:block  w-full h-full pt-[80px] px-[30px] xl:pt-[80px]  bg_back  ">
         <div className='w-full justify-center items-center flex flex-col'>
            <div className=' flex text-center lg:text-6xl font-black text-[40px] leading-[40px]'>GANA UN TOYOTA COROLLA 2024</div>
            <div className='w-full flex flex-wrap items-center  relative gap-8'>
               <div className=" w-full mt-16 mb-44  flex justify-center items-center">
                  <Imagenes/>
               </div>
               <div className="absolute left-[30px] bottom-[40px] xl:left-[40px] xl:bottom-[50px] ">
                  <div className="w-52 flex justify-between ">
                     <button className="w-24 h-10 rounded-full cursor-default bg-opacity-10 border-[2px] border-zinc-800 font-medium text-zinc-800  ">Interior</button>
                     <Link href="car">
                        <button className="w-24 h-10 rounded-full text-zinc-100 hover:bg-opacity-10 hover:border-[2px] hover:border-zinc-800 hover:font-medium hover:text-zinc-800  bg-zinc-800 ">Exterior</button>
                     </Link>
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
 
export default ViewInterior;