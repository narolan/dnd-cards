const MonsterCard = ({monster, backgroundColor, innerBackgroundColor, textColor, multipleId = ""}) => {
    return (
        <article
            key={monster.id}
            id={"cardId" + multipleId}
            style={{
                width: "600px",
                height: "fit-content",
                border: "1px solid black",
                borderRadius: "10px",
                backgroundColor: backgroundColor,
                color: textColor,
            }}
        >
            <section style={{
                backgroundColor: innerBackgroundColor,
                borderRadius: "10px",
                textAlign: "center",
                margin: "5px",
                marginBottom: "0px"
            }}
            >
                <h2 style={{marginBottom: "0px"}}>{monster.name}</h2>
            </section>
            <section style={{padding: "5px"}}>
                {
                    monster.img_url ?
                        <img
                            src={"https://api.cors.lol/?url="+monster.img_url}
                            alt={monster.name}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                            }}
                        />
                        : null
                }
            </section>
            <section style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "3px",
                marginBottom: "5px",
                marginLeft: "5px",
                marginRight: "5px",
            }}>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Armor Class</h5>
                    <p>{monster.armor_class}</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>HP</h5>
                    <p>{monster.hp}</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Speed</h5>
                    <p>{monster.speed}</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Strength</h5>
                    <p>{monster.strength} ({monster.strength_mod})</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Dexterity</h5>
                    <p>{monster.dexterity} ({monster.dexterity_mod})</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Constitution</h5>
                    <p>{monster.constitution} ({monster.constitution_mod})</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Intelligence</h5>
                    <p>{monster.intelligence} ({monster.intelligence_mod})</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Wisdom</h5>
                    <p>{monster.wisdom} ({monster.wisdom_mod})</p>
                </section>
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Charisma</h5>
                    <p>{monster.charisma} ({monster.charisma_mod})</p>
                </section>
                {
                    monster.saving_throws ?
                        <section style={{
                            backgroundColor: innerBackgroundColor,
                            borderRadius: "10px",
                            textAlign: "center"
                        }}
                        >
                            <h5>Saving Throws</h5>
                            {
                                monster.saving_throws.split(",")
                                    .map(savingThrow => {
                                        return <p key={savingThrow} style={{marginBottom: "0px"}}>{savingThrow}</p>
                                    })
                            }
                        </section>
                        : null
                }
                {
                    monster.skills ?
                        <section style={{
                            backgroundColor: innerBackgroundColor,
                            borderRadius: "10px",
                            textAlign: "center"
                        }}
                        >
                            <h5>Skills</h5>
                            {
                                monster.skills.split(",")
                                    .map(skill => {
                                        return <p key={skill} style={{marginBottom: "0px"}}>{skill}</p>
                                    })
                            }
                        </section>
                        : null
                }
                {
                    monster.senses ?
                        <section style={{
                            backgroundColor: innerBackgroundColor,
                            borderRadius: "10px",
                            textAlign: "center"
                        }}
                        >
                            <h5>Senses</h5>
                            {
                                monster.senses.split(",")
                                    .map(sense => {
                                        return <p key={sense} style={{marginBottom: "0px"}}>{sense}</p>
                                    })
                            }
                        </section>
                        : null
                }
                <section style={{
                    backgroundColor: innerBackgroundColor,
                    borderRadius: "10px",
                    textAlign: "center"
                }}
                >
                    <h5>Languages</h5>
                    <p>{monster.languages ? monster.languages : ""}</p>
                </section>
                {
                    monster.challenge ?
                        <section style={{
                            backgroundColor: innerBackgroundColor,
                            borderRadius: "10px",
                            textAlign: "center"
                        }}
                        >
                            <h5>Challenge</h5>
                            <p>{monster.challenge}</p>
                        </section>
                        : null
                }
                {
                    monster.traits ?
                        <section style={{
                            backgroundColor: innerBackgroundColor,
                            borderRadius: "10px",
                            textAlign: "center",
                            gridColumnStart: "span 3"
                        }}
                        >
                            <h5>Traits</h5>
                            <div dangerouslySetInnerHTML={{__html: monster.traits}}></div>
                        </section>
                        : null
                }
                {
                    monster.actions ?
                        <section style={{
                            backgroundColor: innerBackgroundColor,
                            borderRadius: "10px",
                            textAlign: "center",
                            gridColumnStart: "span 3"
                        }}
                        >
                            <h5>Actions</h5>
                            <div dangerouslySetInnerHTML={{__html: monster.actions}}></div>
                        </section>
                        : null
                }
                {
                    monster.legendary_actions ?
                        <section style={{
                            backgroundColor: innerBackgroundColor,
                            borderRadius: "10px",
                            textAlign: "center",
                            gridColumnStart: "span 3"
                        }}
                        >
                            <h5>Legendary Actions</h5>
                            <div dangerouslySetInnerHTML={{__html: monster.legendary_actions}}></div>
                        </section>
                        : null
                }
            </section>
        </article>
    )
}

export default MonsterCard;