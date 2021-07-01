import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ChatroomMain from './ChatroomMain';
import ChatroomUsers from './ChatroomUsers';

const Chatroom = () => {
    const roomName = "Bananas";

    const myUser = {
        userName: "ReactIsTheBest",
        id: 5444454
    };

    const users = [
        {
            userName: "Moshe",
            id: nanoid()
        },
        {
            userName: "Natan",
            id: nanoid()
        },
        {
            userName: "Shir",
            id: nanoid()
        },
        {
            userName: "Michal",
            id: nanoid()
        }
    ];
    const [messages, setMessages] = useState([
        {
            message: "Hi",
            id: nanoid(),
            user: users[1]
        },
        {
            message: "Hello",
            id: nanoid(),
            user: myUser
        }
    ]);

    const deleteMessage = (messageId) => {
        setMessages(messages.filter((message) => message.id !== messageId));
    }

    const addMessage = (messageContent) => {
        setMessages(messages.concat({
            message: messageContent,
            id: nanoid(),
            user: myUser
        }));
    };

    return (
        <div className="chatroom">
            <ChatroomUsers users={users} />
            <ChatroomMain
                roomName={roomName}
                messages={messages}
                userId={myUser.id}
                addMessage={addMessage}
                deleteMessage={deleteMessage}
            />
        </div>
    );
};

export default Chatroom;