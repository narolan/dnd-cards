import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import BeastForm from "./BeastForm";

const BeastModal = ({ icon, beast, readOnly, setBeasts }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    return (
        <>
            <Button
                className="button-small mr-0-5"
                variant="outline-primary"
                onClick={handleShow}
            >
                <FontAwesomeIcon icon={icon}/>
            </Button>
            <Modal show={show} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img
                            width="50"
                            height="50"
                            alt="N/A"
                            src={beast.img_url}
                        />
                        <p className="pl-0-5">{beast.name}</p>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                {
                    readOnly ?
                        <fieldset disabled>
                            <BeastForm beast={beast} readOnly={true}/>
                        </fieldset>
                        :
                        <BeastForm beast={beast} readOnly={false} setBeasts={setBeasts} handleClose={handleClose}/>
                }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BeastModal;