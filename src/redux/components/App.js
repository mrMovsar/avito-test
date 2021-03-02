import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImages, closeModal } from "../actions"
import Header from "./Header";
import Images from "./Images";

function App() {
  const dispatch = useDispatch();

  
  const bigImages = useSelector(state => state.bigImages);
  const isOpen = useSelector(state => state.isOpen);
  const comment = useSelector(state => state.comment)
  
  useEffect(() => {
    dispatch(loadImages())
  }, [dispatch]);

  

  const clickClose = () => {
    dispatch(closeModal())
  }

  return (
    <div className="container">
      <Header/>
      <Images/>
      <div className={`modal_wrapper ${isOpen === true ? 'open' : 'close'}`} >
        <div className="modal_body">
          <div className="modal_close" onClick={clickClose} > × </div>
          <div className="modal-body-flex">
            <div className="modal-left">
              <img src={bigImages.url} alt="abc"/>
              <input placeholder="Ваше имя"/>
              <input placeholder="Ваш коммнтарий"/>
              <button>Оставить комментарий</button>
            </div>
            <div className="modal-right">
              {comment.map(comm => {
                return (
                  <div key={comm.id}>
                    <span>{comm.date}</span>
                    {comm.text}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        2020-2021 
      </div>
    </div>
  );
}

export default App;