import { useDispatch, useSelector } from "react-redux";
import { bigImage } from "../redux/actions";

function Images() {
    const dispatch = useDispatch();

    const images = useSelector(state => state.images);

    const click = (id) => {
        dispatch(bigImage(id)) 
      }

    return (
        <div className="images">
            {images.map((image) => {
                return (
                    <img src={image.url} alt="abc" 
                    key={image.id} 
                    onClick= {() => click(image.id)}  />
                )
            })}
        </div>
    )
}
export default Images