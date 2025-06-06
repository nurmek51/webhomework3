import type { Chat } from '../types/chatTypes';
import { Bot, Check, CheckCheck } from 'lucide-react';

interface ChatItemProps {
  chat: Chat;
  onClick: () => void;
  isSelected: boolean;
}

function ChatItem({ chat, onClick, isSelected }: ChatItemProps) {
  // Format the last message time
  const formatTime = (timestamp: number) => {
    const now = new Date();
    const messageDate = new Date(timestamp);
    const diffInHours = (now.getTime() - messageDate.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return messageDate.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
    } else if (diffInHours < 168) { // Less than a week
      return messageDate.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return messageDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  const lastMessage = chat.messages[chat.messages.length - 1];
  const lastMessageTime = lastMessage ? formatTime(lastMessage.timestamp) : '';

  return (
    <div 
      className={`chat-item flex items-center px-4 py-3 cursor-pointer border-b border-border-custom hover:bg-hover-bg ${
        isSelected ? 'bg-active-bg' : ''
      }`}
      onClick={onClick}
    >
      {/* Avatar Container */}
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-400 flex items-center justify-center text-white font-semibold text-xl border-2 border-bg-primary">
          {chat.avatar ? (
            <img 
              src={chat.avatar} 
              alt={`${chat.name} avatar`} 
              className="w-full h-full object-cover"
            />
          ) : (
            chat.type === 'ai' ? (
              <Bot size={24} />
            ) : (
              chat.name.charAt(0).toUpperCase()
            )
          )}
        </div>
        
        {/* Online Status Indicator */}
        {chat.type === 'person' && (
          <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-bg-primary ${
            chat.isOnline ? 'bg-status-online' : 'bg-status-offline'
          }`} />
        )}
      </div>

      {/* Chat Info */}
      <div className="flex-1 min-w-0 ml-4">
        <div className="flex items-center justify-between mb-0.5">
          <h3 className="font-bold text-text-primary truncate text-base">
            {chat.name}
            {chat.type === 'ai' && (
              <Bot size={16} className="inline ml-1 text-text-secondary" />
            )}
          </h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            {/* Message Status Icons */}
            {lastMessage && lastMessage.sender === 'user' && (
              <div className="text-text-secondary">
                {lastMessage.status === 'sent' && <Check size={14} />}
                {lastMessage.status === 'delivered' && <CheckCheck size={14} />}
                {lastMessage.status === 'read' && <CheckCheck size={14} className="text-primary-color" />}
              </div>
            )}
            <span className="text-xs text-text-secondary">{lastMessageTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-text-secondary truncate pr-2">
            {chat.lastMessagePreview || 'No messages yet'}
          </p>
          
          {/* Unread Count Badge */}
          {chat.unreadCount > 0 && (
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary-color rounded-full">
                {chat.unreadCount > 99 ? '99+' : chat.unreadCount}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatItem;