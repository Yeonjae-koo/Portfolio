// src/components/Gallery/Gallery.jsx
import React, { useState } from 'react';
// 이미지 임포트 (원하는 만큼 늘려주세요)
import usa1 from '../../images/usa1.jpeg';
import usa2 from '../../images/usa2.jpeg';
import usa3 from '../../images/usa3.jpeg';
import usa4 from '../../images/usa4.jpeg';
import usa5 from '../../images/usa5.jpeg';
import usa7 from '../../images/usa7.jpeg';
import usa8 from '../../images/usa8.jpeg';
const images = [usa1, usa2, usa3, usa4, usa5, usa7, usa8];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;          // 한번에 보여줄 개수
  const gap = 10;                  // 이미지 간격(px)
  const itemWidth = 110;           // 한 이미지의 너비(px)

  const prev = () => setCurrent(old =>
    Math.max(0, old - 1)
  );
  const next = () => setCurrent(old =>
    Math.min(images.length - visibleCount, old + 1)
  );

  return (
    <div className="gallery-window">
      <button className="gallery-nav prev" onClick={prev} disabled={current===0}>
        ‹
      </button>

      <div className="gallery-track-container">
        <div
          className="gallery-track"
          style={{
            transform: `translateX(-${(itemWidth + gap) * current}px)`
          }}
        >
          {images.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`gallery-${i}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>

      <button
        className="gallery-nav next"
        onClick={next}
        disabled={current >= images.length - visibleCount}
      >
        ›
      </button>
    </div>
  );
}

export default Gallery;