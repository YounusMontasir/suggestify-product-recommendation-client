import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {


  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full h-screen"
    >

      <SwiperSlide className=" bg-[#212529] bg-cover bg-center min-h-[600px]">
  <div className="  flex flex-row gap-10 justify-center items-start py-10 px-20 text-white space-y-4">
  <div className=" mt-16">
   <h1 className="text-5xl md:text-6xl font-bold mb-6 ">Find the Right Product,<br /> Every Time</h1>
    <p className="text-xl max-w-xl text-white ">
    "Ask questions, get answers, and make confident choices with community help."
    </p>
    <button className="bg-[#2D86EB] text-white font-bold px-6 py-3 rounded-md mt-8 hover:bg-opacity-90 transition-colors">
      Get Started
    </button></div>
    <div>
        <img className="h-[450px] w-[550px] rounded-lg" src="https://i.ibb.co.com/6wCDpRT/pro-4.jpg" alt="" />
    </div>
  
   
  </div>
</SwiperSlide>
<SwiperSlide className=" bg-[#212529] bg-cover bg-center min-h-[600px]">
  <div className="  flex flex-row gap-10 justify-center items-start py-10 px-20 text-[#F9B851] space-y-4">
  <div className=" mt-16">
   <h1 className="text-5xl md:text-6xl font-bold mb-6 ">Get Expert Advice for <br /> Every Purchase</h1>
    <p className="text-xl max-w-xl text-white ">
    "From gadgets to groceries, let others guide you to the perfect choice."
    </p>
    <button className="bg-[#F9B851] text-white font-bold px-6 py-3 rounded-md mt-8 hover:bg-opacity-90 transition-colors">
      Get Started
    </button></div>
    <div>
        <img className="h-[450px] w-[550px] rounded-lg" src="https://i.ibb.co.com/JF3WjdN/pro-3.jpg" alt="" />
    </div>
  
   
  </div>
</SwiperSlide>
<SwiperSlide className=" bg-[#212529] bg-cover bg-center min-h-[600px]">
  <div className="  flex flex-row gap-10 justify-center items-start py-10 px-20 text-white space-y-4">
  <div className=" mt-16">
   <h1 className="text-5xl md:text-6xl font-bold mb-6 ">Your Product Questions,<br /> Answered Here</h1>
    <p className="text-xl max-w-xl text-white ">
    "Join the conversation and discover recommendations tailored to your needs."
    </p>
    <button className="bg-[#2D86EB] text-white font-bold px-6 py-3 rounded-md mt-8 hover:bg-opacity-90 transition-colors">
      Get Started
    </button></div>
    <div>
        <img className="h-[450px] w-[550px] rounded-lg" src="https://i.ibb.co.com/kQh30Rx/pro2.jpg" alt="" />
    </div>
  
   
  </div>
</SwiperSlide>
      
    </Swiper>
  );
};

export default Banner;