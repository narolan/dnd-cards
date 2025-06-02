import ClassPage from "./ClassPage";

const Varia = () => {

    return (
        <article className="block">
            <section style={{ textAlign: "center", paddingTop: "2rem" }}>
                <p className="text-italic">
                    Here you will find a brief overview of what each class represents.
                    <br/>
                    This should enable you to quickly go through the different classes and choose which one fits you best.
                </p>
                <ClassPage
                    className="Druid"
                    pdf="Druid.pdf"
                />
            </section>
        </article>
    )

}

export default Varia;