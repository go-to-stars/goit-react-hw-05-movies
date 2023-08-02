import React, { useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { Button } from './ScrollUpButton.styled';

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }; // функція toggleVisible змінює видимість кнопки вгору при скролі більше 300

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }; // функція scrollToTop прокручує сторінку до гори

  window.addEventListener('scroll', toggleVisible); // слухач події скрол, при настанні події виконується функція toggleVisible

  return (
    <Button
      onClick={scrollToTop}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <BsArrowUp />
    </Button>
  );
}; // функція ScrollUpButton повертає розмітку кноки "Вгору"

export default ScrollUpButton; // дефолтний експорт функції ScrollUpButton
