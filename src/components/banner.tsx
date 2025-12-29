import { useState } from "react";
import LeftIcon from "@/components/icons/left";
import RightIcon from "@/components/icons/right";
import { banner } from "@/utils/data";

export default function Banner() {
  const [slide, setSlide] = useState(0);
  return (
    <>
      {banner.map((item, idx) => (
        <div className={`banner ${item.bg} ${idx === slide ? 'flex' : 'hidden'}`}>
          <button className="glass" onClick={() => setSlide(prev => (prev - 1 + banner.length) % banner.length)}>
            <LeftIcon className={item.text} />
          </button>
          <button className="glass" onClick={() => setSlide(prev => (prev + 1) % banner.length)}>
            <RightIcon className={item.text} />
          </button>
        </div>
      ))}
    </>
  );
}
