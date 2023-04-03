import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(null);
  const [err, setErr] = useState(false);

  const { user } = useContext(AuthContext);

  const handleSearch = async () => {};
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {};
  return (
    <div className="search">
      <hr />
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {users && (
        <div className="userChat" onClick={handleSelect}>
          <div className="userChatInfo">
            <span>{users.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
