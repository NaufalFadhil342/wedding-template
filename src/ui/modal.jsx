import React from 'react';
import './modal.css';
import useEmblaCarousel from 'embla-carousel-react';
import { galleryData } from '../data/weddingData';
import Backdrop from './backdrop';

const Modal = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section>
      <Backdrop isOpen={props.showAlbums} onClose={() => props.setShowAlbums(!props.showAlbums)} emblaApi={emblaApi}>
        <div className="modal">
          <div className="modal-section" ref={emblaRef}>
            <div className="modal-container">
              {galleryData.map((image, index) => {
                return (
                  <div className="modal-image" key={index}>
                    <div className="image" style={{ backgroundImage: `url(${image})` }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Backdrop>
    </section>
  );
};

export default Modal;
