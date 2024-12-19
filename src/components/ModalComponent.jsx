import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import * as pdfService from "../services/pdfService.jsx";

const ModalComponent = ({ icon, titleHtml, bodyHtml, action, actionText = "Update", generatePdf, generatePdfName }) => {

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
                        {titleHtml}
                    </Modal.Title>
                </Modal.Header>-
                <Modal.Body>
                    {bodyHtml}
                </Modal.Body>
                <Modal.Footer>
                    {
                        !!action ?
                            <Button
                                variant="primary"
                                onClick={
                                    () => {
                                        document.getElementById(action).click();
                                        setShow(false);
                                    }
                                }
                            >
                                {actionText}
                            </Button>
                            :
                            null
                    }
                    {
                        generatePdf ?
                            <Button
                                variant="primary"
                                onClick={
                                    () => pdfService.generatePDF("cardId", generatePdfName)
                                }
                            >
                                Generate PDF
                            </Button>
                            :
                            null
                    }
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent;