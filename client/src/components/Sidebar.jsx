import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chatss from "./Chatss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chatss />
    </div>
  );
};

export default Sidebar;
