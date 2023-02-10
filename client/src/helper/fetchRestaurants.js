import axios from 'axios';
import env from "react-dotenv";

export const fetchRestaurants = async (location, term, setResData) => {
  const YAPIKEY = window.env.YAPIKEY;

  const trimmedLocation = location.trim().replace(/\s/g, '+');
  const trimmedTerm = term.trim().replace(/\s/g, '+');

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