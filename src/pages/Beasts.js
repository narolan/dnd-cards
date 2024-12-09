import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import FormData from "../components/FormData";

const Beasts = () => {

    const [beasts, setBeasts] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [armor_class, setArmor_class] = useState("");
    const [hp, setHp] = useState("");
    const [speed, setSpeed] = useState("");
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [charisma, setCharisma] = useState("");
    const [skills, setSkills] = useState("");
    const [senses, setSenses] = useState("");
    const [languages, setLanguages] = useState("");
    const [challenge, setChallenge] = useState("");
    const [extra_info, setExtra_info] = useState("");
    const [actions, setActions] = useState("");

    const handleSetName = (e) => {
        setName(e.target.value);
    }
    const handleSetDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleSetArmor_class = (e) => {
        setArmor_class(e.target.value);
    }
    const handleSetHp = (e) => {
        setHp(e.target.value);
    }
    const handleSetSpeed = (e) => {
        setSpeed(e.target.value);
    }
    const handleSetStrength = (e) => {
        setStrength(e.target.value);
    }
    const handleSetDexterity = (e) => {
        setDexterity(e.target.value);
    }
    const handleSetConstitution = (e) => {
        setConstitution(e.target.value);
    }
    const handleSetIntelligence = (e) => {
        setIntelligence(e.target.value);
    }
    const handleSetWisdom = (e) => {
        setWisdom(e.target.value);
    }
    const handleSetCharisma = (e) => {
        setCharisma(e.target.value);
    }
    const handleSetSkills = (e) => {
        setSkills(e.target.value);
    }
    const handleSetSenses = (e) => {
        setSenses(e.target.value);
    }
    const handleSetLanguages = (e) => {
        setLanguages(e.target.value);
    }
    const handleSetChallenge = (e) => {
        setChallenge(e.target.value);
    }
    const handleSetExtra_info = (e) => {
        setExtra_info(e.target.value);
    }
    const handleSetActions = (e) => {
        setActions(e.target.value);
    }

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
            name: name,
            description: description,
            armor_class: armor_class,
            hp: hp,
            speed: speed,
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            wisdom: wisdom,
            charisma: charisma,
            skills: skills,
            senses: senses,
            languages: languages,
            challenge: challenge,
            extra_info: extra_info,
            actions: actions
        }]));
        let parsed = JSON.parse(localStorage.getItem('beasts'));
        setBeasts(parsed);
        setName('');
        setDescription('');
        setArmor_class('');
        setHp('');
        setSpeed('');
        setStrength('');
        setDexterity('');
        setConstitution('');
        setIntelligence('');
        setWisdom('');
        setCharisma('');
        setSkills('');
        setSenses('');
        setLanguages('');
        setChallenge('');
        setExtra_info('');
        setActions('');
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
                    <FormData name="name" label="Name" value={name} action={handleSetName}/>
                    <FormData name="description" label="Description" value={description} action={handleSetDescription}/>
                    <FormData name="armor_class" label="Armor class" value={armor_class} action={handleSetArmor_class}/>
                    <FormData name="hp" label="Hitpoints" value={hp} action={handleSetHp}/>
                    <FormData name="speed" label="Speed" value={speed} action={handleSetSpeed}/>
                    <FormData name="strength" label="Strength" value={strength} action={handleSetStrength}/>
                    <FormData name="dexterity" label="Dexterity" value={dexterity} action={handleSetDexterity}/>
                    <FormData name="constitution" label="Constitution" value={constitution} action={handleSetConstitution}/>
                    <FormData name="intelligence" label="Intelligence" value={intelligence} action={handleSetIntelligence}/>
                    <FormData name="wisdom" label="Wisdom" value={wisdom} action={handleSetWisdom}/>
                    <FormData name="charisma" label="Charisma" value={charisma} action={handleSetCharisma}/>
                    <FormData name="skills" label="Skills" value={skills} action={handleSetSkills}/>
                    <FormData name="senses" label="Senses" value={senses} action={handleSetSenses}/>
                    <FormData name="languages" label="Languages" value={languages} action={handleSetLanguages}/>
                    <FormData name="challenge" label="Challenge" value={challenge} action={handleSetChallenge}/>
                    <FormData name="extra_info" label="Extra info" value={extra_info} action={handleSetExtra_info}/>
                    <FormData name="actions" label="Actions" value={actions} action={handleSetActions}/>
                    <Button disabled={!name && !description} variant="primary" type="submit" className="form-button">Add</Button>
                </form>
            </article>
        </section>
    )
};

export default Beasts;