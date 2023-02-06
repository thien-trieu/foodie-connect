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


{/* <div className="user-item__name-wrapper">
<Avatar image={user.image} name={user.fullName || user.id} size={32} />
<p className="user-item__name">{user.fullName || user.id}</p>
</div> */}
export default TeamMessage
