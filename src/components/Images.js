import {  useDispatch, useSelector } from "react-redux";
import { bigImage } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
import Image from "./Image";
import { useEffect } from "react";

function Images() {
    const params = useParams();
    const images = useSelector(state => state.images);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bigImage(params.id))
      }, [dispatch]);
    
    

    return (
        <div className="images">
            {images.map((image) => {
                return (
                    <Link to={`${image.id}`}>
                    <Image image={image}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default Images