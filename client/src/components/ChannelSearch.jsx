import React, { useEffect, useState } from 'react';
import { getChannel, useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

export default function ChannelSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannel = async (text) => {
    try {
    } catch (error) {
      setQuery('');
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannel(e.target.value);
  };
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="channel-search__input__text"
          placeholder="Search"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
