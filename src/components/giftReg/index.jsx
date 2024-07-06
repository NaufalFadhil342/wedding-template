import React from 'react';
import Leaf from '../../ui/leaf';
import './giftReg.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { giftData } from '../../data/weddingData';

const GiftReg = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, containScroll: 'keepSnaps', align: 'start' }, [Autoplay()]);

  return (
    <div className="giftReg">
      <div className="header">
        <h1>Gift Registration</h1>
        <div className="header-leaf">
          <Leaf />
          <Leaf />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam nam iste, autem quisquam rerum assumenda sunt beatae, soluta, molestias id debitis accusantium accusamus omnis.</p>
      </div>
      <div className="body" ref={emblaRef}>
        <div className="giftData">
          {giftData.map((data, index) => (
            <div className="giftImage" key={index}>
              <img src={data} alt="gift brands" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftReg;
