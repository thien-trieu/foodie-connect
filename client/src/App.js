import './App.css';
import Form from './components/Form';
import Landing from './components/Landing';
import { useState } from 'react';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

function App() {
  const [user, setUser] = useState(Cookies.get('user'))

  console.log(user)

  if (user) {
    
    <Landing />
    console.log("i am here")
   
      // return the landing page
      // setUser(user)
  } else {
    // return the Form
    return (
      <div className="App">
          <Form user={user} setUser={setUser}/>
      </div>
    );
  }

}

export default App;
