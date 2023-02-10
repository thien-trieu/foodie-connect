import axios from 'axios';
import React, { useEffect, useState } from 'react';
import env from "react-dotenv";

import { Card, Icon, Image, Rating, Container, Header, Message, Segment } from 'semantic-ui-react';

import CardCarousel from "./CardCarousel";

const initialState = {
  location: '',
  term: '',
};

export default function ResturantData() {

  const [resData, setResData] = useState([]);
  const [form, setForm] = useState(initialState);

  //added trim to e.target.value but no .env cant test
  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value.trim().replace(/\s+/g, ' ')
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('FORM', form);

    const { location, term } = form;


    const trimmedLocation = location.trim().replace(/\s/g, '+');
    const trimmedTerm = term.trim().replace(/\s/g, '+');

    const YAPIKEY = window.env.YAPIKEY;

    const fetchResturants = async () => {
      const data = await axios
        .get(
          `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`,
          {
            headers: {
              Authorization: `Bearer ${YAPIKEY}`,
              Accept: 'application/json',
              "Content-Type": 'application/json',
              "Access-Control-Allow-Headers": '*',
              "Access-Control-Allow-Origin": 'http://localhost:3000'
            },
            params: {
              location: trimmedLocation,
              term: trimmedTerm,
              sort_by: 'best_match',
              limit: '9'
            },
          },
        )
        .then(json => {
          setResData([...json.data.businesses]);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchResturants();

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



