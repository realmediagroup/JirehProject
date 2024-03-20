import BtnPay from '@/components/btns/BtnPay'
import BtnViewCar from '@/components/btns/BtnViewCar'
export default function IndexMobile() {
   return (
      <div className='w-full  md:hidden py-[100px] px-[30px] bg_back '>
         <div className='w-full   flex flex-col justify-center items-center   '>
            <div className='w-full flex flex-col justify-center items-center gap-5'>
               <div className='flex text-center font-black text-[40px] leading-[40px]'>GANA UN TOYOTA COROLLA 2024</div>
               <div className='font-light text-center text-xl'>Compra un boleto y conviértete en el conductor de este auto</div>
            </div>
            <div className='w-full my-5'>
               <img  src="/image/car/4.png" />
            </div>
            
            <div className='my-5'>
               <BtnPay/>
            </div>
            <div className='my-5'>
               <BtnViewCar/>
            </div>
            <div className='flex text-justify text-xl font-light'>
               Compra tu boleto hoy y sé protagonista de esta historia de
               fe, contribuyendo no solo a la construcción de la iglesia,
               sino también a la transformación de vidas y el
               fortalecimiento de nuestra comunidad.
            </div>
            
            
         </div>
      </div>
      
   )
}
