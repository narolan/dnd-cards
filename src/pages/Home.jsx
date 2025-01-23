import React, {useState} from 'react';
import './index.css';
import * as storageService from "../services/storageService";
import Form from "react-bootstrap/Form";
import CustomButton from "../components/CustomButton";

const Home = () => {

    const [importData, setImportData] = useState('');

    const handleImportChange = (event) => {
        setImportData(event.target.value);
    }

    function encodeToBase64(str) {
        const encoder = new TextEncoder();
        const data = encoder.encode(str);
        let binary = '';
        const len = data.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(data[i]);
        }
        return window.btoa(binary);
    }

    function getDataAsBase64() {
        let monsters = storageService.getItem('monsters');
        let spells = storageService.getItem('spells');

        const data = {
            "monsters": monsters,
            "spells": spells
        }

        let encoded = encodeToBase64(JSON.stringify(data));
        let base64 = btoa(encoded);
        navigator.clipboard.writeText(base64);
        alert('Data copied to clipboard');
    }

    function decodeFromBase64(base64) {
        const binary = window.atob(base64);
        const len = binary.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        const decoder = new TextDecoder();
        return decoder.decode(bytes);
    }

    function importDataIntoStorage() {
        let data = decodeFromBase64(importData);
        let parsed = JSON.parse(atob(data));
        storageService.setItem('monsters', parsed.monsters);
        storageService.setItem('spells', parsed.spells);
        handleImportChange({target: {value: ''}});
        alert('Data imported');
    }

    return (
        <article>
            <h1 className="title">Welcome to DnD Cards</h1>
            <h2 className="title">Legal Information</h2>
            <section className="block">
                <p className="text">
                    This work includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by Wizards of the Coast LLC and available at <a href={"https://dnd.wizards.com/resources/systems-reference-document"}>https://dnd.wizards.com/resources/systems-reference-document</a>.
                    The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at <a href={"https://creativecommons.org/licenses/by/4.0/legalcode"}>https://creativecommons.org/licenses/by/4.0/legalcode</a>.
                </p>
            </section>
            <h2 className="title">Purpose</h2>
            <section className="block">
                <p className="text">The purpose of this application is to create cards for Dungeon & Dragons 5th Edition.</p>
                <p className="text">You can use them through the (mobile) application or print them from your desktop/laptop as actual cards.</p>
                <p className="text">All the info is stored locally, so no syncing happens between mobile and desktop.</p>
            </section>
            <section className="block" style={{ marginTop: "10px", marginBottom: "2rem" }}>
                <h4>Export/Import</h4>
                <p className="text">In order to sync data between devices we currently support exporting and importing data.</p>
                <p className="text">Simply push the export button. This will generate a hashed version of your data. Go to your other device, paste the hashed text and press 'Import'.</p>
                <CustomButton
                    onClick={() => getDataAsBase64()}
                    text={"Export"}
                />
                <Form style={{ width: '60%', textAlign: "center" }}>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }} controlId="importData">
                        <Form.Label column="lg">Import</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={importData}
                            onChange={handleImportChange}
                        />
                    </Form.Group>
                    <CustomButton
                        onClick={importDataIntoStorage}
                        text={"Import"}
                    />
                </Form>
            </section>
        </article>
    );
};

export default Home;