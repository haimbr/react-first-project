import React, { useState } from 'react';
import PrivateMessage from './PrivateMessage';


const ChatroomUsers = (props) => {

    const [users, setUsers] = useState(props.users)
    const [privateMessageUser, setPrivateMessageUser] = useState(null);

    const onSearch = (event) => {
        setUsers(props.users.filter((user) => user.userName.toLowerCase().includes(event.target.value)))
    }

    const sendPrivateMessage = () => {
        setPrivateMessageUser(null);
    }

    return (
        <div className="chatroom__users">
            <h3>Users</h3>
            <input type="text" placeholder="search for users" onChange={onSearch} />
            {users.map((user) => (
                <div className="user" key={user.id} onClick={() => setPrivateMessageUser(user)}>
                    {user.userName}
                </div>
            ))}
            {!!privateMessageUser && <PrivateMessage
                user={privateMessageUser}
                sendPrivateMessage={sendPrivateMessage}
            />}
        </div>
    );
};

export default ChatroomUsers;