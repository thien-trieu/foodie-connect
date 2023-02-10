import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import React from "react";
import { Card, Icon, Rating, } from 'semantic-ui-react';

const CustomCardSlide = ({ index, res, ...cardProps }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
        <Card fluid>
              <img src={res.image_url} height={300} style={{"object-fit": "cover"}}/>
              <Card.Content>
                <Card.Header>{res.name}</Card.Header>
                <Card.Meta>
                  <span className='date'>{<a href={res.url}>More details</a>}</span>
                </Card.Meta>
                <Card.Description>
                  Description: {res.categories[0].title}
                </Card.Description>
                <Card.Description>
                  Rating: <Rating icon='star' rating={res.rating} maxRating={5} disabled />

                </Card.Description>
              </Card.Content>
              <Card.Content extra>

                <a>
                  <Icon name='phone' />
                  {res.display_phone}
                </a>
              </Card.Content>
        </Card>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired
};

export default CustomCardSlide;