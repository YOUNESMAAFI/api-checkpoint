import React from "react";
import "./User.css";

const User = (elem) => {
  return (
    <div className="user">
      <div className="user name"> {`Name :${elem.elem.name}`} </div>
      <div className="user username"> {`Username :${elem.elem.username}`} </div>
      <div className="user email"> {`Email :${elem.elem.email}`} </div>
      <div className="user phone"> {`Phone :${elem.elem.phone}`} </div>
      <div className="user adress">
        {`Adress :${elem.elem.address.suite} ${elem.elem.address.street} , ${elem.elem.address.city}. ${elem.elem.address.zipcode}`}
      </div>
    </div>
  );
};

export default User;
