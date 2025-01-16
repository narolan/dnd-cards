import SelectSearch from "../../components/SelectSearch";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import * as uuid from "uuid";
import {importedSpells} from "./importedSpells";
import * as storageService from "../../services/storageService";

const levelOptions = [
    {value: "0", label: "0"},
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
    {value: "5", label: "5"},
    {value: "6", label: "6"},
    {value: "7", label: "7"},
    {value: "8", label: "8"},
    {value: "9", label: "9"},
];

const schools = [
    { value: "A", label: "Abjuration"},
    { value: "T", label: "Transmutation"},
    { value: "E", label: "Enchantment"},
    { value: "N", label: "Necromancy"},
    { value: "D", label: "Divination"},
    { value: "C", label: "Conjuration"},
    { value: "V", label: "Evocation"},
    { value: "I", label: "Illusion"}
];

const classes = [
    { value: "Bard", label: "Bard"},
    { value: "Cleric", label: "Cleric"},
    { value: "Druid", label: "Druid"},
    { value: "Paladin", label: "Paladin"},
    { value: "Ranger", label: "Ranger"},
    { value: "Sorcerer", label: "Sorcerer"},
    { value: "Warlock", label: "Sorcerer"},
    { value: "Wizard", label: "Sorcerer"},
]


const SpellImport = ({spells, setSpells}) => {

    const [selectedImportedSpell, setSelectedImportedSpell] = useState({});
    const [filterByLevels, setFilterByLevels] = useState([]);
    const [filterBySchools, setFilterBySchools] = useState([]);
    const [filterByClasses, setFilterByClasses] = useState("");

    const handleSetSelectedImportedSpell = (spell) => {
        if (!!spell?.value) {
            setSelectedImportedSpell(spell.value);
        }
    }

    const handleSetFileterByLevels = (level) => {
        setFilterByLevels(level);
    }

    const handleSetFileterBySchools = (school) => {
        setFilterBySchools(school);
    }

    const handleSetFileterByClasses = (aClass) => {
        setFilterByClasses(aClass);
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
            <section style={{margin: "5px 20%"}}>
                <h3 style={{textAlign: "center"}}>Filters</h3>
                <section  className="form-filters">
                    <SelectSearch
                        type="level"
                        isMulti={true}
                        isSmall={true}
                        options={levelOptions
                            .filter(it => !filterByLevels.includes(it.value))}
                        selected={filterByLevels}
                        action={handleSetFileterByLevels}
                    />
                    <SelectSearch
                        type="school"
                        isMulti={true}
                        isSmall={true}
                        options={schools
                            .filter(it => !filterBySchools.includes(it.value))}
                        selected={filterBySchools}
                        action={handleSetFileterBySchools}
                    />
                    <SelectSearch
                        type="classes"
                        isMulti={false}
                        isSmall={true}
                        options={classes}
                        selected={filterByClasses}
                        action={handleSetFileterByClasses}
                    />
                </section>
            </section>
            <SelectSearch
                type="spell"
                options={importedSpells
                    .filter(it => !spells.find(spell => spell.name === it.name))
                    .filter(it => {
                        let availableLevels = filterByLevels.map(filter => filter.value);
                        if (availableLevels.length === 0) {
                            return true;
                        }
                        return availableLevels.includes('' + it.level);
                    })
                    .filter(it => {
                        let availableSchools = filterBySchools.map(filter => filter.value);
                        if (availableSchools.length === 0) {
                            return true;
                        }
                        return availableSchools.includes(it.school);
                    })
                    .filter(it => {
                        let availableClasses = filterByClasses.value;
                        if (!availableClasses) {
                            return true;
                        }
                        return it.classes.includes(availableClasses);
                    })
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