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

  const videos = [
    "/video/video4.mp4",
    "/video/video3.mp4",
    "/video/video2.mp4",
    "/video/video1.mp4",
  ];

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
          className="mySwiper"
          onSlideChange={(swiper) => handleVideoChange(swiper.activeIndex)}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <ReactPlayer
                url={video}
                playing={index === activeIndex}
                controls={false}
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
