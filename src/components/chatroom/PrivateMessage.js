import React from 'react';

const PrivateMessage = ({user, sendPrivateMessage}) => {
    return (
        <div className="private-message">
            <div className="private-message__body">
                <h4>send private message to {user.userName}</h4>
                <textarea rows="5" placeholder="send a message..."></textarea>
                <button onClick={sendPrivateMessage}>send</button>
            </div>
        </div>
    );
}

export default PrivateMessage