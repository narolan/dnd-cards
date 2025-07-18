import React, {useState} from "react";
import ModalComponent from "../../components/ModalComponent";
import {faFolderOpen, faPrint, faTrash} from "@fortawesome/free-solid-svg-icons";
import SpellCard from "./SpellCard";
import Checkbox from "../../components/CheckBox";
import CustomButton from "../../components/CustomButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {v4} from "uuid";

const SpellList = ({spells, removeSpell}) => {

    const [checkedSpells, setCheckedSpells] = useState([]);

    const handleCheckedSpells = (spell) => {
        if (checkedSpells.includes(spell)) {
            setCheckedSpells(checkedSpells.filter(item => item !== spell));
        } else {
            setCheckedSpells([...checkedSpells, spell]);
        }
    }

    const [backgroundColor, setBackgroundColor] = useState("#86211b");
    const [innerBackgroundColor, setInnerBackgroundColor] = useState("#333333");
    const [textColor, setTextColor] = useState("#f1e688");

    const resetAttributes = () => {
        setCheckedSpells([]);
        setBackgroundColor("#86211b");
        setInnerBackgroundColor("#333333");
        setTextColor("#f1e688");
        setUseName(true);
        setUseLevel(true);
        setUseCastingTime(true);
        setUseRange(true);
        setUseComponents(true);
        setUseDuration(true);
        setUseEntries(true);
        setUseEntriesHigherLevel(true);
    }

    const [useName, setUseName] = useState(true);
    const [useLevel, setUseLevel] = useState(true);
    const [useCastingTime, setUseCastingTime] = useState(true);
    const [useRange, setUseRange] = useState(true);
    const [useComponents, setUseComponents] = useState(true);
    const [useDuration, setUseDuration] = useState(true);
    const [useEntries, setUseEntries] = useState(true);
    const [useEntriesHigherLevel, setUseEntriesHigherLevel] = useState(true);


    const handleSetUseCastingTime = () => {
        setUseCastingTime(!useCastingTime);
    }

    const handleSetUseRange = () => {
        setUseRange(!useRange);
    }

    const handleSetUseComponents = () => {
        setUseComponents(!useComponents);
    }

    const handleSetUseDuration = () => {
        setUseDuration(!useDuration);
    }

    const handleSetUseEntries = () => {
        setUseEntries(!useEntries);
    }

    const handleSetUseEntriesHigherLevel = () => {
        setUseEntriesHigherLevel(!useEntriesHigherLevel);
    }

    const spellLevel = (spell) => {
        if (spell.level === 0) {
            return "cantrip";
        }
        if (spell.level === 1) {
            return spell.level + "st";
        }
        if (spell.level === 2) {
            return spell.level + "nd";
        }
        if (spell.level === 3) {
            return spell.level + "rd";
        }
        if (spell.level === 4 || spell.level === 5 || spell.level === 6 || spell.level === 7 || spell.level === 8 || spell.level === 9) {
            return spell.level + "th";
        }
    }

    function getTitleHtml(spell) {
        return <p>{spell.name}</p>;
    }

    const schools = {
        "A": "Abjuration",
        "T": "Transmutation",
        "E": "Enchantment",
        "N": "Necromancy",
        "D": "Divination",
        "C": "Conjuration",
        "V": "Evocation",
        "I": "Illusion"
    }

    const getSchool = (school) => {
        return schools[school];
    }

    function buildSpellCard(spell, count = "") {
        return (
            <SpellCard
                school={getSchool(spell.school)}
                spell={spell}
                backgroundColor={backgroundColor}
                innerBackgroundColor={innerBackgroundColor}
                textColor={textColor}
                multipleId={count}
                selectors={
                    {
                        useName,
                        useLevel,
                        useCastingTime,
                        useRange,
                        useComponents,
                        useDuration,
                        useEntries,
                        useEntriesHigherLevel
                    }
                }
            />
        );
    }

    return (
        <article className="block block-header">
            <section className="spells block-header">
                <p className="text-grid text-bold">Name</p>
                <p className="text-grid text-bold">School</p>
                <p className="text-grid text-bold">Level</p>
                <div className="text-grid text-bold">
                    Action
                    {
                        checkedSpells.length > 0 ?
                            <section className="desktop" style={{ display: "inline-flex", marginLeft: ".5rem", width: "30px" }}>
                                <ModalComponent
                                    bodyHtml={
                                        <section key={v4()} style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr 1fr",
                                            gap: "1rem"
                                        }}>
                                            {
                                                spells.filter(spell => checkedSpells.includes(spell.id))
                                                    .map(((spell, index) => buildSpellCard(spell, ++index)))
                                            }
                                        </section>
                                    }
                                    icon={faFolderOpen}
                                    resetAttributes={resetAttributes}
                                    generatePdf={true}
                                    generatePdfName="multiple_spells"
                                    generatePdfMultiple={checkedSpells.length}
                                />
                            </section>
                            : null
                    }
                </div>
            </section>
            {
                !!spells && !!spells[0]?.id ?
                    spells.map((spell, index) => {
                        return (
                            <section key={spell.id} className={index % 2 === 1 ? "spells lists-uneven" : "spells"}>
                                <p title={spell.name} className="text-grid text-italic">{spell.name}</p>
                                <p title={getSchool(spell.school)} className="text-grid">{getSchool(spell.school)}</p>
                                <p title={spell.school} className="text-grid">{spellLevel(spell)}</p>
                                <section style={{alignSelf: "center"}}>
                                    <ModalComponent
                                        bodyHtml={
                                            buildSpellCard(spell)
                                        }
                                        colorPickers={
                                            <section>
                                                <h2>Color Picker</h2>
                                                <h3>Background color</h3>
                                                <input
                                                    type="color"
                                                    value={backgroundColor}
                                                    onChange={(event) => setBackgroundColor(event.target.value)}
                                                />
                                                <h3>Inner background color</h3>
                                                <input
                                                    type="color"
                                                    value={innerBackgroundColor}
                                                    onChange={(event) => setInnerBackgroundColor(event.target.value)}
                                                />
                                                <h3>Text color</h3>
                                                <input
                                                    type="color"
                                                    value={textColor}
                                                    onChange={(event) => setTextColor(event.target.value)}
                                                />
                                            </section>
                                        }
                                        resetAttributes={resetAttributes}
                                        boxSelectors={
                                            <section className="spell--attributes">
                                                <Checkbox value={useCastingTime} label={"Casting Time"}
                                                          onChange={handleSetUseCastingTime}/>
                                                <Checkbox value={useRange} label={"Range"}
                                                          onChange={handleSetUseRange}/>
                                                <Checkbox value={useComponents} label={"Components"}
                                                          onChange={handleSetUseComponents}/>
                                                <Checkbox value={useDuration} label={"Duration"}
                                                          onChange={handleSetUseDuration}/>
                                                <Checkbox value={useEntries} label={"Entries"}
                                                          onChange={handleSetUseEntries}/>
                                                <Checkbox value={useEntriesHigherLevel} label={"Entries Higher Level"}
                                                          onChange={handleSetUseEntriesHigherLevel}/>
                                            </section>
                                        }
                                        selectors={
                                            useName
                                        }
                                        titleHtml={getTitleHtml(spell)}
                                        generatePdf={true}
                                        generatePdfName={spell.name.replaceAll(" ", "_")}
                                        icon={faPrint}
                                    />
                                    <CustomButton
                                        extraClasses="button-small mr-0-5"
                                        variant="outline-danger"
                                        onClick={() => removeSpell(spell.id)}
                                        text={<FontAwesomeIcon icon={faTrash}/>}
                                    />
                                    <Checkbox
                                        value={checkedSpells.includes(spell.id)}
                                        extraClasses={"desktop"}
                                        onChange={() => {
                                            handleCheckedSpells(spell.id);
                                        }}
                                    />
                                </section>
                            </section>
                        )
                    })
                    :
                    <p className="text-grid text-not-found text-italic">No spells found</p>
            }
        </article>
    )

}

export default SpellList;