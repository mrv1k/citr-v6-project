import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elementRef = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elementRef.current);
    return () => modalRoot.removeChild(elementRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
