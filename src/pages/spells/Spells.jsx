import React, {useEffect, useState} from 'react';
import SpellList from "./SpellList";

const Spells = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const spells = JSON.parse(localStorage.getItem('spells'));
        if (spells) {
            setSpells(spells);
        }
    }, []);

    return (
        <section>
            <h2 className="title">Spells</h2>
            <SpellList spells={spells}/>
        </section>
    )

};

export default Spells;