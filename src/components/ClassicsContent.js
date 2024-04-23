import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SignupFormModal from "./SignupFormModal";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import "../components/ClassicsContent.css";
import Image1 from "../Assets/image1.jpeg";
import Image2 from "../Assets/image2.jpeg";
import Image3 from "../Assets/image3.jpeg";
import Image4 from "../Assets/image4.jpeg";
import Image5 from "../Assets/image5.jpeg";
import Image6 from "../Assets/image6.jpeg";
const ClassicsContent = () => {
  const [showSignup,setShowSignup] = useState(false)
  const classicFeatures = [
    {
      title: "Connect and Share",
      para: "Start by connecting with friends and family. Share events, communities, and content effortlessly. Whether it’s a captivating video, an exciting post, or just the anticipation of a shared event, bring everyone closer.",
      image: Image1,
    },
    {
      title: "Explore and Follow",
      para: "Dive into a world of events, creators and communities. Follow your favourite venues, artists, and event pages, and never miss out. Check out past highlights, read reviews, and see what’s trending to find your perfect fit—from finding local art or yoga classes to Coachella!",
      image: Image2,
    },
    {
      title: "Build and Participate",
      para: "Discover a wide range of events, join vibrant communities tailored to your interests, and access engaging content all in one place.",
      image: Image3,
    },
    {
      title: "Purchase Experience",
      para: "Purchase tickets effortlessly for the events you love, and share them with friends and family to invite them along or promote your favorite gatherings.",
      image: Image4,
    },
    {
      title: "Rewarding Loyalty",
      para: "Build and customize your community hub where you can host events, share content, and foster discussions, enhancing engagement and connectivity.",
      image: Image5,
    },
    {
      title: "Engage and Participate",
      para: "Venture into a world of endless possibilities, expand your social circle, and enjoy a plethora of activities and events designed to entertain and inspire.",
      image: Image6,
    },
  ];
  const [slideIndex, setSlideIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.activeIndex + 1);
  };

  return (
    <div>
      <div className="swiper-full">
        <div className="swiper-with-progress">
          <Swiper
            direction={"vertical"}
            speed={900}
            mousewheel={{
              sensitivity: 2,
              releaseOnEdges: true,
            }}
            onSlideChange={handleSlideChange}
            onSlideChangeTransitionStart={() => {
              document.querySelectorAll(".slide-para").forEach((p) => {
                p.classList.remove("animate-popup");
              });
              const activeSlideText = document.querySelector(
                ".swiper-slide-active .slide-para"
              );
              activeSlideText.classList.add("animate-popup");
            }}
            modules={[Pagination, Mousewheel, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-para animate-popup" id="feature-text">
                <h3 className="feature-text-heading">Feel the </h3>
                <h3 className="feature-text-heading">Unforgettable.</h3>
                <p className="slide-text" id="slide-text-head">
                  Wheather you are planning for tomorrow or budgeting for today.
                  Evntiq connects you with working capital you need to run your
                  business on your terms.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-para" id="feature-text">
                <h2>
                  Our features don't just bring the world closer—they're the
                  very threads binding the tapestry of joy, community and
                  memories. Each click isn’t meaningless, it opens a door that
                  invites you to create and share unforgettable moments.
                </h2>
              </div>
            </SwiperSlide>
            {classicFeatures.map((feature, key) => (
              <div>
                <SwiperSlide key={key}>
                  <div className="slide-img">
                    <img src={feature.image} alt="" />
                  </div>
                  <div className="slide-para animate-popup">
                    <h2>{feature.title}</h2>
                    <p className="slide-text">{feature.para}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
            <SwiperSlide>
              <div className="slide-para" id="feature-text">
                <h2>
                  Ready for the extraordinary? Join the the waitlist today and
                  be among the first to discover a new universe. Sign up to get
                  exclusive early access and start your journey to unforgettable
                  moments.
                </h2>
                <button className="merged-button" id="Classics-Slide-Btn" onClick={() => setShowSignup(!showSignup)}>
                  SIGN UP!
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="slider-progress-bar">
            <div
              className="slider-progress-bar-current"
              style={{
                height: `calc(${
                  (slideIndex /
                    document.querySelectorAll(".swiper-slide").length) *
                  100
                }%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
      {showSignup && <SignupFormModal onClose={()=>setShowSignup(false)}/>}
    </div>
  );
};

export default ClassicsContent;
