import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react';

import { UserList } from './';
import { CloseCreateChannel } from '../../assets';

//create channel input form
const ChannelNameInput = ({ channelName = '', setChannelName }) => {
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID] || '')

  const handleChange = (event) => {
    event.preventDefault();

    setChannelName(event.target.value);
  }

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input value={channelName} onChange={handleChange} placeholder="channel-name" />
      <p>Add Members</p>
    </div>
  )
}

//close CreateChannel after and reset to notCreating 
//also render channelname input if type is Team
const CreateChannel = ({ createType, setIsCreating }) => {
  // to toggle selected users on/off and only input our own id in beginning to make sure own id is inside chat that we're creating
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID] || '')
  const [channelName, setChannelName] = useState('');

  const createChannel = async (e) => {
    e.preventDEfault();

    try {
      const newChannel = await client.channel( createType, channelName, {
        name: channelName, members: selectedUsers
      });

      await newChannel.watch();
      setChannelName("");
      setIsCreating(false);
      setSelectedUsers([client.userID]);
      setActiveChannel(newChannel);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}</p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
      <UserList setSelectedUsers={setSelectedUsers} />
      <div className="create-channel__button-werapper" onClick={createChannel}>
        <p>{createType === 'team' ?  'Create Channel' : 'Create Message Group'}</p>
      </div>
    </div>
  )
}

export default CreateChannel
