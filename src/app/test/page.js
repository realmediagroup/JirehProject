'use client'

const Test = () => {
	return (
		<div className="w-full bg-zinc-50  font-sans flex flex-col items-center justify-center py-5">

			<div className="w-full max-w-[400px]    bg-zinc-100  relative flex flex-col  overflow-hidden">
				<div className="w-full h-[300px] flex flex-col justify-center items-center p-5  text-zinc-700">
					<div className="font-black text-xl pb-2">¡GRACIAS POR TU COMPRA!</div>
					<div className="w-full flex flex-col justify-start">
						<div className=" flex flex-row  text-sm">
							<div className="mr-2">Hola </div>
							<div className="font-bold"> JUAN CAMILO PARDO.</div>
						</div>
						<div className="text-sm">Cada boleta que compras es una oportunidad de ganar.</div>
						<div className="w-full flex justify-center items-center py-5">
							<img className="max-w-[200px]" src="https://jireh-project.vercel.app/image/car/4.png" />
						</div>
					</div>
					<div className="w-full mt-2 h-[50px] rounded bg-zinc-300 text-2xl flex justify-center items-center">
						CPG-123456789
					</div>
					<div className="text-sm italic">Este código que confirma su compra.</div>



				</div>
				<div className="w-full h-[120px] ">

				</div>

				<div className="w-[20px] h-[20px] rounded-full absolute top-[-10px] left-[-10px] bg-zinc-50"></div>
				<div className="w-[20px] h-[20px] rounded-full absolute top-[-10px] right-[-10px] bg-zinc-50"></div>
				<div className="w-[20px] h-[20px] rounded-full absolute bottom-[-10px] left-[-10px] bg-zinc-50"></div>
				<div className="w-[20px] h-[20px] rounded-full absolute bottom-[-10px] right-[-10px] bg-zinc-50"></div>
				<div className="w-[20px] h-[20px] rounded-full absolute top-[290px] left-[-10px] bg-zinc-50"></div>
				<div className="w-[20px] h-[20px] rounded-full absolute top-[290px] right-[-10px] bg-zinc-50"></div>
				<div className="w-full h-[1px] border border-zinc-50 absolute top-[300px] left-0 bg-zinc-50"></div>


			</div>





		</div>
	)
}

export default Test;