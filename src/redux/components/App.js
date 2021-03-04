import { useEffect, useState } from "react";
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

  const [text, setText] = useState("")
  
  const clickClose = () => {
    dispatch(closeModal())
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleAdd = () => {
    console.log(comment)
  }

  return (
    <div className="container">
      <Header/>
      <Images/>
      <div className={`modal-wrapper ${isOpen === true ? 'open' : 'close'}`}  >
        <div className="modal-body" >
          <div className="modal-close" onClick={clickClose} > × </div>
          <div className="modal-body-flex">
            <div className="modal-left">
              <img src={bigImages} alt="abc"/>
              <input placeholder="Ваше имя"
              type="text"
              value={text}
              onChange={handleChange}/>
              <input placeholder="Ваш коммeнтарий"/>
              <button onClick={handleAdd}>Оставить комментарий</button>
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