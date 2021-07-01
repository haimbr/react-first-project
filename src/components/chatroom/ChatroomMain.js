
import React from 'react';
import Message from './Message';
import AddMessage from './AddMessage';

const ChatroomMain = (props) => {

    return (
        <div className="chatroom__main">
            <div className="chatroom__container">
                <h3>Room Name: {props.roomName}</h3>
                {props.messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                        userId={props.userId}
                        deleteMessage={props.deleteMessage}
                    />
                ))}
            </div>
            <AddMessage addMessage={props.addMessage} />
        </div>
    );
};

export default ChatroomMain;