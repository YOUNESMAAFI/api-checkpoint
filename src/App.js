import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/UserList/UserList";

function App() {
  const [list, setList] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setList(response);
    console.log(response);
  };
  useEffect(() => fetchData(), []);

  return (
    <div className="App">
      <Navbar></Navbar>
      {list ? <UserList list={list}></UserList> : <div> no list</div>}
    </div>
  );
}

export default App;
