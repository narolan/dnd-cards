import {faEye, faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SpellCard = ({spell, school, backgroundColor, innerBackgroundColor, textColor, selectors}) => {
    function getComponents(components) {
        let componentString = [];
        if (components.v) {
            componentString.push("V");
        }
        if (components.s) {
            componentString.push("S");
        }
        if (components.m) {
            componentString.push("M");
        }
        return componentString.join(', ')
    }

    function getDuration(duration) {
        if (duration.type === "instant") {
            return "Instantaneous";
        } else if (duration.type === "permanent") {
            return "Permanent";
        } else if (duration.type === "special") {
            return "Special";
        } else if (duration.type === "timed") {
            return duration.duration.amount + " " + duration.duration.type;
        }
    }

    function getMaterials(material) {
        if (material instanceof Object) {
            return material.cost + " " + material.text;
        }
        return spell.components.m;
    }

    function isConsumed(material) {
        if (material instanceof Object) {
            return !!material.consume;
        }
        return false;
    }

    function getSpellLevel(spell) {
        if (spell.level === 0) {
            return school + " Cantrip";
        }
        return `Level ${spell.level} ${school}`;
    }

    return (
        <article
            id="cardId"
            style={{
                width: "300px",
                height: "fit-content",
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: backgroundColor,
                color: textColor,
            }}
        >
            <section style={{padding: "5px"}}>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    display: "grid",
                    gridTemplateColumns: "1fr 5fr"
                }}>
                    <section style={{backgroundColor: "white", width: "50px", height: "50px", borderRadius: "50px"}}>
                        <img alt="" style={{display: "block", position: "relative", top: "10px", left: "10px"}}
                             width="30px"
                             height="30px" src={"https://narolan.github.io/dnd-cards/" + school + ".png"}/>
                    </section>
                    {
                        selectors.useName ? <h2 style={{textAlign: "center"}}>{spell.name}</h2> : null
                    }
                </section>
                {
                    selectors.useLevel ?
                        <section>
                            <h5 style={{textAlign: "center"}}>
                                {getSpellLevel(spell)}
                            </h5>
                        </section>
                        : null
                }
                <section style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "5px"}}>
                    {
                        selectors.useCastingTime ?
                            <section style={{
                                backgroundColor: innerBackgroundColor,
                                borderRadius: "10px",
                                textAlign: "center",
                                gridColumnStart: selectors.useRange ? "1" : "span 2"
                            }}>
                                <h5>Casting Time</h5>
                                <p>
                                    {
                                        spell.time.map(numberUnit => {
                                            return numberUnit.number + " " + numberUnit.unit
                                        }).join(', ')
                                    }
                                </p>
                            </section>
                            : null
                    }
                    {
                        selectors.useRange ?
                            <section style={{
                                backgroundColor: innerBackgroundColor,
                                borderRadius: "10px",
                                textAlign: "center",
                                gridColumnStart: selectors.useCastingTime ? "2" : "span 2"
                            }}>
                                <h5>Range</h5>
                                <p>
                                    {
                                        spell.range.type === "special" ?
                                            "special"
                                            :
                                            (spell.range.distance.type === "self" || spell.range.distance.type === "touch" ?
                                                spell.range.distance.type
                                                : spell.range.distance.amount + " " + spell.range.distance.type)
                                    }
                                </p>
                            </section>
                            : null
                    }
                </section>
                <section style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "10px"}}>
                    {
                        selectors.useComponents ?
                            <section style={{
                                backgroundColor: innerBackgroundColor,
                                borderRadius: "10px",
                                textAlign: "center",
                                gridColumnStart: selectors.useDuration ? "1" : "span 2"
                            }}>
                                <h5>Components</h5>
                                <p>
                                    {
                                        getComponents(spell.components)
                                    }
                                </p>
                            </section>
                            : null
                    }
                    {
                        selectors.useDuration ?
                            <section style={{
                                backgroundColor: innerBackgroundColor,
                                borderRadius: "10px",
                                textAlign: "center",
                                gridColumnStart: selectors.useComponents ? "2" : "span 2"
                            }}>
                                <h5>Duration</h5>
                                <p>
                                    {
                                        spell.duration.map(dur => getDuration(dur))
                                            .join(', ')
                                    }
                                    {
                                        spell.duration.filter(dur => dur.concentration).length > 0 ?
                                            <FontAwesomeIcon icon={faEye}/>
                                            :
                                            null
                                    }
                                </p>
                            </section>
                            : null
                    }
                </section>
                {
                    selectors.useEntries ?
                        <section
                            style={{backgroundColor: innerBackgroundColor, borderRadius: "10px", textAlign: "center"}}>
                            {
                                !!spell.components.m ?
                                    <p style={{textAlign: "left", paddingLeft: "5px"}}>
                                        Material: {isConsumed(spell.components.m) ? <><FontAwesomeIcon
                                        icon={faSquareCheck}/> Consumed </> : null}
                                        {getMaterials(spell.components.m)}
                                    </p>
                                    :
                                    null
                            }
                            <p style={{
                                textAlign: "left",
                                paddingLeft: "5px",
                                wordWrap: "break-word",
                                overflowWrap: "break-word"
                            }}>
                                {
                                    spell.entries
                                        .map(entry => {
                                            if (entry instanceof Object && !!entry.entries) {
                                                return entry.name + ": " + entry.entries.join(' ');
                                            } else if (entry instanceof Object && entry.type === 'list') {
                                                return entry.items.join('\r\n');
                                            }
                                            return entry;
                                        })
                                        .join(' ')
                                }
                            </p>
                        </section>
                        : null
                }
                {
                    selectors.useEntriesHigherLevel && !!spell.entriesHigherLevel ?
                        <>
                            <section>
                                <h5 style={{textAlign: "center"}}>At Higher Levels</h5>
                            </section>
                            <section style={{backgroundColor: innerBackgroundColor, borderRadius: "10px"}}>
                                <p style={{textAlign: "left", paddingLeft: "5px"}}>
                                    {
                                        spell.entriesHigherLevel
                                            ?.map(entry => entry.entries.join(' '))
                                            .join(' ')
                                    }
                                </p>
                            </section>
                        </>
                        : null
                }
            </section>
        </article>
    )
}

export default SpellCard;