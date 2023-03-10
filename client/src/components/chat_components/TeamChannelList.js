import React, { useState } from 'react'
import { AddChannel } from '../../assets';
import { Card, Icon } from "semantic-ui-react"
function TeamChannelList({ children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

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

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header" style={{"margin-top": "10px"}}>

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