import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import * as pdfService from "../services/pdfService.jsx";
import CustomButton from "./CustomButton";

const ModalComponent = ({
                            icon,
                            titleHtml,
                            bodyHtml,
                            action,
                            actionText = "Update",
                            generatePdf,
                            generatePdfName,
                            generatePdfMultiple,
                            colorPickers,
                            resetAttributes,
                            boxSelectors
                        }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    return (
        <>
            <CustomButton
                extraClasses="button-small mr-0-5"
                variant="outline-primary"
                onClick={handleShow}
                text={<FontAwesomeIcon icon={icon}/>}
            >
            </CustomButton>
            <Modal show={show} onHide={() => {
                handleClose();
                !!resetAttributes() ? resetAttributes() : null;
            }} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {titleHtml}
                    </Modal.Title>
                </Modal.Header>-
                <Modal.Body className="modal-body">
                    {bodyHtml}
                    {!!colorPickers ? colorPickers : null}
                    {
                        !!boxSelectors ?
                            <section className="attributes">
                                <h3>Select attributes</h3>
                                {boxSelectors}
                            </section>
                            : null
                    }
                </Modal.Body>
                <Modal.Footer>
                    {
                        !!action ?
                            <CustomButton
                                text={actionText}
                                onClick={
                                    () => {
                                        document.getElementById(action).click();
                                        setShow(false);
                                        !!resetAttributes() ? resetAttributes() : null
                                    }
                                }
                            >

                            </CustomButton>
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
                                            pdfService.generatePDF("cardId", generatePdfName, generatePdfMultiple);
                                        }
                                    }
                                >
                                    Generate PDF
                                </Button>
                            </section>
                            :
                            null
                    }
                    <Button variant="secondary" onClick={() => {
                        handleClose();
                        !!resetAttributes() ? resetAttributes() : null
                    }}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent;