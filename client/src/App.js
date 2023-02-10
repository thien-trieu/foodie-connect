import React, { useState, useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// Helper function
import { fetchRestaurants } from './helper/fetchRestaurants';

// Components
import ResturantData from './components/RestaurantData';
import MatchGame from './components/game_components/MatchGame';
import { ChannelListContainer, ChannelContainer } from './components/chat_components';
import SideBar from './components/SideBar';
import Auth from './components/Auth.js';
import Profile from './components/Profile';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

// Instead of setting the values here, we are going to get them
// to see if a user was logged in from Auth component
const cookies = new Cookies();
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
  }, authToken);
}

export default function App() {

  const [resData, setResData] = useState([]);
  const [currentFeature, setCurrentFeature] = useState('chat');

  useEffect(() => {
    fetchRestaurants("Vancouver", "Burgers", setResData);

  }, []);

  const toggleFeature = (feature) => {
    setCurrentFeature(feature);
  };

  const logout = () => {
    cookies.remove("token");
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');

    window.location.reload();
  };

  //set states for createType(input-field), create, edit default to false
  //then pass states into ChannelListContainer and ChannelContainer
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (!authToken) return <Auth />;

  //render channellist and channels
  //edit from channelcontainer will be set in channellist after the edit but isEditing and createType only available in channel container
  return (
    <div className="app__wrapper">
      <SideBar setCurrentFeature={setCurrentFeature} currentFeature={currentFeature} toggleFeature={toggleFeature} logout={logout} />
      {currentFeature === 'restuarant-search' && <ResturantData resData={resData} setResData={setResData} fetchRestaurants={fetchRestaurants} />}
      {currentFeature === 'match-game' && <MatchGame />}
      {currentFeature === 'profile' && <Profile />}
      {currentFeature === 'chat' && <Chat client={client} theme="team light">
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
  );
}

