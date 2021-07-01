import React from 'react';

const Message = ({ message, userId, deleteMessage }) => {
    const isMyMessage = message.user.id === userId;

    const onClickDelete = () => {
        deleteMessage(message.id)
    }

    return (
        <div className={isMyMessage ? "my-message" : 'message'}>
            {isMyMessage && <div className="delete-icon" onClick={onClickDelete}>x</div>}
            <div className="username">{message.user.userName}</div>
            <div className="content">{message.message}</div>
        </div>
    )
}


export default Message;