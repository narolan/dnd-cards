import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import * as pdfService from "../services/pdfService.jsx";
import CustomPrimaryButton from "./CustomPrimaryButton";

const ModalComponent = ({
                            icon,
                            titleHtml,
                            bodyHtml,
                            action,
                            actionText = "Update",
                            generatePdf,
                            generatePdfName,
                            colorPickers,
                            resetAttributes,
                            boxSelectors
                        }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    return (
        <>
            <CustomPrimaryButton
                extraClasses="button-small mr-0-5"
                variant="outline-primary"
                onClick={handleShow}
                text={<FontAwesomeIcon icon={icon}/>}
            >
            </CustomPrimaryButton>
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
                    <section className="attributes">
                        <h3>Select attributes</h3>
                        {!!boxSelectors ? boxSelectors : null}
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    {
                        !!action ?
                            <CustomPrimaryButton
                                text={actionText}
                                onClick={
                                    () => {
                                        document.getElementById(action).click();
                                        setShow(false);
                                        !!resetAttributes() ? resetAttributes() : null
                                    }
                                }
                            >

                            </CustomPrimaryButton>
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