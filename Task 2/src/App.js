

import React, { useState } from 'react'
import './App.css';
const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const jsonData = await fetch("https://reqres.in/api/users?page=1%22");
    const data = await jsonData.json();
    console.log(data);
    setData(data.data);
  }
  return (
    <div className="app">
      <header>
        <ul>
          <li>  <h1 className="app-heading">Let's Grow More</h1></li>
          <li><button className="btn" onClick={fetchData}> Get Users</button></li>
        </ul>
      </header>
      <h2>Created by <a href="https://www.linkedin.com/in/dhanshri-borse-86a2a9215/">Dhanshri Borse</a> | All Rights Reserved</h2>
      <div className="card-container">
        {data.map(({ id, email, first_name, last_name, avatar }) => (
          <div className="card" key={id}>
            <div className="card-top">
              <img src={avatar} alt="" className="card-img" />
            </div>
            <div className="card-bottom">
              <h4>{first_name} {last_name}</h4>
              <p>{email}</p>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
}
export default App;
