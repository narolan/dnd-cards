import FormData from "../../components/FormData";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import * as uuid from "uuid";
import * as storageService from "../../service/storageService";
import Form from "react-bootstrap/Form";

const SpellForm = ({spells, setSpells, spell, readOnly = false}) => {

    const [name, setName] = useState(!!spell ? spell.name : "");
    const [level, setLevel] = useState(!!spell ? spell.level : "");
    const [school, setSchool] = useState(!!spell ? spell.school : "");
    const [time, setTime] = useState(!!spell ? spell.time : []);
    const [range, setRange] = useState(!!spell ? spell.range : {});
    const [components, setComponents] = useState(!!spell ? spell.components : {});
    const [duration, setDuration] = useState(!!spell ? spell.duration : []);
    const [entries, setEntries] = useState(!!spell ? spell.entries : []);
    const [scalingLevelDice, setScalingLevelDice] = useState(!!spell ? spell.scalingLevelDice : {});
    const [damageInflict, setDamageInflict] = useState(!!spell ? spell.damageInflict : []);
    const [savingThrow, setSavingThrow] = useState(!!spell ? spell.savingThrow : []);
    const [miscTags, setMiscTags] = useState(!!spell ? spell.miscTags : []);
    const [areaTags, setAreaTags] = useState(!!spell ? spell.areaTags : []);

    const handleSetName = (e) => {
        setName(e.target.value);
    }

    const addSpell = (event) => {
        event.preventDefault();
        storageService.setItem('spells', [...spells, {
            id: uuid.v4(),
            name: name,
        }]);
        let parsed = storageService.getItem('spells');
        setSpells(parsed);
        setName('');
    }

    const updateSpell = (event) => {
        event.preventDefault();
        let spells = storageService.getItem('spells');
        let updatedspells = spells
            .map(spellFromStore => {
                if (spell.id === spellFromStore.id) {
                    return {
                        id: spellFromStore.id,
                        name: name,
                    }
                }
                return spellFromStore;
            });
        storageService.setItem('spells', updatedspells);
        let parsed = storageService.getItem('spells');
        setSpells(parsed);
    }

    return (
        <article className="margin-bottom">
            {
                readOnly ?
                    null :
                    <h3 className="title">{(!!spell ? "Update" : "Add") + " spell"}</h3>
            }
            <form
                id="addSpellForm"
                onSubmit={(e) => addSpell(e)}
                className={"form form-data" + !!spell ? " form-read-only" : ""}
            >
                <FormData name="name" label="Name" value={name}/>
                <FormData name="level" label="Level" value={level}/>
                <FormData name="school" label="School" value={school}/>
                {
                    time.map((numberUnit, index) => {
                        return <FormData key={index} name="time" label="Time"
                                         value={numberUnit.number + " " + numberUnit.unit}/>
                    })
                }
                <FormData name="rangeType" label="Range Type" value={range.type}/>
                <FormData name="rangeDistance" label="Range Distance"
                          value={range.distance.amount + " " + range.distance.type}/>
                <section style={{margin: ".5rem 0", color: "black", display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                    <Form.Check name="verbal" label="Verbal Requirement" checked={components.v}/>
                    <Form.Check name="somatic" label="Somatic Requirement" checked={components.s}/>
                    <Form.Check name="material" label="Material Requirement" checked={components.m}/>
                </section>
                <FormData name="duration" label="Duration" value={duration.map(dur => dur.type)}/>
                <FormData name="entries" label="Entries" value={entries}/>
                <FormData name="scalingLevelDice" label="Scaling Level Dice" value={scalingLevelDice.label}/>
                {
                    Object.entries(scalingLevelDice.scaling)
                        .map(([label, value]) => (
                            <>
                                <FormData key={label} name="scalingLevelDice" label={"Dice at level " + label}
                                          value={value}/>
                            </>
                        ))
                }
                <FormData name="damageInflict" label="Damage Inflict" value={damageInflict}/>
                <FormData name="savingThrow" label="Saving Throw" value={savingThrow}/>
                <FormData name="miscTags" label="Misc Tags" value={miscTags}/>
                <FormData name="areaTags" label="Area Tags" value={areaTags}/>
                {
                    readOnly ?
                        null
                        :
                        !!spell ?
                            <Button
                                id="updateForm"
                                style={{display: "none"}}
                                disabled={!name}
                                variant="primary"
                                onClick={updateSpell}
                            >
                                Update
                            </Button>
                            :
                            <Button disabled={!name}
                                    variant="primary"
                                    type="submit"
                                    className="form-button"
                            >
                                Add
                            </Button>
                }
            </form>
        </article>
    )
}

export default SpellForm;