import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Display from "../components/Display";
import { useHistory } from "react-router";
import "../App.css";
const Homepage = ({ userData }) => {
  const history = useHistory();
  const [krishi, setKrishi] = useState({
    name: "",
    email: "",
    gender: "",
    image: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setKrishi({
      ...krishi,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, gender, image } = krishi;
    const res = await fetch("/first", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        gender,
        image,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Data!!");
    } else {
      window.alert("Sucessffuly Added !!!");
      history.push("/");
      //   history.push("/alogin");
    }
  };

  return (
    <>
      <div className="Homepage">
        <div></div>

        <form method="POST" encType="multipart/form-data">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-controls"
              id="exampleInputName"
              value={krishi.name}
              onChange={handleInputs}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-controls"
              id="exampleInputEmail1"
              value={krishi.email}
              onChange={handleInputs}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="gender"
              className="form-controls"
              id="exampleInputGender"
              value={krishi.gender}
              onChange={handleInputs}
              placeholder="Enter Gender"
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              name="image"
              value={krishi.image}
              onChange={handleInputs}
              className="form-control-file"
              id="exampleFormControlFile1"
              style={{ color: "white" }}
            />
          </div>
          <div className="form-group form-button">
            <input
              type="submit"
              name="signup"
              id="signup"
              className="form-submit"
              value="Register"
              onClick={PostData}
            />
          </div>
        </form>
      </div>
      <Display />
      <div className="button" onClick={() => history.push("/mandi")}>
        Fetch Data of Mandi
      </div>
    </>
  );
};

export default Homepage;
