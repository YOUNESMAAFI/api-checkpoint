import "./UserList.css";

import React from "react";
import User from "../User/User";

const UserList = (list) => {
  return (
    <div className="display">
      Hello Users
      {list.list.data.map((elem, index) => {
        return <User key={index} elem={elem}></User>;
      })}
    </div>
  );
};

export default UserList;
