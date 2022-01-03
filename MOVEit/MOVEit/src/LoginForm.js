import React, { useState } from "react";
import { getAuthToken } from "./services/authentication";
import styles from "./index.css";

export default function LoginForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Get the authentication token for given Username and Passowrd
    getAuthToken(username, password)
      .then((response) => response.json())
      .then((data) => {
        const token = data.access_token;
        setToken(token);
      })
      .catch(() => { });
  };

  return (
    <h1>
      MOVEit-Mobile-1
      <h2>
        <div class="login">
          <form onSubmit={handleSubmit}>
            <label className="labelCredentials" style={styles.labelCredentials}>
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Username"
              onChange={(ev) => setUsername(ev.target.value)}/>
            <br></br>

            <label className="labelCredentials" style={styles.labelCredentials}>
              <b>Password</b>
            </label>
            <input
              type="Password"
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}/>
            <br></br>

            <input
              className="logInButton"
              style={styles.log}
              type="submit"
              value="Log IN"/>
          </form>{" "}
        </div>
      </h2>
    </h1>
  );
}
