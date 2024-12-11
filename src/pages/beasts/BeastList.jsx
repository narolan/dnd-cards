import Button from "react-bootstrap/Button";
import React from "react";

const BeastList = (props) => {
    return (
        <article className="block beasts-header">
            <div className="beasts beasts-header">
                <p className="text-grid text-bold">Img</p>
                <p className="text-grid text-bold">Name</p>
                <p className="text-grid text-bold">Meta</p>
                <p className="text-grid text-bold">Actions</p>
            </div>
            {
                props.beasts.map((beast, index) => {
                    return (
                        <div key={beast.id} className={index % 2 === 1 ? "beasts beasts-uneven" : "beasts"}>
                            <img width="50" height="50" alt="N/A"
                                 src={beast.img_url}/>
                            <p title={beast.name} className="text-grid text-italic">{beast.name}</p>
                            <p title={beast.meta} className="text-grid">{beast.meta}</p>
                            <Button className="button-small"
                                    variant="outline-danger"
                                    onClick={() => props.removeBeast(beast.id)}>
                                &#935;
                            </Button>
                        </div>
                    )
                })
            }
            {
                props.beasts.length === 0 && <p className="text-grid text-not-found text-italic">No beasts found</p>
            }
        </article>
    )
}

export default BeastList;