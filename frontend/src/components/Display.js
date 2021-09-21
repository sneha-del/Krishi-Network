import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../App.css";
const Display = () => {
  const [userData, setUserData] = useState([]);
  // const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/firsts")
      .then((res) => setUserData(res.data.userData))
      .catch((error) => console.log(error));
  });
  // const { userData = [] } = props;
  return (
    <>
      <div className="display">
        {userData.map((user) => (
          <div className="cards">
            <img
              className="card-img-top"
              src={user.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title"> {user.name}</h5>
              <p className="card-text">{user.email}</p>
              <h3 className="gender">{user.gender}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
