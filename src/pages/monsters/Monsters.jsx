import React, {useEffect, useState} from 'react';
import MonsterImport from "./MonsterImport";
import MonsterList from "./MonsterList";
import MonsterForm from "./MonsterForm";

const Monsters = () => {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        const monsters = JSON.parse(localStorage.getItem('monsters'));
        if (monsters) {
            setMonsters(monsters);
        }
    }, []);

    const removeMonster = (id) => {
        let monsters = JSON.parse(localStorage.getItem('monsters'));
        let leftOverMonsters = monsters.filter(monster => monster.id !== id);
        localStorage.setItem('monsters', JSON.stringify(leftOverMonsters));
        setMonsters(leftOverMonsters);
    }

    return (
        <section>
            <h2 className="title">Monsters</h2>
            <MonsterList monsters={monsters} removeMonster={removeMonster} setMonsters={setMonsters}/>
            <MonsterImport monsters={monsters} setMonsters={setMonsters}/>
            <MonsterForm monsters={monsters} setMonsters={setMonsters}/>
        </section>
    )
};

export default Monsters;