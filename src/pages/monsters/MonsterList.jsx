import React, {useState} from "react";
import {faEye, faPencil, faPrint, faTrash} from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "../../components/ModalComponent";
import MonsterForm from "./MonsterForm";
import CustomButton from "../../components/CustomButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MonsterCard from "./MonsterCard";

const MonsterList = (props) => {

    const [backgroundColor, setBackgroundColor] = useState("#86211b");
    const [innerBackgroundColor, setInnerBackgroundColor] = useState("#333333");
    const [textColor, setTextColor] = useState("#f1e688");

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

    function getNameOnlyTitleHtml(monster) {
        return <>
            <p className="pl-0-5">{monster.name}</p>
        </>;
    }

    function buildMonsterCard(monster, count = "") {
        return (
            <MonsterCard
                monster={monster}
                backgroundColor={backgroundColor}
                innerBackgroundColor={innerBackgroundColor}
                textColor={textColor}
                multipleId={count}
            />
        );
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
                            <section style={{ alignSelf: "center" }}>
                                <ModalComponent
                                    bodyHtml={getBodyHtml(monster, true)}
                                    titleHtml={getTitleHtml(monster)}
                                    icon={faEye}
                                />
                                {
                                    monster.type === "Homebrew" ?
                                        <ModalComponent
                                            bodyHtml={getBodyHtml(monster, false)}
                                            titleHtml={getTitleHtml(monster)}
                                            actionValue={monster}
                                            action={"updateForm"}
                                            icon={faPencil}
                                        />
                                        : null
                                }
                                <ModalComponent
                                    bodyHtml={
                                        buildMonsterCard(monster)
                                    }
                                    colorPickers={
                                        <section>
                                            <h2>Color Picker</h2>
                                            <h3>Background color</h3>
                                            <input
                                                type="color"
                                                value={backgroundColor}
                                                onChange={(event) => setBackgroundColor(event.target.value)}
                                            />
                                            <h3>Inner background color</h3>
                                            <input
                                                type="color"
                                                value={innerBackgroundColor}
                                                onChange={(event) => setInnerBackgroundColor(event.target.value)}
                                            />
                                            <h3>Text color</h3>
                                            <input
                                                type="color"
                                                value={textColor}
                                                onChange={(event) => setTextColor(event.target.value)}
                                            />
                                        </section>
                                    }
                                    // resetAttributes={resetAttributes}
                                    // boxSelectors={
                                    //     <section style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                                    //         <Checkbox value={useName} label={"Name"} onChange={handleSetUseName}/>
                                    //         <Checkbox value={useLevel} label={"Level"}
                                    //                   onChange={handleSetUseLevel}/>
                                    //         <Checkbox value={useCastingTime} label={"Casting Time"}
                                    //                   onChange={handleSetUseCastingTime}/>
                                    //         <Checkbox value={useRange} label={"Range"}
                                    //                   onChange={handleSetUseRange}/>
                                    //         <Checkbox value={useComponents} label={"Components"}
                                    //                   onChange={handleSetUseComponents}/>
                                    //         <Checkbox value={useDuration} label={"Duration"}
                                    //                   onChange={handleSetUseDuration}/>
                                    //         <Checkbox value={useEntries} label={"Entries"}
                                    //                   onChange={handleSetUseEntries}/>
                                    //         <Checkbox value={useEntriesHigherLevel} label={"Entries Higher Level"}
                                    //                   onChange={handleSetUseEntriesHigherLevel}/>
                                    //     </section>
                                    // }
                                    // selectors={
                                    //     useName
                                    // }
                                    titleHtml={getNameOnlyTitleHtml(monster)}
                                    generatePdf={true}
                                    generatePdfName={monster.name.replaceAll(" ", "_")}
                                    icon={faPrint}
                                />
                                <CustomButton
                                    extraClasses="button-small mr-0-5"
                                    variant="outline-danger"
                                    text={<FontAwesomeIcon icon={faTrash}/>}
                                    onClick={() => props.removeMonster(monster.id)}
                                />
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