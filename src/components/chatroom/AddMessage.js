import React from 'react';

const AddMessage = (props) =>{
    const onSubmitMessage = (event) => {
        event.preventDefault();
        const message = event.target.firstChild.firstChild.value.trim();
        if(message.length > 0){
            props.addMessage(message);
        }
        event.target.firstChild.firstChild.value = "";
    }
    return (
        <form onSubmit={onSubmitMessage}>
            <div className="message-input">
                <input/>
                <button type="submit">send</button>
            </div>
        </form> 
    )
}

export default AddMessage;