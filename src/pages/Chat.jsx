import React, { useState } from 'react';
import { Box } from "@mui/material";
import MessageSidebar from '../components/MessageSidebar';
import Chatfeed from '../components/Chatfeed';
import MessagesRightSideBar from '../components/MessagesRightSideBar';
import colors from '../common/colors';

const initialMessages = [
  {
    id: 1,
    name: "Matial. AB",
    avatar: require("../assets/images/businsswoman-avatar.png"),
    lastMessage: "Ok",
    lastTime: "10:45 AM",
    unread: false,
    address: "Addis Ababa",
    lastOnline: "10:50 AM",
    timezone: "GMT+3",
    responseTime: "10 min",
    messages: [
      { from: "them", text: "Hello, is the house still available?", time: "10:40 AM" },
      { from: "me", text: "Yes, it is available.", time: "10:41 AM" },
      { from: "them", text: "Ok", time: "10:45 AM" },
    ],
  },
  {
    id: 2,
    name: "Sara K.",
    avatar: require("../assets/images/businsswoman-avatar.png"),
    lastMessage: "See you tomorrow!",
    lastTime: "09:30 AM",
    unread: false,
    address: "Adama",
    lastOnline: "Yesterday",
    timezone: "GMT+3",
    responseTime: "1 hour",
    messages: [
      { from: "me", text: "Hi Sara!", time: "09:00 AM" },
      { from: "them", text: "See you tomorrow!", time: "09:30 AM" },
    ],
  },
  // ...add more users as needed
];

function Chat() {
  const [users, setUsers] = useState(initialMessages);
  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || null);

  const selectedUser = users.find(u => u.id === selectedUserId);

  // Handle sending a message
  const handleSendMessage = (text) => {
    if (!selectedUserId || !text.trim()) return;
    setUsers(users =>
      users.map(u =>
        u.id === selectedUserId
          ? {
              ...u,
              messages: [...u.messages, { from: "me", text, time: "Now" }],
              lastMessage: text,
              lastTime: "Now",
            }
          : u
      )
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        // height: 'calc(100vh - 80px)',
        mt: "80px",
        background: colors.background,
        fontFamily: 'Poppins, Arial, sans-serif',
        overflow: "hidden"
      }}
    >
      {/* Left: Sidebar */}
      <Box sx={{ flex: "1 0 320px", minWidth: 300, maxWidth: 350, height: "100%" }}>
        <MessageSidebar
          users={users}
          selectedUserId={selectedUserId}
          onSelectUser={setSelectedUserId}
        />
      </Box>

      {/* Center: Chat Feed */}
      <Box sx={{ flex: "2 1 0%", minWidth: 0, height: "100%", borderLeft: `1px solid ${colors.background}`, borderRight: `1px solid ${colors.background}` }}>
        <Chatfeed
          user={selectedUser}
          onSendMessage={handleSendMessage}
        />
      </Box>

      {/* Right: User Info */}
      <Box sx={{ flex: "1 0 320px", minWidth: 300, maxWidth: 350, height: "100%" }}>
        <MessagesRightSideBar user={selectedUser} />
      </Box>
    </Box>
  );
}

export default Chat;