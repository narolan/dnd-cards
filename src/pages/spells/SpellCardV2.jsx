import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SpellCardV2 = ({spell, school}) => {
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

    return (
        <article
            id="cardId"
            style={{
                width: "300px",
                // height: "100%",
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: "#86211b",
                color: "#f1e688"
            }}
        >
            <section style={{padding: "5px"}}>
                <section style={{
                    backgroundColor: "#333333",
                    borderRadius: "10px",
                    display: "grid",
                    gridTemplateColumns: "1fr 5fr"
                }}>
                    <section style={{backgroundColor: "white", width: "50px", height: "50px", borderRadius: "50px"}}>
                        <img alt="" style={{display: "block", position: "relative", top: "10px", left: "10px"}} width="30px"
                             height="30px" src={"https://narolan.github.io/dnd-cards/" + school + ".png"}/>
                    </section>
                    <h2 style={{textAlign: "center"}}>{spell.name}</h2>
                </section>
                <section>
                    <h5 style={{textAlign: "center"}}>
                        {spell.level > 0 && `Level ${spell.level} `}
                        {school}
                        {spell.level === 0 && " cantrip"}
                    </h5>
                </section>
                <section style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "5px"}}>
                    <section style={{backgroundColor: "#333333", borderRadius: "10px", textAlign: "center"}}>
                        <h5>Casting Time</h5>
                        <p>
                            {
                                spell.time.map(numberUnit => {
                                    return numberUnit.number + " " + numberUnit.unit
                                }).join(', ')
                            }
                        </p>
                    </section>
                    <section style={{backgroundColor: "#333333", borderRadius: "10px", textAlign: "center"}}>
                        <h5>Range</h5>
                        <p>
                            {spell.range.distance.amount + " " + spell.range.distance.type}
                        </p>
                    </section>
                </section>
                <section style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "10px"}}>
                    <section style={{backgroundColor: "#333333", borderRadius: "10px", textAlign: "center"}}>
                        <h5>Components</h5>
                        <p>
                            {
                                getComponents(spell.components)
                            }
                        </p>
                    </section>
                    <section style={{backgroundColor: "#333333", borderRadius: "10px", textAlign: "center"}}>
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
                </section>
                <section style={{backgroundColor: "#333333", borderRadius: "10px", textAlign: "center"}}>
                    {
                        !!spell.components.m ?
                            <p style={{textAlign: "left", paddingLeft: "5px"}}>Material: {spell.components.m}</p>
                            :
                            null
                    }
                    <p style={{ textAlign: "left", paddingLeft: "5px", wordWrap: "break-word", overflowWrap: "break-word" }}>
                        {
                            spell.entries
                                .map(entry => {
                                    if (entry instanceof Object) {
                                        return entry.name + ": " + entry.entries.join(' ');
                                    }
                                    return entry;
                                })
                                .join(' ')
                        }
                    </p>
                </section>
                {
                    spell.entriesHigherLevel ?
                        <>
                            <section>
                                <h5 style={{textAlign: "center"}}>At Higher Levels</h5>
                            </section>
                            <section style={{backgroundColor: "#333333", borderRadius: "10px"}}>
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

export default SpellCardV2;