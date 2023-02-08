import './App.css';
import ChatContainer from './components/ChatContainer';


function App() {
  // const [user, setUser] = useState(Cookies.get('user'))
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // console.log(user)

  // if (user) {
    return (
      <div className="App">
          <ChatContainer />
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
