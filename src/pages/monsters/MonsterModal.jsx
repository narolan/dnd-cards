import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import MonsterForm from "./MonsterForm";

const MonsterModal = ({ icon, monster, readOnly, setMonsters }) => {

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
                            src={monster.img_url}
                        />
                        <p className="pl-0-5">{monster.name}</p>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                {
                    readOnly ?
                        <fieldset disabled>
                            <MonsterForm monster={monster} readOnly={true}/>
                        </fieldset>
                        :
                        <MonsterForm monster={monster} readOnly={false} setMonsters={setMonsters} handleClose={handleClose}/>
                }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MonsterModal;