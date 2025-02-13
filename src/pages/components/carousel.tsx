import React from "react";
//import Image from "next/image";

//import styles from './model.module.css';

export default function Carousel(props: any) {
  /*return (
    <></>
  );*/
  const { configure } = props;
  if (!configure) { return; }
  const options = {
    type: 'displayCarousel',
    container: '.fc-carousel-wrapper',
    format: 'png',
    quality: 95,
    arrows: false,
    clickToConfigure: false,
    dots: false,
    enableTooltips: false
  };
  configure.run('createComponent', options, () => {});
  return (
    <></>
  );
}