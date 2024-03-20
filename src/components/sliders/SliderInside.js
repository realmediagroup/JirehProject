'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";




const SliderInside = () => {

  const renderImages = () => {
    const images = [
      "",
      "",
      ""
    ]

  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    arrows:false,
  };


  return (
    <div className="slider-container  ">
        <div  className="  w-[350px] sm:w-[500px] lg:w-[500px] ">
          <Slider {...settings} >
            <div className="">
              <Image src={img2} alt=""/>
            </div>
            <div>
              <Image src={img3} alt=""/>
            </div>
            <div>
              <Image src={img4} alt=""/>
            </div>
          </Slider>
        </div>
      </div> 
    );
}
 
export default SliderInside;