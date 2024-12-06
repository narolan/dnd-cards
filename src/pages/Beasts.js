import React, { useState } from 'react';

const Beasts = () => {

    const [beasts] = useState([]);
    return (
        <section>
            <h2 className="title">Beasts</h2>
            <article className="block">
                <div className="beasts beasts-header">
                    <p className="text-grid text-bold">Name</p>
                    <p className="text-grid text-bold">Description</p>
                </div>
                {
                    beasts.map((beast, index) => {
                        return (
                            <div key={beast.id} className={index%2 === 1 ? "beasts beasts-uneven" : "beasts"}>
                                <p className="text-grid text-italic">{beast.name}</p>
                                <p className="text-grid">{beast.description}</p>
                            </div>
                        )
                    })
                }
                {
                    beasts.length === 0 && <p className="text-grid text-not-found text-italic">No beasts found</p>
                }
            </article>
        </section>
    )
};

export default Beasts;