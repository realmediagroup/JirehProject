import { MdOutlineEmail } from "react-icons/md";
import { BsTicketPerforated } from "react-icons/bs";


const HeaderMain = () => {
   return (
      <div className="w-full h-20 flex fixed px-[30px] bg-zinc-100/90  sm:bg-transparent">
         <div className="flex justify-start items-center ">
            <div className="">Logo aqui</div>
         </div>
         <div className="w-full h-full flex items-center justify-end text-xl">
            <div className="flex flex-row justify-end mr-7 cursor-pointer gap-2">
               <div className="hidden sm:block">Boletos</div>
               <div>
                  <BsTicketPerforated className="w-9 h-9 pb-1"/>
               </div>
            </div>
            <div className="flex flex-row justify-end cursor-pointer gap-2">
               <div className="hidden sm:block">Contacto</div>
               <div>
                  <MdOutlineEmail className="w-9 h-9 pb-1"/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderMain
