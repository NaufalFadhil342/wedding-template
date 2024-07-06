import { useCallback } from 'react';
import './arrow.css';

const useArrowButton = (emblaApi) => {
  const onPrevButton = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButton = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return { onPrevButton, onNextButton };
};

const PrevButton = (props) => {
  return (
    <button className="prev-button" onClick={props.onPrev}>
      {props.children}
    </button>
  );
};

const NextButton = (props) => {
  return (
    <button className="next-button" onClick={props.onNext}>
      {props.children}
    </button>
  );
};

export { PrevButton, NextButton, useArrowButton };
