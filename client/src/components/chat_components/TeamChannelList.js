import React, { useState } from 'react'
import { AddChannel } from '../../assets';
import { Icon } from 'semantic-ui-react';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function TeamChannelList({ children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) {

  const [isExpanded, setIsExpanded] = useState(true);
  //handle error when unable to retrieve team channels
  if (error) {
    console.log(error);
    return type === 'team' || type === 'public' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null
  }
  //handle loading state
  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === 'team' && 'Channels loading...'}
          {type === 'messaging' && 'Messages loading...'}
          {type === 'public' && 'Public Channels loading...'}
        </p>
      </div>
    )
  }

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <div className="team-channel-list__header__icon" onClick={handleToggle}>
          <Icon enabled name={isExpanded ? 'angle up' : 'angle down'} />
        </div>
        <p className="team-channel-list__header__title">
          {type === 'team' && 'Channels'}
          {type === 'messaging' && 'Direct Messages'}
          {type === 'public' && 'Public Channels'}
        </p>
        {type !== 'public' && (
        <AddChannel 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
        />
        )}
      </div>
      {isExpanded && children}
    </div>
  )
}

export default TeamChannelList