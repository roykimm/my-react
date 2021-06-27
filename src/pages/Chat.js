import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import '../css/Chat.css';
import ChatFeed from './chatcomponents/ChatFeed';
import LoginForm from './chatcomponents/LoginForm';


const Chat = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="5ac5b916-ba25-44c2-87f9-37c4f31724e8"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    )
}

export default Chat;