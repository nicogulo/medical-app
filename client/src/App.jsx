import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';

import { ChanellListContainer, ChannelContainer, Auth } from './components';

const apiKey = 'dve66avmjbed';
const client = StreamChat.getInstance(apiKey);
const authToken = false;

export default function App() {
  if (!authToken) {
    return <Auth />;
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanellListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  );
}
