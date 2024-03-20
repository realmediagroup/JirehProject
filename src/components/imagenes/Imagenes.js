

const Imagenes = () => {

   const images = [

         "image/car_interior/int2.jpg",
         "image/car_interior/int3.jpg",
         "image/car_interior/int4.jpg",
         "image/car_interior/int5.jpg",
         "image/car_interior/int6.jpg",
         "image/car_interior/int7.jpg",
         "image/car_interior/int8.jpg",
         "image/car_interior/int9.jpg",
         "image/car_interior/int10.jpg",
         "image/car_interior/int11.jpg",
         "image/car_interior/int12.jpg",
         "image/car_interior/int13.jpg",
         "image/car_interior/int14.jpg",
         "image/car_interior/int15.jpg"
   ];


   return (
      <div className="w-full">
         <div className="w-full flex justify-center flex-wrap gap-5">
            {
               images.map((img , index)=>{
                  console.log(img.toString())
                   return <img key={index}  className="w-full max-w-[400px]" src={img} />
               })
            }
         </div>
      </div>
   )
}

export default Imagenes;