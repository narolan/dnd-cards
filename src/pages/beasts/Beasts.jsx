import React, {useEffect, useState} from 'react';
import BeastImport from "./BeastImport";
import BeastList from "./BeastList";
import BeastForm from "./BeastForm";

const Beasts = () => {

    const [beasts, setBeasts] = useState([]);

    useEffect(() => {
        const beasts = JSON.parse(localStorage.getItem('beasts'));
        if (beasts) {
            setBeasts(beasts);
        }
    }, []);

    const removeBeast = (id) => {
        let beasts = JSON.parse(localStorage.getItem('beasts'));
        let leftOverBeasts = beasts.filter(beast => beast.id !== id);
        localStorage.setItem('beasts', JSON.stringify(leftOverBeasts));
        setBeasts(leftOverBeasts);
    }

    return (
        <section>
            <h2 className="title">Beasts</h2>
            <BeastList beasts={beasts} removeBeast={removeBeast} setBeasts={setBeasts}/>
            <BeastImport beasts={beasts} setBeasts={setBeasts}/>
            <BeastForm beasts={beasts} setBeasts={setBeasts}/>
        </section>
    )
};

export default Beasts;