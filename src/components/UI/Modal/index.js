import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import style from './styles.module.scss';

const Backdrop = (props) => {
  return (
    <div className={style.backdrop} onClick={props.onClick}></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>
        {props.children}
      </div>
    </div>
  )
}
/* Portais necessitam de dois parâmetros 1-component 2-local de despejo  */
const portalElements = document.querySelector('#overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, portalElements)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          {props.children}
        </ModalOverlay>, portalElements)}
    </Fragment>
  )
};

export default Modal;