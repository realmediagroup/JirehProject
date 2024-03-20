import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

const BtnSlayder = () => {
   return (
      <div className="w-28 h-10 bg-slate-800 flex  items-center rounded-full ">
         <div className="w-full h-full flex justify-center items-center cursor-pointer rounded-full text-lg text-slate-100  hover:bg-slate-600">
            <BsChevronLeft className="" />
         </div>
         <div className="w-full h-full  flex justify-center items-center cursor-pointer rounded-full text-lg text-slate-100  hover:bg-slate-600">
            <BsChevronRight className="" />
         </div>
      </div>
   )
}

export default BtnSlayder
