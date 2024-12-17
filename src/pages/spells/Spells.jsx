import React, {useEffect, useState} from 'react';
import SpellList from "./SpellList";
import SpellImport from "./SpellImport";

const Spells = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const spells = JSON.parse(localStorage.getItem('spells'));
        if (spells) {
            setSpells(spells);
        }
    }, []);

    const removeSpell = (id) => {
        let spells = JSON.parse(localStorage.getItem('spells'));
        let leftOverSpells = spells.filter(spell => spell.id !== id);
        localStorage.setItem('spells', JSON.stringify(leftOverSpells));
        setSpells(leftOverSpells);
    }

    return (
        <section>
            <h2 className="title">Spells</h2>
            <SpellList spells={spells} removeSpell={removeSpell}/>
            <SpellImport spells={spells} setSpells={setSpells}/>
        </section>
    )

};

export default Spells;