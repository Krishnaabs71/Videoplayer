import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ReactPlayer from "react-player";

const VideoComponent = () => {
  const [showPagination, setShowPagination] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVideoHover = () => {
    setShowPagination(true);
  };

  const handleVideoLeave = () => {
    setShowPagination(false);
  };
   const videos =[
    "https://res.cloudinary.com/abserve-tech/video/upload/v1688994232/onboarding_task/video4_snco0a.mp4",
    "https://res.cloudinary.com/abserve-tech/video/upload/v1688994230/onboarding_task/video3_fkqsls.mp4",
    "https://res.cloudinary.com/abserve-tech/video/upload/v1688994223/onboarding_task/video2_p6qkpo.mp4",
    "https://res.cloudinary.com/abserve-tech/video/upload/v1688994236/onboarding_task/video1_kzhaxe.mp4"
   ]

  const handleVideoChange = (index) => {
    setActiveIndex(index);
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <div
        className="video-container"
        onMouseEnter={handleVideoHover}
        onMouseLeave={handleVideoLeave}
      >
        <Swiper
          pagination={showPagination ? pagination : false}
          modules={[Pagination]}
          draggable={true} 
          className="mySwiper"
          onSlideChange={(swiper) => handleVideoChange(swiper.activeIndex)}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <ReactPlayer
                url={video}
                playing={index === activeIndex}
                controls={true}
                muted={true}
                loop={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default VideoComponent;
