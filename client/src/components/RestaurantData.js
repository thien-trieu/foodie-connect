import React, { useState } from 'react';

import { Container, Header,  Segment } from 'semantic-ui-react';

import CardCarousel from "./CardCarousel";

const initialState = {
  location: '',
  term: '',
};

export default function ResturantData({resData, setResData, fetchRestaurants}) {

  const [form, setForm] = useState(initialState);

  //added trim to e.target.value but no .env cant test
  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value.trim().replace(/\s+/g, ' ')
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { location, term } = form;

    fetchRestaurants(location, term, setResData);

  };

  return (
    <>
      <div className="auth__form-container">
        <div className="auth__form-container_fields">
          <div className="auth__form-container_fields-content" style={{ width: "200px" }}>
            <p>Search Restaurants</p>
            <form onSubmit={(handleSubmit)}>
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="location">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="location"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="term">Search Term</label>
                <input
                  name="term"
                  type="text"
                  placeholder="Search Term"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="auth__form-container_fields-content_button">
                <button>Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="restaurant__data-container">
                
        <Container style={{ textAlign: "center", width: "auto" }}>
          <Segment attached="top" style={{ border: "none" }}>
            <Header as="h2" content="Hungry?" />
          </Segment>
          <Segment attached="bottom" style={{ border: "none" }}>
            <CardCarousel resData={resData}/>
          </Segment >
        </Container>
      </div>
    </>
  );
}



