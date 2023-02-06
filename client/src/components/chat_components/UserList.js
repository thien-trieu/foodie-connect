import React, { useEffect, useState } from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

import { InviteIcon } from '../../assets';

//pass in children components (UserList and UserItem) to ListContainer
//ListContainer for userList
const ListContainer = ({ children }) => {
  return (
    <div className="user-list__container">
      <div className="user-list__header">
        <p>User</p>
        <p>Invite</p>
      </div>
      {children}
    </div>
  )
}

//pass user and setSelectedUsers in as props
const UserItem = ({ user, setSelectedUsers }) => {
  //setState for default unselected icon
  const [selected, setSelected] = useState(false)
  //handle inviteicon select, toggle inviteicon checked and empty checkbox
  const handleSelect = () => {
    //if item clicked/selected which is the user.id, filter out and exclude user.id in prevUsers
    if (selected) {
      setSelectedUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser !== user.id))
    } else {
      //spread previous users, and append and include user.id of the new clicked
      setSelectedUsers((prevUsers) => [...prevUsers, user.id])
    }
    //toggle to previous state
    setSelected((prevSelected) => !prevSelected)
  }
  //render Avatar and username, logic to  with handleSelect
  return (
    <div className="user-item__wrapper" onClick={handleSelect}>
      <div className="user-item__name-wrapper">
        <Avatar image={user.image} name={user.fullName || user.id} size={32} />
        <p className="user-item__name">{user.fullName || user.id}</p>
      </div>
      {selected ? <InviteIcon /> : <div className="user-item__invite-empty" />}
    </div>
  )
}

//render userList 
const UserList = ({ setSelectedUsers }) => {
  const { client } = useChatContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listEmpty, setListEmpty] = useState(false);
  const [error, setError] = useState(false);

  //populate users accordingly to filter of team or direct msgs
  useEffect(() => {
    const getUsers = async () => {
      //if loading something don't return users
      if (loading) return;
      //if not loading, then set loading to true and load users
      setLoading(true);

      try {
        //query users from useChatContext by id not equal to the user's own id, sort with id: 1, and limit to 8 users and 
        const response = await client.queryUsers(
          { id: { $ne: client.userID } },
          { id: 1 },
          { limit: 8 }
        );
        //setUsers to response query 
        if (response.users.length) {
          setUsers(response.users);
        } else {
          //setListEmpty state to true
          setListEmpty(true);
        }
      } catch (error) {
        setError(true);
      }
      //reset loading state after
      setLoading(false);
    }

    if (client) getUsers()
  }, []);

  if (error) {
    return (
      <ListContainer>
        <div className="user-list__message">
          Error loading, please refresh and try again.
        </div>
      </ListContainer>
    )
  }

  if (listEmpty) {
    return (
      <ListContainer>
        <div className="user-list__message">
          No users found.
        </div>
      </ListContainer>
    )
  }
  //if loading state render loading message 
  //if not loading, check for users and render with map pass in unique id and user 
  return (
    <ListContainer>
      {loading ? <div className="user-list__message">
        Loading users...
      </div> : (
        users?.map((user, i) => (
          <UserItem index={i} key={user.id} user={user} setSelectedUsers={setSelectedUsers} />
        ))
      )}
    </ListContainer>
  )
}


export default UserList;