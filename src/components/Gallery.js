import React from "react";

const images = [
  // Add your image URLs here
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  // ...
];

export default function Gallery() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt="" style={{ width: "300px", borderRadius: "8px" }} />
      ))}
    </div>
  );
}