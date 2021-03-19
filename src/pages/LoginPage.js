import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/user/actions";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Login", email, password);
    dispatch(login(email, password, history));
    // const { fullName, email, password, address, isAdmin } = formData;
    // dispatch(signUp(fullName, email, password, address, isAdmin, history));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label style={{ marginRight: 20 }}>Email</label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Password</label>
          <input
            type="text"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
