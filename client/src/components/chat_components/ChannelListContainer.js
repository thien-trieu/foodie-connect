import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import logo from '../../assets/5.png';

const cookies = new Cookies();

const CompanyHeader = () => (
  <div className="channel-list__header">
    <img src={logo} alt="logo" className="chat-logo" />
    
  </div>
)

const customPublicChannelFilter = (channels) => {
  return channels
    .filter((channel) => channel.type === 'public')
    .sort((a, b) => {
      if (a.data.name < b.data.name) return -1;
      if (a.data.name > b.data.name) return 1;
      return 0;
    });
}

const customChannelTeamFilter = (channels) => {
  return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
  return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
  const { client } = useChatContext();

  const filters = { members: { $in: [client.userID] } };
  const publicFilter = { type: "public" };

  return (
    <>
      {/* <SideBar logout={logout} /> */}
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
          <ChannelSearch setToggleContainer={setToggleContainer} />
        <ChannelList
          filters={publicFilter}
          channelRenderFilterFn={customPublicChannelFilter}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="public"
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
              type="public"
            />
          )}
        />
        <ChannelList 
            filters={filters}
          channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                        type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                          setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                      />
                    )}
                    Preview={(previewProps) => (
                      <TeamChannelPreview
                        {...previewProps}
                        setIsCreating={setIsCreating}
                        setIsEditing={setIsEditing}
                        setToggleContainer={setToggleContainer}
                        type="team"
                      />
                    )}
        />
        <ChannelList
          filters={filters}
          channelRenderFilterFn={customChannelMessagingFilter}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
              type="messaging"
            />
          )}
        />
        </div>
      </>
    );
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
  const [toggleContainer, setToggleContainer] = useState(false);

  return (
    <>
      <div className="channel-list__container">
        <ChannelListContent 
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
      </div>

        <div className="channel-list__container-responsive"
        style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#00B5AD" }}
        >
        <div className="channel-list__container-toggle" onClick={()=> setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
        </div>
        <ChannelListContent 
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            setToggleContainer={setToggleContainer}
          />
        </div>
      </>
    )

}

export default ChannelListContainer;