import React, {useEffect, useState} from 'react';
import SpellList from "./SpellList";
import SpellImport from "./SpellImport";
import * as storageService from "../../services/storageService";

const Spells = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const spells = storageService.getItem('spells');
        if (spells) {
            setSpells(spells);
        }
    }, []);

    const removeSpell = (id) => {
        let spells = storageService.getItem('spells');
        let leftOverSpells = spells.filter(spell => spell.id !== id);
        storageService.setItem('spells', leftOverSpells);
        setSpells(leftOverSpells);
    }

    return (
        <section>
            <h2 className="title">Spells</h2>
            <SpellList spells={spells} setSpells={setSpells} removeSpell={removeSpell}/>
            <SpellImport spells={spells} setSpells={setSpells}/>
        </section>
    )

};

export default Spells;