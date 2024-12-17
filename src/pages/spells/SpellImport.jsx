import SelectSearch from "../../components/SelectSearch";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import * as uuid from "uuid";
import {importedSpells} from "./importedSpells";
import * as storageService from "../../service/storageService";

const SpellImport = ({ spells, setSpells }) => {

    const [selectedImportedSpell, setSelectedImportedSpell] = useState({});

    const handleSetSelectedImportedSpell = (spell) => {
        if (!!spell?.value) {
            setSelectedImportedSpell(spell.value);
        }
    }

    const addImportedSpell = (event) => {
        event.preventDefault();
        storageService.setItem('spells', [...spells, {
            id: uuid.v4(),
            ...selectedImportedSpell
        }]);
        let parsed = storageService.getItem('spells');
        setSpells(parsed);
        setSelectedImportedSpell({});
    }

    return (
        <article className="block block-header">
            <SelectSearch
                type="spell"
                options={importedSpells
                    .filter(it => !spells.find(spell => spell.name === it.name))
                    .map(it => {
                        return {value: it, label: it.name, color: '#00B8D9'}
                    })}
                selected={importedSpells
                    .filter(it => selectedImportedSpell.name === it.name)
                    .map(it => {
                        return {value: it, label: it.name, color: '#00B8D9'}
                    })}
                action={handleSetSelectedImportedSpell}
            />
            <Button disabled={!selectedImportedSpell.name}
                    variant="primary"
                    type="submit"
                    className="form-button margin-bottom"
                    onClick={addImportedSpell}
            >
                Add
            </Button>
        </article>
    );
}

export default SpellImport