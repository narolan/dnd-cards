import React from "react";
import Button from "react-bootstrap/Button";
import ModalComponent from "../../components/ModalComponent";
import {faEye, faPrint} from "@fortawesome/free-solid-svg-icons";
import SpellForm from "./SpellForm";
import SpellCardV2 from "./SpellCardV2";

const SpellList = ({spells, setSpells, removeSpell}) => {

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

    function getBodyHtml(spell, isReadOnly) {
        if (isReadOnly) {
            return (
                <fieldset disabled>
                    <SpellForm spells={spells} setSpells={setSpells} spell={spell} readOnly={true}/>
                </fieldset>
            );
        } else {
            return <p>TODO</p>
        }
    }

    function getTitleHtml(spell) {
        return <p>{spell.name}</p>;
    }

    const schools = {
        "A": "Abjuration" ,
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

    return (
        <article className="block block-header">
            <section className="spells block-header">
                <p className="text-grid text-bold">Name</p>
                <p className="text-grid text-bold">School</p>
                <p className="text-grid text-bold">Level</p>
                <p className="text-grid text-bold">Action</p>
            </section>
            {
                !!spells && !!spells[0]?.id ?
                    spells.map((spell, index) => {
                        return (
                            <section key={spell.id} className={index % 2 === 1 ? "spells lists-uneven" : "spells"}>
                                <p title={spell.name} className="text-grid text-italic">{spell.name}</p>
                                <p title={getSchool(spell.school)} className="text-grid">{spell.school}</p>
                                <p title={spell.school} className="text-grid">{spellLevel(spell)}</p>
                                <section>
                                    <ModalComponent
                                        bodyHtml={getBodyHtml(spell, true)}
                                        titleHtml={getTitleHtml(spell)}
                                        icon={faEye}
                                    />
                                    {/*<ModalComponent*/}
                                    {/*    bodyHtml={<SpellCard school={getSchool(spell.school)} spell={spell}/>}*/}
                                    {/*    titleHtml={getTitleHtml(spell)}*/}
                                    {/*    generatePdf={true}*/}
                                    {/*    generatePdfName={spell.name.replaceAll(" ", "_")}*/}
                                    {/*    icon={faPrint}*/}
                                    {/*/>*/}
                                    <ModalComponent
                                        bodyHtml={<SpellCardV2 school={getSchool(spell.school)} spell={spell}/>}
                                        titleHtml={getTitleHtml(spell)}
                                        generatePdf={true}
                                        generatePdfName={spell.name.replaceAll(" ", "_")}
                                        icon={faPrint}
                                    />
                                    <Button
                                        className="button-small mr-0-5"
                                        variant="outline-danger"
                                        onClick={() => removeSpell(spell.id)}
                                    >
                                        &#935;
                                    </Button>
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