import React from "react";
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";
// import { useNavigate } from "react-router-dom";

function Modal(props) {
  //   const navigate = useNavigate();

  //   const closeHandler = () => {
  //     navigate("..");
  //   };

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Modal;
