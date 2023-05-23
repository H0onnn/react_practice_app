import React from "react";
import styles from "./Adduser.module.css";
import Card from "../UI/Card";

function AddUser(psops) {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
