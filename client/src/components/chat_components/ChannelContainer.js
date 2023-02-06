import React from 'react'
import { Channel, useChatContext, MessageTeam } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

function ChannelContainer({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) {
  // channel context from stream
  const { channel } = useChatContext();
  //create channel
  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }
  //edit channel
  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div> 
    )
  }

//when new chat has no message history
  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">Start chatting now!</p>
      <p className="channel-empty__second">Send an emojis or video links too!</p>
    </div>
  )

  return (

    //channel_container to hold channels
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  )
}

export default ChannelContainer