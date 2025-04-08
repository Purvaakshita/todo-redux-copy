import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./userSlice";
import { useState } from "react";
import "./User.css";
export default function User() {
  const [userObj, setUserObj] = useState({});
  const users = useSelector((state) => state.users);
  const Dispatch = useDispatch();
  const handleAddUser = () => {
    Dispatch(addUser(userObj));
  };
  return (
    <div className="App-User-Row">
      <div>
        <h3>User Signup Form</h3>
        <p>
          <input
            placeholder="Name"
            onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            placeholder="Email address"
            onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="New password"
            onChange={(e) => setUserObj({ ...userObj, pass: e.target.value })}
          ></input>
        </p>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        <h3>User List</h3>
        <ol>
        {users &&
          users.map((value) => (
            <li>
              {value.name}-{value.email}-{value.pass}
            </li>
          ))}
          </ol>
      </div>
    </div>
  );
}
