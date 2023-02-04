import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ChatContainer from './components/ChatContainer';
import { useState } from 'react';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
// import 'semantic-ui-css/semantic.min.css'


function App() {
  const [user, setUser] = useState(Cookies.get('user'))
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  console.log(user)

  // if (user) {
    return (
      <div className="App">
          <ChatContainer user={user} setUser={setUser}/>
      </div>
    );
  // } else {
  //   return (
  //     <div className="App">
  //       {
  //       currentForm === "login" ? <Login onFormSwitch={toggleForm} user={user} setUser={setUser} /> : <Register onFormSwitch={toggleForm} user={user} setUser={setUser}/>
  //       }
  //     </div>
  //   );
  // }
}

export default App;
