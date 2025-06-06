import type { Chat } from '../types/chatTypes';

export const mockChats: Chat[] = [
  {
    id: 'chat-1',
    type: 'person',
    name: 'Crystal maiden',
    avatar: 'https://dota2.ru/img/heroes/crystal_maiden/portrait.jpg',
    messages: [
      { 
        id: 'msg-1', 
        sender: 'user', 
        text: 'Hey Maiden! How was your weekend?', 
        timestamp: Date.now() - 7200000, 
        type: 'text', 
        status: 'read' 
      },
      { 
        id: 'msg-2', 
        sender: 'user', 
        text: 'It was amazing! Went middle in the map', 
        timestamp: Date.now() - 7100000, 
        type: 'text', 
        status: 'read' 
      },
      { 
        id: 'msg-3', 
        sender: 'user', 
        text: 'You should come with us next time!', 
        timestamp: Date.now() - 7000000, 
        type: 'text', 
        status: 'read' 
      },
      { 
        id: 'msg-4', 
        sender: 'user', 
        text: 'Definitely!', 
        timestamp: Date.now() - 3600000, 
        type: 'text', 
        status: 'delivered' 
      },
    ],
    lastMessagePreview: "Definitely!",
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'chat-2',
    type: 'ai',
    name: 'AI Assistant',
    avatar: 'https://dota2.ru/img/heroes/sven/portrait.jpg',
    messages: [
      
    ],
    lastMessagePreview: "Ask me anything",
    unreadCount: 0,
  },
  {
    id: 'chat-3',
    type: 'person',
    name: 'Ualeikum',
    avatar: 'https://dota2.ru/img/heroes/anti_mage/portrait.jpg',
    messages: [
      { 
        id: 'msg-8', 
        sender: 'user', 
        text: 'Hey Anti-Mage.', 
        timestamp: Date.now() - 10800000, 
        type: 'text', 
        status: 'delivered' 
      },
      { 
        id: 'msg-9', 
        sender: 'user', 
        text: 'See you there!', 
        timestamp: Date.now() - 9000000, 
        type: 'text', 
        status: 'sent' 
      },
    ],
    lastMessagePreview: "Yes, 2 PM at the usual place. See you there! 👍",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 'chat-4',
    type: 'ai',
    name: 'AI Assistant #2',
    avatar: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8d/Io_icon.png/revision/latest?cb=20160411210451',
    messages: [
      
    ],
    lastMessagePreview: "Ask me smth",
    unreadCount: 0,
  },
  {
    id: 'chat-5',
    type: 'person',
    name: 'Herald worm',
    avatar: 'https://preview.redd.it/zncu48whqb601.png?auto=webp&s=81bce34a15238d747f6fb9643574e839d30b081c',
    messages: [
      { 
        id: 'msg-12', 
        sender: 'user', 
        text: 'Thanks for the book recommendation! 📚', 
        timestamp: Date.now() - 86400000, // 1 day ago
        type: 'text', 
        status: 'read' 
      },
      { 
        id: 'msg-13', 
        sender: 'user', 
        text: 'You\'re welcome! Did you start reading it yet?', 
        timestamp: Date.now() - 82800000, 
        type: 'text', 
        status: 'read' 
      },
    ],
    lastMessagePreview: "You're welcome! Did you start reading it yet?",
    unreadCount: 0,
    isOnline: true,
  },

];