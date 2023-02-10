import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { ResultsDropdown } from './'


const ChannelSearch = ({ setToggleContainer }) => {
    const { client, setActiveChannel } = useChatContext();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [teamChannels, setTeamChannels] = useState([])
    const [directChannels, setDirectChannels] = useState([])





    useEffect(() => {
        if(!query) {
            setTeamChannels([]);
            setDirectChannels([]);
        }
    }, [query])

    const getChannels = async (text) => {
        try {

            const channelResponse = client.queryChannels({
                type: 'team', 
                name: { $autocomplete: text }, 
                members: { $in: [client.userID]}
            });
            const userResponse = client.queryUsers({
                id: { $ne: client.userID },
                name: { $autocomplete: text }
            })

            const [channels, { users }] = await Promise.all([channelResponse, userResponse]);
          // if (publicChannelsResult.length) setPublicChannels(publicChannelsResult);
            if(channels.length) setTeamChannels(channels);
            if(users.length) setDirectChannels(users);
        } catch (error) {
            setQuery('')
        }
    }

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value)
    }

    const setChannel = (channel) => {
        setQuery('');
        setActiveChannel(channel);
    }

    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
  
        <div className="wrapper">
          <div className="search">
            <span className="uil uil-search"></span>
            <input
                className="channel-search__input__text" 
                placeholder="Search" 
                type="text" 
                value={query}  
                onChange={onSearch}
            />
          </div>
            { query && (
            <ResultsDropdown 
                teamChannels={teamChannels}
                directChannels={directChannels}
                loading={loading}
                setChannel={setChannel}
                setQuery={setQuery}
                setToggleContainer={setToggleContainer}
            />
        )}
        </div>
      </>
    );
    }
    
    export default ChannelSearch
    