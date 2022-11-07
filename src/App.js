// import React, { useState } from "react";
// import LoginForm from "./components/LoginForm";
import FetchApi from "./components/Home.js";
import { useCookies } from "react-cookie";
import "./App.css";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  // const adminUser = {
  //   email: "ngeigant@gmail.com",
  //   password: "admin",
  // };

  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");

  // const Login = (details) => {
  //   console.log(details);

  //   if (
  //     details.email === adminUser.email &&
  //     details.password === adminUser.password
  //   ) {
  //     console.log("Logged in");
  //     setUser({
  //       name: details.name,
  //       email: details.email,
  //     });
  //   } else {
  //     console.log("Details do not match!");
  //     setError("Details do not match!");
  //   }
  // };

  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({ name: "", email: "" });
  // };
  const d = new Date();
  let tid = d.getTime();
  let expireTid = tid + 60000;
  const s = new Date(expireTid);

  function handleCookie() {
    setCookie("user", "hejhej", {
      expires: s,
      path: "/",
      httpOnly: true,
    });
  }
  return (
    <div className="App">
      {/* {user.email !== '' ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )} */}
      <FetchApi />
      {cookies.user && <p>{cookies.user}</p>}
      <button onClick={handleCookie}>Set Cookie</button>
    </div>
  );
}

export default App;
