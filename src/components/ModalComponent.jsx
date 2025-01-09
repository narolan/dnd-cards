import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import * as pdfService from "../services/pdfService.jsx";

const ModalComponent = ({
                            icon,
                            titleHtml,
                            bodyHtml,
                            action,
                            actionText = "Update",
                            generatePdf,
                            generatePdfName,
                            colorPickers,
                            resetColors
                        }) => {

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
            <Modal show={show} onHide={() => {
                handleClose();
                !!resetColors() ? resetColors() : null;
            }} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {titleHtml}
                    </Modal.Title>
                </Modal.Header>-
                <Modal.Body className="modal-body">
                    {bodyHtml}
                    {!!colorPickers ? colorPickers : null}
                </Modal.Body>
                <Modal.Footer>
                    {
                        !!action ?
                            <Button
                                variant="primary"
                                onClick={
                                    () => {
                                        document.getElementById(action).click();
                                        !!resetColors() ? resetColors() : null
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
                            <section className="desktop">
                                <Button
                                    variant="primary"
                                    onClick={
                                        () => {
                                            pdfService.generatePDF("cardId", generatePdfName);
                                        }
                                    }
                                >
                                    Generate PDF
                                </Button>
                            </section>
                            :
                            null
                    }
                    <Button variant="secondary" onClick={() => { handleClose(); !!resetColors() ? resetColors() : null }}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent;