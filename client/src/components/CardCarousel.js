import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { Card, Icon, Image, Rating, Container, Header, Message, Segment } from 'semantic-ui-react';

import React from "react";

import CustomCardSlide from "../components/CustomCardSlide";
import CustomDotGroup from "../components/CustomDotGroup";

const CardCarousel = ({resData}) => {
  console.log(resData)

  return (<div>
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={2}
      totalSlides={resData.length}
      style={{ width: "auto" }}
      visibleSlides={3}
    >
<Slider>
  {resData && resData.map((res, index) => {
    const {name, image_url, categories, rating, display_phone, url  } = res
    return (<>
      
        <CustomCardSlide
          res={res}
          key={index}
          image={image_url}
          index={index}
          header={name}
          meta={display_phone}
        />
      
        {/* <CustomCardSlide
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
        /> */}
     
  
      
</>
    )
  })}
   </Slider>
  <CustomDotGroup slides={resData.length} />
</CarouselProvider>
</div>)
};

export default CardCarousel;
