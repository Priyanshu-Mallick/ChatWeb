import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <span className="logo" style={{ fontSize: "25px" }}>
          MyChat
        </span>
        <div className="user">
          <span style={{ fontSize: "20px" }}>{user.displayName}</span>
          <button
            onClick={() => auth.signOut()}
            style={{ borderRadius: "2px", height: "6vh", fontSize: "20px" }}
          >
            <b>logout</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
