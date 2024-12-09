import FormData from "../../components/FormData";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import * as uuid from "uuid";

const BeastForm = ({ beasts, setBeasts }) => {

    const [name, setName] = useState("");
    const [meta, setMeta] = useState("");
    const [armor_class, setArmorClass] = useState("");
    const [hp, setHp] = useState("");
    const [speed, setSpeed] = useState("");
    const [strength, setStrength] = useState("");
    const [strength_mod, setStrengthMod] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [dexterity_mod, setDexterityMod] = useState("");
    const [constitution, setConstitution] = useState("");
    const [constitution_mod, setConstitutionMod] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [intelligence_mod, setIntelligenceMod] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [wisdom_mod, setWisdomMod] = useState("");
    const [charisma, setCharisma] = useState("");
    const [charisma_mod, setCharismaMod] = useState("");
    const [saving_throws, setSavingThrows] = useState("");
    const [skills, setSkills] = useState("");
    const [senses, setSenses] = useState("");
    const [languages, setLanguages] = useState("");
    const [challenge, setChallenge] = useState("");
    const [traits, setTraits] = useState("");
    const [actions, setActions] = useState("");
    const [legendary_actions, setLegendaryActions] = useState("");
    const [img_url, setImageUrl] = useState("");

    const handleSetName = (e) => {
        setName(e.target.value);
    }
    const handleSetMeta = (e) => {
        setMeta(e.target.value);
    }
    const handleSetArmor_class = (e) => {
        setArmorClass(e.target.value);
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
    const handleSetStrengthMod = (e) => {
        setStrengthMod(e.target.value);
    }
    const handleSetDexterity = (e) => {
        setDexterity(e.target.value);
    }
    const handleSetDexterityMod = (e) => {
        setDexterityMod(e.target.value);
    }
    const handleSetConstitution = (e) => {
        setConstitution(e.target.value);
    }
    const handleSetConstitutionMod = (e) => {
        setConstitutionMod(e.target.value);
    }
    const handleSetIntelligence = (e) => {
        setIntelligence(e.target.value);
    }
    const handleSetIntelligenceMod = (e) => {
        setIntelligenceMod(e.target.value);
    }
    const handleSetWisdom = (e) => {
        setWisdom(e.target.value);
    }
    const handleSetWisdomMod = (e) => {
        setWisdomMod(e.target.value);
    }
    const handleSetCharisma = (e) => {
        setCharisma(e.target.value);
    }
    const handleSetCharismaMod = (e) => {
        setCharismaMod(e.target.value);
    }
    const handleSetSavingThrows = (e) => {
        setSavingThrows(e.target.value);
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
    const handleSetTraits = (e) => {
        setTraits(e.target.value);
    }
    const handleSetActions = (e) => {
        setActions(e.target.value);
    }
    const handleSetLegendaryActions = (e) => {
        setLegendaryActions(e.target.value);
    }
    const handleSetImageUrl = (e) => {
        setImageUrl(e.target.value);
    }

    const addBeast = (event) => {
        event.preventDefault();
        localStorage.setItem('beasts', JSON.stringify([...beasts, {
            id: uuid.v4(),
            name: name,
            meta: meta,
            armor_class: armor_class,
            hp: hp,
            speed: speed,
            strength: strength,
            strength_mod: strength_mod,
            dexterity: dexterity,
            dexterity_mod: dexterity_mod,
            constitution: constitution,
            constitution_mod: constitution_mod,
            intelligence: intelligence,
            intelligence_mod: intelligence_mod,
            wisdom: wisdom,
            wisdom_mod: wisdom_mod,
            charisma: charisma,
            charisma_mod: charisma_mod,
            saving_throws: saving_throws,
            skills: skills,
            senses: senses,
            languages: languages,
            challenge: challenge,
            traits: traits,
            actions: actions,
            legendary_actions: legendary_actions,
            img_url: img_url
        }]));
        let parsed = JSON.parse(localStorage.getItem('beasts'));
        setBeasts(parsed);
        setName('');
        setMeta('');
        setArmorClass('');
        setHp('');
        setSpeed('');
        setStrength('');
        setStrengthMod('');
        setDexterity('');
        setDexterityMod('');
        setConstitution('');
        setConstitutionMod('');
        setIntelligence('');
        setIntelligenceMod('');
        setWisdom('');
        setWisdomMod('');
        setCharisma('');
        setCharismaMod('');
        setSavingThrows('');
        setSkills('');
        setSenses('');
        setLanguages('');
        setChallenge('');
        setTraits('');
        setActions('');
        setLegendaryActions('');
        setImageUrl('');
    }

    return (
        <article className="margin-bottom">
            <h3 className="title">Add beast</h3>
            <form id="addBeastForm" onSubmit={(e) => addBeast(e)} className="form form-data">
                <FormData name="name" label="Name" value={name} action={handleSetName}/>
                <FormData name="meta" label="Meta" value={meta} action={handleSetMeta}/>
                <FormData name="armor_class" label="Armor class" value={armor_class} action={handleSetArmor_class}/>
                <FormData name="hp" label="Hitpoints" value={hp} action={handleSetHp}/>
                <FormData name="speed" label="Speed" value={speed} action={handleSetSpeed}/>
                <FormData name="strength" label="Strength" value={strength} action={handleSetStrength}/>
                <FormData name="strength_mod" label="Strength Mod" value={strength_mod}
                          action={handleSetStrengthMod}/>
                <FormData name="dexterity" label="Dexterity" value={dexterity} action={handleSetDexterity}/>
                <FormData name="dexterity_mod" label="Dexterity Mod" value={dexterity_mod}
                          action={handleSetDexterityMod}/>
                <FormData name="constitution" label="Constitution" value={constitution}
                          action={handleSetConstitution}/>
                <FormData name="constitution_mod" label="Constitution Mod" value={constitution_mod}
                          action={handleSetConstitutionMod}/>
                <FormData name="intelligence" label="Intelligence" value={intelligence}
                          action={handleSetIntelligence}/>
                <FormData name="intelligence_mod" label="Intelligence Mod" value={intelligence_mod}
                          action={handleSetIntelligenceMod}/>
                <FormData name="wisdom" label="Wisdom" value={wisdom} action={handleSetWisdom}/>
                <FormData name="wisdom_mod" label="Wisdom Mod" value={wisdom_mod} action={handleSetWisdomMod}/>
                <FormData name="charisma" label="Charisma" value={charisma} action={handleSetCharisma}/>
                <FormData name="charisma_mod" label="Charisma Mod" value={charisma_mod}
                          action={handleSetCharismaMod}/>
                <FormData name="savind_throws" label="Saving Throws" value={saving_throws}
                          action={handleSetSavingThrows}/>
                <FormData name="skills" label="Skills" value={skills} action={handleSetSkills}/>
                <FormData name="senses" label="Senses" value={senses} action={handleSetSenses}/>
                <FormData name="languages" label="Languages" value={languages} action={handleSetLanguages}/>
                <FormData name="challenge" label="Challenge" value={challenge} action={handleSetChallenge}/>
                <FormData name="traits" label="Traits" value={traits} action={handleSetTraits}/>
                <FormData name="actions" label="Actions" value={actions} action={handleSetActions}/>
                <FormData name="legendary_actions" label="Legendary Actions" value={legendary_actions}
                          action={handleSetLegendaryActions}/>
                <FormData name="img_url" label="Image URL" value={img_url} action={handleSetImageUrl}/>
                <Button disabled={!name || !meta}
                        variant="primary"
                        type="submit"
                        className="form-button"
                >
                    Add
                </Button>
            </form>
        </article>
    )
}

export default BeastForm;