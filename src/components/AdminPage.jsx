import React, { useEffect, useState } from "react";
import ThankYou from "../pages/ThankYou";
// import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  // const navigate = useNavigate();

  function inputUserChange(e) {
    setUsername(e.target.value);
  }

  function inputPasswordChange(e) {
    setPassword(e.target.value);
  }

  function toggleLogin() {
    setIsLogin(!isLogin);
  }

  function handleClick(e) {
    e.preventDefault();
    if (username === "user" && password === "password") {
      toggleLogin();
    } else if (username !== "user") {
      alert("Username is not invalid! Please try again!");
    } else if (password !== "password") {
      alert("Password is incorrect!");
    }
  }

  if (!isLogin) {
    return <ThankYou />;
  } else {
    return (
      <div className="text-center container">
        <form action="" className="border rounded w-50 mx-auto">
          <h3 className="mt-3 mb-4">Welcome to Our Website!</h3>
          <div className="my-3">
            <label htmlFor="" className="mx-2">
              User :{" "}
            </label>
            <input
              type="text"
              name="username"
              placeholder="user..."
              className="border rounded p-2 ms-5"
              onChange={(e) => inputUserChange(e)}
            />
          </div>
          <div>
            <label htmlFor="" className="mx-2">
              Password :{" "}
            </label>
            <input
              type="text"
              name="password"
              placeholder="password..."
              className="border rounded p-2 mx-2"
              onChange={(e) => inputPasswordChange(e)}
            />
          </div>
          <div className="my-3 mx-2">
            <button
              className="me-3 py-1 px-3 "
              style={{ borderRadius: "5px" }}
              onClick={(e) => handleClick(e)}
            >
              Login
            </button>
            <button
              className="me-3 py-1 px-3 "
              style={{ borderRadius: "5px" }}
              // onClick={() => navigate("/")}
            >
              Cencel
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default AdminPage;
