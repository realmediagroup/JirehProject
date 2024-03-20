import BtnPay from '@/components/btns/BtnPay';
import SliderInside from '@/components/sliders/SliderInside';
import Imagenes from '../imagenes/Imagenes';
import Link from 'next/link';


const ViewInteriorMobile = () => {

   return ( 

      <div className="md:hidden w-full h-full pt-[100px] px-[30px] pb-[50px] xl:pt-[80px]  bg_back  ">
         <div className='w-full justify-center items-center flex flex-col'>
            <div className='flex text-center lg:text-6xl font-black text-[40px] leading-[40px]'>GANA UN TOYOTA COROLLA 2024</div>
            <div className='w-full flex flex-col justify-center items-center gap-8'>
               <div className="w-80 sm:w-96  mt-16  flex justify-center items-center">
                  <Imagenes/>
               </div>
               <div className="">
                  <BtnPay/>
               </div>

               <div className="w-52 flex justify-between ">
                  <button className="w-24 h-10 rounded-full cursor-default bg-opacity-10 border-[2px] border-zinc-800 font-medium text-zinc-800  ">Interior</button>
                  <Link href="car">
                     <button className="w-24 h-10 rounded-full text-zinc-100 hover:bg-opacity-10 hover:border-[2px] hover:border-zinc-800 hover:font-medium hover:text-zinc-800  bg-zinc-800 ">Exterior</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default ViewInteriorMobile;