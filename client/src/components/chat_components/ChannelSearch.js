import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../../assets';


function ChannelSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const onSearch = (event) => {
    event.preventDefault();
  
    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value)
  }

  const getChannels = async (text) => {
    try {
      // TODO: Fetch channels

        // const channelResponse = client.queryChannels({
        //     type: 'team', 
        //     name: { $autocomplete: text }, 
        //     members: { $in: [client.userID]}
        // });
        // const userResponse = client.queryUsers({
        //     id: { $ne: client.userID },
        //     name: { $autocomplete: text }
        // })

        // const [channels, { users }] = await Promise.all([channelResponse, userResponse]);

        // if(channels.length) setTeamChannels(channels);
        // if(users.length) setDirectChannels(users);

    } catch (error) {
        setQuery('')
    }
}


  
  return (
    <div className="channel-search__container">
    <div className="channel-search__input__wrapper">
        <div className="channel-serach__input__icon">
            <SearchIcon />
        </div>
        <input 
            className="channel-search__input__text" 
            placeholder="Search" 
            type="text" 
            value={query}  
            onChange={onSearch}
        />
    </div>
  </div>
  )
}

export default ChannelSearch