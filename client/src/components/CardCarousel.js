import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { Card, Icon, Image, Rating, Container, Header, Message, Segment } from 'semantic-ui-react';

import React from "react";

import CustomCardSlide from "../components/CustomCardSlide";
import CustomDotGroup from "../components/CustomDotGroup";

const CardCarousel = ({resData}) => {
  console.log(resData)
  return (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={resData.length}
    style={{ width: "300px" }}
  >
    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
    
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
        index={1}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
        index={2}
        meta="Friend"
      />
    </Slider>

    <CustomDotGroup slides={resData.length} />
  </CarouselProvider>
)};

export default CardCarousel;
