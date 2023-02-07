import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';


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

export default function ChatContainer() {
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
      <Chat client={client} theme="team light">
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
      </Chat>
    </div>
  )
}

