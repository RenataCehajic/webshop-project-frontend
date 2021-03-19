import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/user/actions";
import { useHistory } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    isAdmin: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onFieldChange = (e) => {
    console.log("field changed", e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values", formData);
    const { fullName, email, password, address, isAdmin } = formData;
    dispatch(signUp(fullName, email, password, address, isAdmin, history));
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label style={{ marginRight: 20 }}>Name</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={onFieldChange}
          ></input>
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Email</label>
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={onFieldChange}
          ></input>
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Password</label>
          <input
            type="text"
            value={formData.password}
            name="password"
            onChange={onFieldChange}
          ></input>
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Address</label>
          <input
            type="text"
            value={formData.address}
            name="address"
            onChange={onFieldChange}
          ></input>
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Are you admin?</label>
          <select
            value={formData.isAdmin}
            name="isAdmin"
            onChange={onFieldChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//  <input
//    type="text"
//    value={formData.isAdmin}
//    name="isAdmin"
//    onChange={onFieldChange}
//  ></input>;
