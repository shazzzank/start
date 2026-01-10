import { useState } from "react";
import LeftArrow from "@/components/icons/left-arrow";
import RightArrow from "@/components/icons/right-arrow";
import "@/styles/banner.css";

export default function Banner() {
  const [slide, setSlide] = useState(0);
  const banner = [
    { bg: 'var(--banner-bg-one)', color: 'var(--banner-color-one)' },
    { bg: 'var(--banner-bg-two)', color: 'var(--banner-color-two)' },
    { bg: 'var(--banner-bg-three)', color: 'var(--banner-color-three)' },
  ];
  return (
    <div>
      {banner.map((item, idx) =>
        <div
          key={idx}
          id="banner-item"
          style={{ backgroundColor: item.bg, color: item.color, display: (idx === slide) ? 'flex' : 'none' }}
        >
          <button
            id="banner-toggle-left"
            onClick={() => setSlide(prev => (prev - 1 + banner.length) % banner.length)}
            style={{ color: item.color }}
          >
            <LeftArrow width={25} height={25} />
          </button>
          <button
            id="banner-toggle-right"
            onClick={() => setSlide(prev => (prev + 1) % banner.length)}
            style={{ color: item.color }}
          >
            <RightArrow width={25} height={25} />
          </button>
        </div>
      )}
    </div>
  );
}
