import React, {useState} from "react";
import SelectSearch from "../../components/SelectSearch";
import {importedMonsters} from "./importedMonsters.jsx";
import Button from "react-bootstrap/Button";
import * as uuid from "uuid";

const MonsterImport = (props) => {

    const [selectedImportedMonster, setSelectedImportedMonster] = useState({});

    const handleSetSelectedImportedMonster = (monster) => {
        if (!!monster?.value) {
            setSelectedImportedMonster(monster.value);
        }
    }

    const addImportedMonster = (event) => {
        event.preventDefault();
        localStorage.setItem('monsters', JSON.stringify([...props.monsters, {
            id: uuid.v4(),
            ...selectedImportedMonster
        }]));
        let parsed = JSON.parse(localStorage.getItem('monsters'));
        props.setMonsters(parsed);
        setSelectedImportedMonster({});
    }

    return (
        <article className="block monsters-header">
            <SelectSearch type="monster"
                          options={importedMonsters
                              .filter(it => !props.monsters.find(monster => monster.name === it.name))
                              .map(it => {
                                  return {value: it, label: it.name, color: '#00B8D9'}
                              })}
                          selected={importedMonsters
                              .filter(it => selectedImportedMonster.name === it.name)
                              .map(it => {
                                  return {value: it, label: it.name, color: '#00B8D9'}
                              })}
                          action={handleSetSelectedImportedMonster}
            />
            <Button disabled={!selectedImportedMonster.name}
                    variant="primary"
                    type="submit"
                    className="form-button margin-bottom"
                    onClick={addImportedMonster}
            >
                Add
            </Button>
        </article>
    )
}

export default MonsterImport;