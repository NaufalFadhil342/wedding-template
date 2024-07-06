import React from 'react';
import './backdrop.css';
import { createPortal } from 'react-dom';
import { PrevButton, NextButton, useArrowButton } from '../components/arrowButton/arrow';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Backdrop = (props) => {
  const { onPrevButton, onNextButton } = useArrowButton(props.emblaApi);

  const content = (
    <>
      {props.isOpen ? (
        <div className="backdrop">
          <div className="backdrop-background" onClick={props.onClose} />
          <div className="backdrop-container">{props.children}</div>
          <div className="backdrop-controls">
            <PrevButton onPrev={onPrevButton}>
              <IoIosArrowBack />
            </PrevButton>
            <NextButton onNext={onNextButton}>
              <IoIosArrowForward />
            </NextButton>
          </div>
        </div>
      ) : null}
    </>
  );

  return createPortal(content, document.getElementById('backdrop-hook'));
};

export default Backdrop;
