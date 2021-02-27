import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const images = useSelector(state => state.images);

  useEffect(() => {
    dispatch(loadImages())
  }, [dispatch]);

  

  return (
    <div className="container">
      <div className="header">
        TEST APP
      </div>
      <div className="images">
      {images.map((image) => {
        return (
          <img src={image.url} alt="abc" key={image.id} />
        )
      })}
      </div>
      <div className="footer">
        2020-2021
      </div>
    </div>
  );
}

export default App;
