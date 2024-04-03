import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";
const Header = () => {
	return (
		<div className="w-full h-[60px] fixed top-0 left-0  flex items-center justify-between px-5 white_03">
			<div>aqui logo</div>
			<div>
				<div className="flex flex-row text-2xl">
					<div className=" cursor-pointer w-[44px] h-[44px] rounded-full   bg_white_02   flex justify-center items-center hover:bg-stone-800 ">
						<HiOutlineTicket />
					</div>
					<div className="ml-6 cursor-pointer w-[44px] h-[44px] rounded-full bg_white_02  flex justify-center items-center hover:bg-stone-800 ">
						<MdOutlineMailOutline />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;