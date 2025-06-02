import React, {useEffect, useState} from "react";
import * as storageService from "../../services/storageService";
import CustomButton from "../../components/CustomButton";
import * as uuid from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import WipNote from "../../components/WipNote";

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const characters = storageService.getItem('characters');
        if (characters) {
            setCharacters(characters);
        }
    }, []);

    function addCharacter() {
        storageService.setItem('characters', [...characters, {
            id: uuid.v4(),
            name: "Faelwyn Niestrandri"
        }]);
        let parsed = storageService.getItem('characters');
        setCharacters(parsed);
    }

    function addCharacterButton() {
        return <CustomButton
            disabled={true}
            extraClasses="button-large mt-3"
            variant="outline-danger"
            onClick={() => addCharacter()}
            text="Add a character"
        />;
    }

    function removeCharacter(id) {
        let storageCharacters = storageService.getItem('characters');
        let leftOverCharacters = storageCharacters.filter(character => character.id !== id);
        storageService.setItem('characters', leftOverCharacters);
        setCharacters(leftOverCharacters);
    }

    return (
        <article className="block">
            <WipNote/>
            {
                characters.length === 0 ?
                    <section style={{textAlign: "center"}}>
                        <p className="text-bold">No characters yet!</p>
                        <p className="text-italic">Work In Progress</p>
                        {addCharacterButton()}
                    </section>
                    :
                    <section style={{textAlign: "center"}}>
                        <p>You've got {characters.length} characters!</p>
                        {characters.map((character, index) => {
                            return (
                                <section key={index} style={{marginBottom: ".25rem"}}>
                                    <span className="text">{character.name}</span>
                                    <CustomButton
                                        extraClasses="button-small mr-0-5"
                                        variant="outline-danger"
                                        onClick={() => removeCharacter(character.id)}
                                        text={<FontAwesomeIcon icon={faTrash}/>}
                                    />
                                </section>
                            )
                        })
                        }
                        {addCharacterButton()}
                    </section>
            }
        </article>
    )
}

export default Characters;