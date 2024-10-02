import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "https://via.placeholder.com/800x300?text=Image+1",
    "https://via.placeholder.com/800x300?text=Image+2",
    "https://via.placeholder.com/800x300?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển đổi ảnh sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3000ms = 3 giây

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner-container " style={{ width: "100%" }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              height: "10px",
              width: "10px",
              margin: "0 5px",
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#000" : "#ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
