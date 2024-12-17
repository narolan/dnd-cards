import React from "react";
import Button from "react-bootstrap/Button";

const SpellList = ({ spells, removeSpell }) => {

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

    return(
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
                                <p title={spell.school} className="text-grid">{spell.school}</p>
                                <p title={spell.school} className="text-grid">{spellLevel(spell)}</p>
                                <section>
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