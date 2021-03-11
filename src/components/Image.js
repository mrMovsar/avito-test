
function Image(props) {

    return (
        <img src={props.image.url} alt="abc" 
        key={props.image.id} />
    )
}
export default Image