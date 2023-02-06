import React from 'react'
import { Channel, useChatContext, MessageStatus, ReactionsList, ReactionSelector, Attachment, MessageText, Avatar, MessageRepliesCountButton } from 'stream-chat-react';

const TeamMessage = () => {
  return (
    <div>
      <MessageStatus />
      <Avatar />

      <div>
        <MessageText />
      </div>
      {/* <div>
      <ReactionsList />
      <ReactionSelector />
    </div> */}
      <MessageRepliesCountButton />
    </div>
  )
}

export default TeamMessage
