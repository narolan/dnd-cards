import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import FormData from "../components/FormData";

const Beasts = () => {

    const [beasts, setBeasts] = useState([]);

    useEffect(() => {
        const beasts = JSON.parse(localStorage.getItem('beasts'));
        if (beasts) {
            setBeasts(beasts);
        }
    }, []);

    const addBeast = (event) => {
        event.preventDefault();
        localStorage.setItem('beasts', JSON.stringify([...beasts, {
            id: beasts.length + 1,
            name: event.target.name.value,
            description: event.target.description.value,
            armor_class: event.target.armor_class.value,
            hp: event.target.hp.value,
            speed: event.target.speed.value,
            strength: event.target.strength.value,
            dexterity: event.target.dexterity.value,
            constitution: event.target.constitution.value,
            intelligence: event.target.intelligence.value,
            wisdom: event.target.wisdom.value,
            charisma: event.target.charisma.value,
            skills: event.target.skills.value,
            senses: event.target.senses.value,
            languages: event.target.languages.value,
            challenge: event.target.challenge.value,
            extra_info: event.target.extra_info.value,
            actions: event.target.actions.value
        }]));
        let parsed = JSON.parse(localStorage.getItem('beasts'));
        setBeasts(parsed);
        document.getElementById("addBeastForm").reset();
    }
    
    const removeBeast = (id) => {
        let beasts = JSON.parse(localStorage.getItem('beasts'));
        let leftOverBeasts = beasts.filter(beast => beast.id !== id);
        localStorage.setItem('beasts', JSON.stringify(leftOverBeasts));
        setBeasts(leftOverBeasts);
    }

    return (
        <section>
            <h2 className="title">Beasts</h2>
            <article className="block beasts-header">
                <div className="beasts beasts-header">
                    <p className="text-grid text-bold">Name</p>
                    <p className="text-grid text-bold">Description</p>
                </div>
                {
                    beasts.map((beast, index) => {
                        return (
                            <div key={beast.id} className={index % 2 === 1 ? "beasts beasts-uneven" : "beasts"}>
                                <p className="text-grid text-italic">{beast.name}</p>
                                <p className="text-grid">{beast.description}</p>
                                <Button className="button-small"
                                        variant="outline-danger"
                                        onClick={() => removeBeast(beast.id)}>
                                    &#935;
                                </Button>
                            </div>
                        )
                    })
                }
                {
                    beasts.length === 0 && <p className="text-grid text-not-found text-italic">No beasts found</p>
                }
            </article>
            <article>
                <h3 className="title">Add beast</h3>
                <form id="addBeastForm" onSubmit={(e) => addBeast(e)} className="form form-data">
                    <FormData name="name" label="Name"/>
                    <FormData name="description" label="Description"/>
                    <FormData name="armor_class" label="Armor class"/>
                    <FormData name="hp" label="Hitpoints"/>
                    <FormData name="speed" label="Speed"/>
                    <FormData name="strength" label="Strength"/>
                    <FormData name="dexterity" label="Dexterity"/>
                    <FormData name="constitution" label="Constitution"/>
                    <FormData name="intelligence" label="Intelligence"/>
                    <FormData name="wisdom" label="Wisdom"/>
                    <FormData name="charisma" label="Charisma"/>
                    <FormData name="skills" label="Skills"/>
                    <FormData name="senses" label="Senses"/>
                    <FormData name="languages" label="Languages"/>
                    <FormData name="challenge" label="Challenge"/>
                    <FormData name="extra_info" label="Extra info"/>
                    <FormData name="actions" label="Actions"/>
                    <Button variant="primary" type="submit" className="form-button">Add</Button>
                </form>
            </article>
        </section>
    )
};

export default Beasts;