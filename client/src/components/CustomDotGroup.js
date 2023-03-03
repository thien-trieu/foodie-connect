import PropTypes from "prop-types";
import { Dot } from "pure-react-carousel";
import React from "react";
import { Button, Container } from "semantic-ui-react";

const CustomDotGroup = ({ slides, size }) => {
  console.log(size)
  return (
  <Container textAlign="center">
    <div className="customDotGroup__button">
    <Button.Group size={size}>
      {[...Array(slides).keys()].map(slide => (
        <Button style={{ width: "25px", height: "25px", background: "none" }} size={size} as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
    </div>
  </Container>
)};

CustomDotGroup.defaultProps = {
  size: "tiny"
};

CustomDotGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
};

export default CustomDotGroup;
