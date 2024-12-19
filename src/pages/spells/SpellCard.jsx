import {Card} from "react-bootstrap";

const SpellCard = ({spell, school}) => {

    function getComponents(components) {
        let componentsString = "";
        if (components.v === true && components.s === true) {
            componentsString += "Vocal, Somatic";
        } else if (components.v === true) {
            componentsString += "Vocal";
        } else if (components.s === true) {
            componentsString += "Somatic";
        }

        if (!!components.m) {
            if (componentsString.length > 0) {
                componentsString += ", Materials required: " + components.m;
            } else {
                componentsString += "Materials required: " + components.m;
            }
        }
        return componentsString;
    }

    function getGridTemplateColumns(size) {
        let columns = "";
        for (let i = 0; i < size; i++) {
            columns += "1fr ";
        }
        return columns;
    }

    return (
        <div className="a4-card" id="cardId" style={{margin: '20px auto', maxWidth: '850px', height: 'auto'}}>
            <div className="background"></div>
            <div className="content">
                <Card.Body>
                    <Card.Title style={{color: "dimgray"}} className="card-text"><h2>{spell.name}</h2></Card.Title>
                    <section className="card-text">
                        <h3>
                            {spell.level > 0 && `Level ${spell.level} `}
                            {school}
                            {spell.level === 0 && " cantrip"}
                        </h3>
                    </section>
                    <section className="card-text"
                             style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
                        {
                            spell.time.map((time, index) => {
                                return (
                                    <section key={index}>
                                        <h5>Time</h5>
                                        <p>{time.number + " " + time.unit}</p>
                                    </section>
                                )
                            })
                        }
                        <section>
                            <h5>Range Type</h5>
                            <p>{spell.range.type}</p>
                        </section>
                        <section>
                            <h5>Range Distance</h5>
                            <p>{spell.range.distance.amount + " " + spell.range.distance.type}</p>
                        </section>
                        <section>
                            <h5>Components</h5>
                            <p>{getComponents(spell.components)}</p>
                        </section>
                        {
                            spell.duration.map((duration, index) => {
                                return (
                                    <section key={index}>
                                        <h5>Duration</h5>
                                        <p>{duration.type}</p>
                                    </section>
                                )
                            })
                        }
                        <section style={{gridColumn: "span 5"}}>
                            <h5>Description</h5>
                            <p>{spell.entries.join(' ')}</p>
                        </section>
                        <section style={{gridColumn: "span 5"}}>
                            <section
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: getGridTemplateColumns(Object.keys(spell.scalingLevelDice.scaling).length + 1)
                                }}
                            >
                                <section>
                                    <h5>Scaling Level Dice</h5>
                                    <p>{spell.scalingLevelDice.label}</p>
                                </section>
                                {Object.entries(spell.scalingLevelDice.scaling)
                                    .map(([label, value], index) => (
                                        <section key={index}>
                                            <h5>Dice at level {label}</h5>
                                            <p>{value}</p>
                                        </section>
                                    ))}
                            </section>
                        </section>
                        <section style={{gridColumn: "span 5"}}>
                            {spell.entriesHigherLevel?.map((higherLevel, index) => {
                                return (
                                    <section key={index}>
                                        <h5>{higherLevel.name}</h5>
                                        <p>{higherLevel.entries.join(' ')}</p>
                                    </section>
                                )
                            })}
                        </section>
                        <section>
                            <h5>Damage Inflict</h5>
                            <p>{spell.damageInflict.join(', ')}</p>
                        </section>
                        <section>
                            <h5>Saving Throw</h5>
                            <p>{spell.savingThrow.join(', ')}</p>
                        </section>
                        <section>
                            <h5>Misc Tags</h5>
                            <p>{spell.miscTags.join(', ')}</p>
                        </section>
                    </section>
                </Card.Body>
            </div>
        </div>
)
}

export default SpellCard;