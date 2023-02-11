import { Button, Header, Image, Modal } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

// Side Bar icons
import logoIcon from '../assets/3.png';
import LogoutIcon from '../assets/Logout.png';
import restaurantIcon from '../assets/restaurantIcon.png';
import matchIcon from '../assets/matchgameicon.png';
import profileIcon from '../assets/2.png';

import { Form } from 'semantic-ui-react';

const updateUser = async (userID, fullName, URL, client) => {
  const update = {
    id: userID,
    set: {
      fullName: fullName,
      image: URL,
    },
  };
  await client.partialUpdateUser(update);
};

const cookies = new Cookies();

export default function SideBar({ logout, setCurrentFeature, client, userInfo, setUserInfo }) {
  console.log(userInfo)
  const initialState = {
    fullName: userInfo.fullName,
    image: userInfo.image
  };
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };


  const [open, setOpen] = useState(false);

  const handleRestaurantClick = (e) => {
    e.preventDefault();
    setCurrentFeature('restuarant-search');
  };
  const handleChatClick = (e) => {
    e.preventDefault();
    setCurrentFeature('chat');
  };

  const handleMatchGameClick = (e) => {
    e.preventDefault();
    setCurrentFeature('match-game');
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const { fullName, image } = form;
   
    await updateUser(userInfo.id, fullName, image, client); 
    await cookies.set('fullName', fullName);
    await cookies.set('avatarURL', image);
    await setUserInfo({ ...userInfo, fullName: fullName, image: image })
    console.log('UPDATING USER', userInfo)
    setOpen(false);
    ;
  };
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={logoIcon} alt="Chat" width="30" onClick={handleChatClick} />
        </div>
      </div>
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={restaurantIcon} alt="Restaurant" width="30" onClick={handleRestaurantClick} />
        </div>
      </div>
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={matchIcon} alt="Match-Game" width="30" onClick={handleMatchGameClick} />
        </div>
      </div>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
              <img src={profileIcon} alt="Profile" width="30" />
            </div>
          </div>
        }>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={userInfo.image} wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
            Full Name: {userInfo.fullName}
            <Form>
              <Form.Field>
                <label>Update Full Name</label>
                <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} />
                <label>Update Avatar</label>
                <input name="image" type="text" placeholder="Avatar URL (direct link)" onChange={handleChange} />
                <Button color='black' onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  content="Update Profile"
                  labelPosition='right'
                  icon='checkmark'
                  onClick={handleProfileSubmit}
                  positive
                />
              </Form.Field>

            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>


        </Modal.Actions>
      </Modal>

      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
          <img src={LogoutIcon} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  );
};