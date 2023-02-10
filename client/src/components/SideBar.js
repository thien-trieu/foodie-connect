import { Button, Header, Image, Modal } from 'semantic-ui-react';
import React from 'react'
// Side Bar icons
import logoIcon from '../assets/3.png';
import LogoutIcon from '../assets/Logout.png';
import restaurantIcon from '../assets/restaurantIcon.png';
import matchIcon from '../assets/matchgameicon.png';
import profileIcon from '../assets/2.png';

export default function SideBar ({ logout, setCurrentFeature }) {

  const [open, setOpen] = React.useState(false);

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

  const handleProfileClick = (e) => {
    e.preventDefault();
    setCurrentFeature('profile');
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
          <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
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