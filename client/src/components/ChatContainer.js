import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './ChatContainer.css';

import { ChannelListContainer, ChannelContainer } from './chat_components';

export default function ChatContainer() {

  const apiKey = '66mkrnzp4tke';

  const client = StreamChat.getInstance(apiKey);

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

