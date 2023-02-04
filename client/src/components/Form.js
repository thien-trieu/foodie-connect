import { useState } from 'react';
import axios from 'axios'
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function Forms(props) {

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
      return 
    }

    axios.post('api/users/register', {name, email, password, location})
      .then(res => {
        console.log(res.data)
        Cookies.set('User', res.data)
        props.setUser(res.data)
        // setCookie('User', res.data, { path: '/' });
    })
    
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

  return (
    // <div className="form">
    //   <div>
    //     <h1>User Registration</h1>
    //   </div>

    //   {/* Calling to the methods */}
    //   <div className="messages">
    //     {errorMessage()}
    //     {successMessage()}
    //   </div>

    //   <form>
    //     {/* Labels and inputs for form data */}
    //     <label className="label">Name</label>
    //     <input onChange={handleName} className="input" value={name} type="text" />

    //     <label className="label">Email</label>
    //     <input onChange={handleEmail} className="input" value={email} type="email" />

    //     <label className="label">Password</label>
    //     <input onChange={handlePassword} className="input" value={password} type="password" />

    //     <label className="label">Location</label>
    //     <input onChange={handleLocation} className="input" value={location} type="text" />

    //     <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
    //   </form>

      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input onChange={handleName} fluid icon='' iconPosition='left' placeholder='name' value={name} />
          <Form.Input onChange={handleEmail} fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email} />
          <Form.Input
            onChange={handlePassword}
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
          />
          <Form.Input onChange={handleLocation} fluid icon='' iconPosition='left' placeholder='Location' value={location} />
          <Button onClick={handleSubmit} color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>




    
  );
}