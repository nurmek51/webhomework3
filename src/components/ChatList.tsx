import React, { useState } from 'react';
import ChatItem from './ChatItem';
import type { Chat } from '../types/chatTypes';
import { Search, Settings } from 'lucide-react';

interface ChatListProps {
  chats: Chat[];
  onSelectChat: (chat: Chat) => void;
  selectedChatId: string | undefined;
}

function ChatList({ chats, onSelectChat, selectedChatId }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const personChats = filteredChats.filter(chat => chat.type === 'person');
  const aiChats = filteredChats.filter(chat => chat.type === 'ai');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-bg-primary h-full">
      {/* Search Bar */}
      <div className="p-3 border-b border-border-custom">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2 bg-bg-secondary border border-border-custom rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-teal text-text-primary"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-3 py-2 border-b border-border-custom">
        <div className="flex items-center space-x-4">
          <button className="font-medium text-sm border-b-2 border-primary-color pb-1 text-primary-color">
            All Chats
          </button>
          
          <div className="flex-1"></div>
        </div>
      </div>
      
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {personChats.length > 0 && (
          <div>
            <div className="px-4 py-2 bg-bg-secondary">
              <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Contacts</h3>
            </div>
            {personChats.map(chat => (
              <ChatItem 
                key={chat.id} 
                chat={chat} 
                onClick={() => onSelectChat(chat)}
                isSelected={chat.id === selectedChatId}
              />
            ))}
          </div>
        )}

        {aiChats.length > 0 && (
          <div>
            <div className="px-4 py-2 bg-bg-secondary">
              <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide">AI Assistants</h3>
            </div>
            {aiChats.map(chat => (
              <ChatItem 
                key={chat.id} 
                chat={chat} 
                onClick={() => onSelectChat(chat)}
                isSelected={chat.id === selectedChatId}
              />
            ))}
          </div>
        )}

        {filteredChats.length === 0 && (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <Search size={32} className="text-gray-400 mx-auto mb-3" />
              <p className="text-text-secondary text-sm">No chats found</p>
              <p className="text-gray-400 text-xs mt-1">Try a different search term</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-border-custom p-3 bg-bg-primary">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings size={18} className="text-text-secondary cursor-pointer hover:text-primary-color transition-colors" />
            <span className="text-sm text-text-secondary">Settings</span>
          </div>
          <div className="text-xs text-text-secondary">
            {filteredChats.length} chats
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;