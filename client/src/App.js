import './App.css';
import Forms from './components/Form';
import Landing from './components/Landing';
import { useState } from 'react';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import 'semantic-ui-css/semantic.min.css'


function App() {
  const [user, setUser] = useState(Cookies.get('user'))

  console.log(user)

  if (user) {

    return (
      <div className="App">
          <Landing user={user} setUser={setUser}/>
      </div>
    );

      // return the landing page
      // setUser(user)
  } else {
    // return the Form
    return (
      <div className="App">
          <Forms user={user} setUser={setUser}/>
      </div>
    );
  }

}

export default App;
