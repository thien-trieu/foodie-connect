import React, { useState, useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ResturantData from './RestaurantData';

// Side Bar icons
import logoIcon from '../assets/3.png'
import LogoutIcon from '../assets/Logout.png'
import restaurantIcon from '../assets/feature-icon.png'

import 'stream-chat-react/dist/css/index.css';
import './ChatContainer.css';

import { ChannelListContainer, ChannelContainer, Auth } from './chat_components';

// Instead of setting the values here, we are going to get them
// to see if a user was logged in from Auth component
const cookies = new Cookies()
// getting the tokens
const authToken = cookies.get("token");

const client = StreamChat.getInstance('nucgcb4znxss');

// if auth token exist we create a User with all the cookies we got.
if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}


const SideBar = ({ logout, setCurrentFeature }) => {

const handleFeatureClick = (e) =>{
  e.preventDefault()
  setCurrentFeature('feature')
}
const handleChatClick = (e) =>{
  e.preventDefault()
  setCurrentFeature('chat')
}
return (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={logoIcon} alt="Hospital" width="30" onClick={handleChatClick}/>
      </div>
    </div>
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={restaurantIcon} alt="Resturant" width="30" onClick={handleFeatureClick}/>
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
)};

export default function ChatContainer() { 
  const userID = cookies.get('userId')
  console.log('USER ID', cookies.get('userId'))

  const [currentFeature, setCurrentFeature] = useState('chat');

  const toggleFeature = (feature) => {
    setCurrentFeature(feature);
  }

  const logout = () => {
    cookies.remove("token");
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');

      window.location.reload();
    }


  //set states for createType(input-field), create, edit default to false
  //then pass states into ChannelListContainer and ChannelContainer
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (!authToken) return <Auth />

  //render channellist and channels
  //edit from channelcontainer will be set in channellist after the edit but isEditing and createType only available in channel container
  return (
    <div className="app__wrapper">
      <SideBar setCurrentFeature={setCurrentFeature} currentFeature={currentFeature} toggleFeature={toggleFeature} logout={logout} />
      { currentFeature === 'feature' && <ResturantData />}
      { currentFeature === 'chat' && <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
          setCreateType={setCreateType}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>}
    </div>
  )
}

