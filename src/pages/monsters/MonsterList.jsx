import Button from "react-bootstrap/Button";
import React from "react";
import {faEye, faPencil} from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "../../components/ModalComponent";
import MonsterForm from "./MonsterForm";

const MonsterList = (props) => {

    function getBodyHtml(monster, isReadOnly) {
        if (isReadOnly) {
            return (
                <fieldset disabled>
                    <MonsterForm monster={monster} readOnly={true}/>
                </fieldset>
            );
        } else {
            return <MonsterForm monster={monster} readOnly={false} setMonsters={props.setMonsters}/>
        }
    }

    function getTitleHtml(monster) {
        return <>
            <img
                width="50"
                height="50"
                alt="N/A"
                src={monster.img_url}
            />
            <p className="pl-0-5">{monster.name}</p>
        </>;
    }

    return (
        <article className="block block-header">
            <div className="monsters block-header">
                <p className="text-grid text-bold">Img</p>
                <p className="text-grid text-bold">Name</p>
                <p className="text-grid text-bold">Meta</p>
                <p className="text-grid text-bold">Actions</p>
            </div>
            {
                props.monsters.map((monster, index) => {
                    return (
                        <div key={monster.id} className={index % 2 === 1 ? "monsters lists-uneven" : "monsters"}>
                            <img width="50" height="50" alt="N/A"
                                 src={monster.img_url}/>
                            <p title={monster.name} className="text-grid text-italic">{monster.name}</p>
                            <p title={monster.meta} className="text-grid">{monster.meta}</p>
                            <section>
                                <ModalComponent
                                    bodyHtml={getBodyHtml(monster, true)}
                                    titleHtml={getTitleHtml(monster)}
                                    icon={faEye}
                                />
                                <ModalComponent
                                    bodyHtml={getBodyHtml(monster, false)}
                                    titleHtml={getTitleHtml(monster)}
                                    actionValue={monster}
                                    action={"updateForm"}
                                    icon={faPencil}
                                />
                                <Button
                                    className="button-small mr-0-5"
                                    variant="outline-danger"
                                    onClick={() => props.removeMonster(monster.id)}
                                >
                                    &#935;
                                </Button>
                            </section>
                        </div>
                    )
                })
            }
            {
                props.monsters.length === 0 && <p className="text-grid text-not-found text-italic">No monsters found</p>
            }
        </article>
    )
}

export default MonsterList;