import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImages, bigImage } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const images = useSelector(state => state.images);
  const bimages = useSelector(state => state.bimages);

  useEffect(() => {
    dispatch(loadImages())
  }, [dispatch]);

  const click = (id) => {
    dispatch(bigImage(id)) 
  }

  return (
    <div className="container">
      <div className="header">
        TEST APP
      </div>
      <div className="images">
      
      {images.map((image) => {
        return (
          <img src={image.url} alt="abc" key={image.id} onClick= {() => click(image.id)}  />
        )
      })}

      </div>
      
      <div className="footer">
        2020-2021
        {bimages.url}
      </div>
    </div>
  );
}

export default App;