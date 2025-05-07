import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2><NavLink to = "/landing">TaskFlow</NavLink></h2>
      <nav>
        <ul>
          <li><NavLink to="/task" end>Tasks</NavLink></li>
          <li><NavLink to="/chat">Chat</NavLink></li>
          <li><NavLink to="/files">Files</NavLink></li>
          <li><NavLink to="/calendar">Calendar</NavLink></li>
          <li><NavLink to="/user">User</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
