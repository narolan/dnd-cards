import React, {useState} from "react";
import SelectSearch from "../../components/SelectSearch";
import {importedBeasts} from "./importedBeasts.jsx";
import Button from "react-bootstrap/Button";
import * as uuid from "uuid";

const BeastImport = (props) => {

    const [selectedImportedBeast, setSelectedImportedBeast] = useState({});

    const handleSetSelectedImportedBeast = (beast) => {
        setSelectedImportedBeast(beast.value);
    }

    const addImportedBeast = (event) => {
        event.preventDefault();
        localStorage.setItem('beasts', JSON.stringify([...props.beasts, {
            id: uuid.v4(),
            ...selectedImportedBeast
        }]));
        let parsed = JSON.parse(localStorage.getItem('beasts'));
        props.setBeasts(parsed);
        setSelectedImportedBeast({});
    }

    return (
        <article className="block beasts-header">
            <SelectSearch type="beast"
                          options={importedBeasts.map(it => {
                              return {value: it, label: it.name, color: '#00B8D9'}
                          })}
                          selected={selectedImportedBeast.name}
                          action={handleSetSelectedImportedBeast}
            />
            <Button disabled={!selectedImportedBeast.name}
                    variant="primary"
                    type="submit"
                    className="form-button margin-bottom"
                    onClick={addImportedBeast}
            >
                Add
            </Button>
        </article>
    )
}

export default BeastImport;