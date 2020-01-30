import React from "react";
import s from './Modal.module.css'

interface IProps {
    isShow: boolean
    closeModal: () => void
}

const Modal: React.FC<IProps> = ({children, isShow, closeModal}) => {

    let innerCloseModal = () => {
        closeModal()
    }

    if (isShow) {
        return (
            <div className={s.showing} onClick={innerCloseModal}>
                <div className={s.modal}>
                    {children}
                </div>
            </div>);
    } else {
        return null
    }

};



export default Modal;