import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
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
  );
}

function Modal(props) {
  // ReactDOM.createPortal()은 두 개의 인자를 받으며, 첫번째 인자로 렌더링 될 react 컴포넌트, 두번쨰 인자로 컴포넌트가 실제로 렌더링 되는 포인터를 받는다.
  // 컴포넌트를 부모 컴포넌트의 외부 (대표적으로 모달, 팝업 등)로 렌더링 할 경우 ReactDOM의 포탈을 사용할 수 있다.
  // 포탈 기능을 사용하면 부모-자식 관계를 유지하면서 다른 DOM에 렌더링 할 수 있기 때문에, 부모 컴포넌트의 레이아웃의 제약에서 벗어날 수 있다.
  // 즉, 포탈 기능은 UI의 독립성과 유연성을 높이는 데 중요한 역할을 수행한다.
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
