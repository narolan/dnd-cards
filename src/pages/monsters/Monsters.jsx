import React, {useEffect, useState} from 'react';
import MonsterImport from "./MonsterImport";
import MonsterList from "./MonsterList";
import MonsterForm from "./MonsterForm";
import * as storageService from "../../services/storageService";

const Monsters = () => {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        const monsters = storageService.getItem('monsters');
        if (monsters) {
            setMonsters(monsters);
        }
    }, []);

    const removeMonster = (id) => {
        let monsters = storageService.getItem('monsters');
        let leftOverMonsters = monsters.filter(monster => monster.id !== id);
        storageService.setItem('monsters', leftOverMonsters);
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