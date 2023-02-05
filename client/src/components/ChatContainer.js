import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './ChatContainer.css';

import { ChannelListContainer, ChannelContainer, Auth } from './chat_components';

const apiKey = '66mkrnzp4tke';
const client = StreamChat.getInstance(apiKey);

// Instead of setting the values here, we are going to get them
// to see if a user was logged in from Auth component
const cookies = new Cookies()
// getting the tokens
const authToken = cookies.get("token");

// if auth token exist we create a User with all the cookies we got.
if(authToken) {
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

  if (!authToken) return <Auth />

  return (
    <div className="app__wrapper">
    <Chat client={client} theme="team light">
        <ChannelListContainer 

        />
        <ChannelContainer 

        />
    </Chat>
  </div>
  )
}

