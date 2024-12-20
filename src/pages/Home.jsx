import React, {useState} from 'react';
import './index.css';
import Button from "react-bootstrap/Button";
import * as storageService from "../services/storageService";
import Form from "react-bootstrap/Form";

const Home = () => {

    const [importData, setImportData] = useState('');

    const handleImportChange = (event) => {
        setImportData(event.target.value);
    }

    function getDataAsBase64() {
        let monsters = storageService.getItem('monsters');
        let spells = storageService.getItem('spells');

        const data = {
            "monsters": monsters,
            "spells": spells
        }

        let base64 = btoa(JSON.stringify(data));
        navigator.clipboard.writeText(base64);
        alert('Data copied to clipboard');
    }

    function importDataIntoStorage() {
        let data = atob(importData);
        let parsed = JSON.parse(data);
        storageService.setItem('monsters', parsed.monsters);
        storageService.setItem('spells', parsed.spells);
        handleImportChange({target: {value: ''}});
        alert('Data imported');
    }

    return (
        <article>
            <h1 className="title">Welcome to DnD Cards</h1>
            <section className="block">
                <p className="text">The purpose of this application is to create cards for Dungeon & Dragons.</p>
                <p className="text">You can use them through the application or print them from your desktop/laptop as actual cards.</p>
                <p className="text">All the info is stored locally, so no syncing happens between mobile and desktop.</p>
            </section>
            <section className="block" style={{ marginTop: "10px", marginBottom: "2rem" }}>
                <h4>Export/Import</h4>
                <p>In order to sync data between devices we currently support exporting and importing data.</p>
                <p>Simply push the export button. This will generate a hashed version of your data. Go to your other device, paste the hashed text and press 'Import'.</p>
                <Button
                    variant="primary"
                    onClick={getDataAsBase64}
                >
                    Export
                </Button>
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
                    <Button
                        onClick={importDataIntoStorage}
                    >
                        Import
                    </Button>
                </Form>
            </section>
        </article>
    );
};

export default Home;