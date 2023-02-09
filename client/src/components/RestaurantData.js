import axios from 'axios';
import React, { useEffect, useState } from 'react';
import env from "react-dotenv"

const initialState = {
  location: '',
  term: '',
};

export default function ResturantData() {

  const [resData, setResData] = useState(null);
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

    // params: {location: trimmedLocation, term: trimmedTerm}
    // const trimmedLocation = location.trim().replace(/\s/g, '+');
    // const trimmedTerm = term.trim().replace(/\s/g, '+');

    const YAPIKEY = env.YAPIKEY;

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
              location: location,
              term: term,
            },
          },
        )
        .then(json => {
          const { name, image_url, url } = json.data.businesses[0];
          const data = {
            name: name,
            image: image_url,
            url: url
          };
          setResData(data);
          console.log({ items: json.data.businesses });
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchResturants();

  };




  return (
    <div>
      <div>
        <div className="auth__form-container">
          <div className="auth__form-container_fields">
            {/* <img src={logo} alt="logo" className="auth__form-logo" /> */}
            <div className="auth__form-container_fields-content">
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
              <div className="auth__form-container_fields-account">

              </div>
            </div>
          </div>
        </div>
      </div>
      {resData &&
        <div className="auth__form-container_image">
          <h3>{resData.name}</h3>
          <img src={resData.image} width="100px" />
          <p><a href={resData.url}>Website</a></p>
        </div>}
    </div>
  );
}
