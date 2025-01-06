import React, {useState} from "react";
import SelectSearch from "../../components/SelectSearch";
import {importedMonsters} from "./importedMonsters.jsx";
import Button from "react-bootstrap/Button";
import * as uuid from "uuid";
import * as storageService from "../../services/storageService";

const challengeRatings = [
    {value: "0", label: "0"},
    {value: "1/8", label: "1/8"},
    {value: "1/4", label: "1/4"},
    {value: "1/2", label: "1/2"},
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
    {value: "5", label: "5"},
    {value: "6", label: "6"},
    {value: "7", label: "7"},
    {value: "8", label: "8"},
    {value: "9", label: "9"},
    {value: "10", label: "10"},
    {value: "11", label: "11"},
    {value: "12", label: "12"},
    {value: "13", label: "13"},
    {value: "14", label: "14"},
    {value: "15", label: "15"},
    {value: "16", label: "16"},
    {value: "17", label: "17"},
    {value: "18", label: "18"},
    {value: "19", label: "19"},
    {value: "20", label: "20"},
    {value: "21", label: "21"},
    {value: "22", label: "22"},
    {value: "23", label: "23"},
    {value: "24", label: "24"},
    {value: "30", label: "30"},
]

const armorClasses = [
    {value: "5", label: "5"},
    {value: "6", label: "6"},
    {value: "7", label: "7"},
    {value: "8", label: "8"},
    {value: "9", label: "9"},
    {value: "10", label: "10"},
    {value: "11", label: "11"},
    {value: "12", label: "12"},
    {value: "13", label: "13"},
    {value: "14", label: "14"},
    {value: "15", label: "15"},
    {value: "16", label: "16"},
    {value: "17", label: "17"},
    {value: "18", label: "18"},
    {value: "19", label: "19"},
    {value: "20", label: "20"},
    {value: "21", label: "21"},
    {value: "22", label: "22"},
    {value: "25", label: "25"},
]

const MonsterImport = (props) => {

    const [selectedImportedMonster, setSelectedImportedMonster] = useState({});
    const [filterByChallengeRating, setFilterByChallengeRating] = useState([]);
    const [filterByAC, setFilterByAC] = useState([]);

    const handleSetSelectedImportedMonster = (monster) => {
        if (!!monster?.value) {
            setSelectedImportedMonster(monster.value);
        }
    }

    const handleSetFileterByChallengeRating = (challengeRating) => {
        setFilterByChallengeRating(challengeRating);
    }

    const handleSetFileterByAC = (AC) => {
        setFilterByAC(AC);
    }

    const addImportedMonster = (event) => {
        event.preventDefault();
        storageService.setItem('monsters', [...props.monsters, {
            id: uuid.v4(),
            ...selectedImportedMonster
        }]);
        let parsed = storageService.getItem('monsters');
        props.setMonsters(parsed);
        setSelectedImportedMonster({});
    }

    return (
        <article className="block block-header">
            <section style={{margin: "5px 20%"}}>
                <h3 style={{textAlign: "center"}}>Filters</h3>
                <section className="form-filters">
                    <SelectSearch
                        type="CR"
                        isMulti={true}
                        isSmall={true}
                        options={challengeRatings
                            .filter(it => !filterByChallengeRating.includes(it.value))}
                        selected={filterByChallengeRating}
                        action={handleSetFileterByChallengeRating}
                    />
                    <SelectSearch
                        type="AC"
                        isMulti={true}
                        isSmall={true}
                        options={armorClasses
                            .filter(it => !filterByAC.includes(it.value))}
                        selected={filterByAC}
                        action={handleSetFileterByAC}
                    />
                </section>
            </section>
            <SelectSearch type="monster"
                          options={importedMonsters
                              .filter(it => !props.monsters.find(monster => monster.name === it.name))
                              .filter(it => {
                                    let availableCR = filterByChallengeRating.map(filter => filter.value);
                                    if (availableCR.length === 0) {
                                        return true;
                                    }
                                    return availableCR.includes(it.challenge.split(" ")[0])
                              })
                              .filter(it => {
                                  let availableAC = filterByAC.map(filter => filter.value);
                                  if (availableAC.length === 0) {
                                      return true;
                                  }
                                  return availableAC.includes(it.armor_class.split(" ")[0])
                              })
                              .map(it => {
                                  return {value: it, label: it.name, color: '#00B8D9'}
                              })}
                          selected={importedMonsters
                              .filter(it => selectedImportedMonster.name === it.name)
                              .map(it => {
                                  return {value: it, label: it.name, color: '#00B8D9'}
                              })}
                          action={handleSetSelectedImportedMonster}
            />
            <Button disabled={!selectedImportedMonster.name}
                    variant="primary"
                    type="submit"
                    className="form-button margin-bottom"
                    onClick={addImportedMonster}
            >
                Add
            </Button>
        </article>
    )
}

export default MonsterImport;