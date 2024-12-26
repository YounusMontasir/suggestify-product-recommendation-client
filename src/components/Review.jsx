import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import { EffectFlip, Autoplay } from "swiper/modules";

const Review = () => {
  return (
    <div className="swiper-container mb-24 overflow-hidden">
      <Swiper
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        effect={"flip"}
        flipEffect={{
          slideShadows: true,
          limitRotation: true,
        }}
        breakpoints={{
          640: {
            centeredSlides: true, // Enabled for larger screens
          },
          0: {
            centeredSlides: false, // Disabled for small screens
          },
        }}
        modules={[EffectFlip, Autoplay]}
        className="swiper-wrapper"
      >
        <SwiperSlide className="mx-auto">
          <div className="flex gap-6 p-10 rounded-lg bg-[#F9B851] shadow-lg w-11/12 md:w-9/12 lg:w-5/12 border border-gray-300 mx-auto">
            <div className="pt-10">
              <img
                src="https://i.ibb.co/PM2dtYS/man1.jpg"
                alt="Review 1"
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
              <h1 className="text-black mt-6 pb-10 text-center">
                "The recommendations were incredibly accurate! I found exactly
                what I needed in minutes."
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <div className="flex gap-6 p-10 rounded-lg bg-[#2D86EB] shadow-lg w-11/12 md:w-9/12 lg:w-5/12 border border-gray-300 mx-auto">
            <div className="pt-10">
              <img
                src="https://i.ibb.co/HN2kMhz/woman1.jpg"
                alt="Review 2"
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
              <h1 className="text-black mt-6 pb-10 text-center">
                "A very user-friendly site with great filters. It made shopping
                so much easier!"
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <div className="flex gap-6 p-10 rounded-lg bg-[#F9B851] shadow-lg w-11/12 md:w-9/12 lg:w-5/12 border border-gray-300 mx-auto">
            <div className="pt-10">
              <img
                src="https://i.ibb.co/xm5p1by/w2.jpg"
                alt="Review 3"
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
              <h1 className="text-black mt-6 pb-10 text-center">
                "I was impressed by the detailed suggestions. Definitely coming
                back for future searches!"
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
