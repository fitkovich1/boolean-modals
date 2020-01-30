import React, {useState} from "react";
import Modal from "./Modal";


const Modals: React.FC = () => {

    let [isShow, setShow] = useState(true)

    let closeModalWindow = () => {
        setShow(false)
    }

    let closeModal = () => {
        setShow(false)
    }

    return (
        <div>
            <Modal isShow={isShow} closeModal={closeModal}>
                <span>Simple Modal</span>
                <button onClick={closeModalWindow}>Close</button>
            </Modal>
            <button/>
            {/*<Modal />*/}
            {/*<Modal />*/}
            {/*<Modal />*/}
            {/*<Modal />*/}
        </div>);
};

let Button = () => {

}


export default Modals;