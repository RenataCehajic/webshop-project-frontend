import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import { selectUserProfile } from "./store/user/selectors";
import { logout } from "./store/user/actions";

export default function App() {
  const profile = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  console.log("user data in app", profile);
  return (
    <div>
      <div>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        {profile ? (
          <div>
            <h3>Welcome {profile.fullName}</h3>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/signup" style={{ marginRight: 10 }}>
              Sign Up
            </Link>
            <Link to="/login" style={{ marginRight: 10 }}>
              Login
            </Link>
          </div>
        )}
      </div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}
