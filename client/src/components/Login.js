import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';


export default function Login(props) {

  // States for registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
    if (email === '' || password === '') {
      setError(true);
      return;
    }

    axios.post('/api/users/login', {email, password})
      .then(res => {
        
        console.log(res.data);

        Cookies.set('User', res.data);
        props.setUser(res.data);
      });

  };

  // Showing success message
  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none', }}>
        <h1>User successfully Logged in!!</h1>
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
    props.onFormSwitch('register')
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log into your account
        </Header>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <Form size='large'>
          <Segment stacked>
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
            <Button onClick={handleSubmit} color='teal' fluid size='large'>
              login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='' onClick={handleFormSwitch}>Register</a>
        </Message>
      </Grid.Column>
    </Grid>

  );
}