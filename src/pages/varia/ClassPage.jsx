const ClassPage = ({className, pdf}) => {

    return (
        <a style={{ color: "rgb(33, 37, 41)" }} key={className} href={"https://narolan.github.io/dnd-cards/" + pdf}>{className}</a>
    )

}

export default ClassPage;