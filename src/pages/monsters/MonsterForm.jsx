import FormData from "../../components/FormData";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import * as uuid from "uuid";
import * as storageService from "../../services/storageService";

const MonsterForm = ({monsters, setMonsters, monster, readOnly = false}) => {

    const [name, setName] = useState(!!monster ? monster.name : "");
    const [meta, setMeta] = useState(!!monster ? monster.meta : "");
    const [armor_class, setArmorClass] = useState(!!monster ? monster.armor_class : "");
    const [hp, setHp] = useState(!!monster ? monster.hp : "");
    const [speed, setSpeed] = useState(!!monster ? monster.speed : "");
    const [strength, setStrength] = useState(!!monster ? monster.strength : "");
    const [strength_mod, setStrengthMod] = useState(!!monster ? monster.strength_mod : "");
    const [dexterity, setDexterity] = useState(!!monster ? monster.dexterity : "");
    const [dexterity_mod, setDexterityMod] = useState(!!monster ? monster.dexterity_mod : "");
    const [constitution, setConstitution] = useState(!!monster ? monster.constitution : "");
    const [constitution_mod, setConstitutionMod] = useState(!!monster ? monster.constitution_mod : "");
    const [intelligence, setIntelligence] = useState(!!monster ? monster.intelligence : "");
    const [intelligence_mod, setIntelligenceMod] = useState(!!monster ? monster.intelligence_mod : "");
    const [wisdom, setWisdom] = useState(!!monster ? monster.wisdom : "");
    const [wisdom_mod, setWisdomMod] = useState(!!monster ? monster.wisdom_mod : "");
    const [charisma, setCharisma] = useState(!!monster ? monster.charisma : "");
    const [charisma_mod, setCharismaMod] = useState(!!monster ? monster.charisma_mod : "");
    const [saving_throws, setSavingThrows] = useState(!!monster ? monster.saving_throws : "");
    const [skills, setSkills] = useState(!!monster ? monster.skills : "");
    const [senses, setSenses] = useState(!!monster ? monster.senses : "");
    const [languages, setLanguages] = useState(!!monster ? monster.languages : "");
    const [challenge, setChallenge] = useState(!!monster ? monster.challenge : "");
    const [traits, setTraits] = useState(!!monster ? monster.traits : "");
    const [actions, setActions] = useState(!!monster ? monster.actions : "");
    const [legendary_actions, setLegendaryActions] = useState(!!monster ? monster.legendary_actions : "");
    const [img_url, setImageUrl] = useState(!!monster ? monster.img_url : "");

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

    const addMonster = (event) => {
        event.preventDefault();
        storageService.setItem('monsters', [...monsters, {
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
        }]);
        let parsed = storageService.getItem('monsters');
        setMonsters(parsed);
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

    const updateMonster = (event) => {
        event.preventDefault();
        let monsters = storageService.getItem('monsters');
        let updatedMonsters = monsters
            .map(monsterFromStore => {
                if (monster.id === monsterFromStore.id) {
                    return {
                        id: monsterFromStore.id,
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
                    }
                }
                return monsterFromStore;
            });
        storageService.setItem('monsters', updatedMonsters);
        let parsed = storageService.getItem('monsters');
        setMonsters(parsed);
    }

    return (
        <article className="margin-bottom">
            {
                readOnly ?
                    null :
                    <h3 className="title">{(!!monster ? "Update" : "Add") + " monster"}</h3>
            }
            <form
                id="addMonsterForm"
                onSubmit={(e) => addMonster(e)}
                className={"form form-data" + !!monster ? " form-read-only" : ""}
            >
                <FormData name="name" label="Name" value={name} action={handleSetName}/>
                <FormData name="meta" label="Meta" value={meta} action={handleSetMeta}/>
                <FormData name="armor_class" label="Armor class" value={armor_class}
                          action={handleSetArmor_class}/>
                <FormData name="hp" label="Hitpoints" value={hp} action={handleSetHp}/>
                <FormData name="speed" label="Speed" value={speed} action={handleSetSpeed}/>
                <FormData name="strength" label="Strength" value={strength}
                          action={handleSetStrength}/>
                <FormData name="strength_mod" label="Strength Mod" value={strength_mod}
                          action={handleSetStrengthMod}/>
                <FormData name="dexterity" label="Dexterity" value={dexterity}
                          action={handleSetDexterity}/>
                <FormData name="dexterity_mod" label="Dexterity Mod"
                          value={dexterity_mod}
                          action={handleSetDexterityMod}/>
                <FormData name="constitution" label="Constitution" value={constitution}
                          action={handleSetConstitution}/>
                <FormData name="constitution_mod" label="Constitution Mod"
                          value={constitution_mod}
                          action={handleSetConstitutionMod}/>
                <FormData name="intelligence" label="Intelligence" value={intelligence}
                          action={handleSetIntelligence}/>
                <FormData name="intelligence_mod" label="Intelligence Mod"
                          value={intelligence_mod}
                          action={handleSetIntelligenceMod}/>
                <FormData name="wisdom" label="Wisdom" value={wisdom}
                          action={handleSetWisdom}/>
                <FormData name="wisdom_mod" label="Wisdom Mod" value={wisdom_mod}
                          action={handleSetWisdomMod}/>
                <FormData name="charisma" label="Charisma" value={charisma}
                          action={handleSetCharisma}/>
                <FormData name="charisma_mod" label="Charisma Mod" value={charisma_mod}
                          action={handleSetCharismaMod}/>
                <FormData name="savind_throws" label="Saving Throws"
                          value={saving_throws}
                          action={handleSetSavingThrows}/>
                <FormData name="skills" label="Skills" value={skills}
                          action={handleSetSkills}/>
                <FormData name="senses" label="Senses" value={senses}
                          action={handleSetSenses}/>
                <FormData name="languages" label="Languages" value={languages}
                          action={handleSetLanguages}/>
                <FormData name="challenge" label="Challenge" value={challenge}
                          action={handleSetChallenge}/>
                <FormData name="traits" label="Traits" value={traits}
                          action={handleSetTraits}/>
                <FormData name="actions" label="Actions" value={actions}
                          action={handleSetActions}/>
                <FormData name="legendary_actions" label="Legendary Actions"
                          value={legendary_actions}
                          action={handleSetLegendaryActions}/>
                <FormData name="img_url" label="Image URL" value={img_url}
                          action={handleSetImageUrl}/>
                {
                    readOnly ?
                        null
                        :
                        !!monster ?
                            <Button
                                id="updateForm"
                                style={{display: "none"}}
                                disabled={!name || !meta}
                                variant="primary"
                                onClick={updateMonster}
                            >
                                Update
                            </Button>
                            :
                        <Button disabled={!name || !meta}
                                variant="primary"
                                type="submit"
                                className="form-button"
                        >
                            Add
                        </Button>
                }
            </form>
        </article>
    )
}

export default MonsterForm;