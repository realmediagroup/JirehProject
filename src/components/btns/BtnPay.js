import Link from 'next/link'
import { PiShoppingCart } from 'react-icons/pi'

const BtnPay = () => {
   return (
      <Link href="pago" className="w-52 flex flex-col rounded-xl gap-2 shadow-lg cursor-pointer   bg-zinc-800 shadow-zinc-800 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-800 transition-all duration-700">
         <div className="pl-4 pt-4 text-3xl font-extrabold ">$ 20.00</div>
         <div className="flex justify-between ">
            <div className="pl-4 pb-4 text-2xl ">Comprar</div>
            <div className="w-20 rounded-tl-3xl rounded-br-xl text-3xl flex justify-center items-center   bg-[rgba(255,255,255,0.2)] bg-zinc-500">
               <PiShoppingCart />
            </div>
         </div>
      </Link>
   )
}

export default BtnPay
