import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

function AddUser(props) {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={styles.input}>
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
