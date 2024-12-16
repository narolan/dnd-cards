import Button from "react-bootstrap/Button";
import React from "react";
import MonsterModal from "./MonsterModal";
import {faEye, faPencil} from "@fortawesome/free-solid-svg-icons";

const MonsterList = (props) => {
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
                                <MonsterModal monster={monster} readOnly={true} icon={faEye}/>
                                <MonsterModal monster={monster} readOnly={false} icon={faPencil} setMonsters={props.setMonsters}/>
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