import React from 'react'
import { MessageStatus, MessageText, Avatar, MessageRepliesCountButton } from 'stream-chat-react';

const TeamMessage = () => {
  return (
    <div>
      <MessageStatus />
      <Avatar />
      <div>
        <MessageText />
      </div>
      <MessageRepliesCountButton />
    </div>
  )
}


export default TeamMessage
