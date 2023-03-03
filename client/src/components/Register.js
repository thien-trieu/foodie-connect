import { useState } from 'react';
import axios from 'axios';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';


export default function Register(props) {

  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  // const [cookies, setCookie] = useCookies(['user']);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the location change
  const handleLocation = (e) => {
    setLocation(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
      return;
    }

    axios.post('api/users/register', { name, email, password, location })
      .then(res => {
        console.log(res.data);
        Cookies.set('User', res.data);
        props.setUser(res.data);
        // setCookie('User', res.data, { path: '/' });
      });

  };

  // Showing success message
  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none', }}>
        <h1>User {name} successfully registered!!</h1>
      </div>);
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none', }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const handleFormSwitch = (e) => {
    e.preventDefault();
    props.onFormSwitch('login')
  }

  return (

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Register your account
        </Header>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <Form size='large'>
          <Segment stacked>
            <Form.Input onChange={handleName} fluid icon='user' iconPosition='left' placeholder='name' value={name} />
            <Form.Input onChange={handleEmail} fluid icon='at' iconPosition='left' placeholder='E-mail address' value={email} />
            <Form.Input
              onChange={handlePassword}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
            />
            <Form.Input onChange={handleLocation} fluid icon='location arrow' iconPosition='left' placeholder='Location' value={location} />
            <Button onClick={handleSubmit} color='teal' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Have an account? <a href='' onClick={handleFormSwitch}>Login</a>
        </Message>
      </Grid.Column>
    </Grid>

  );
}