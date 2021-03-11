import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useParams } from "react-router-dom";
import { closeModal, loadImages } from "../redux/actions";

import Header from "./Header";
import Images from "./Images";

function App() {
  const dispatch = useDispatch();
  const bigImages = useSelector(state => state.bigImages);
  const isOpen = useSelector(state => state.isOpen);
  const comment = useSelector(state => state.comment);
  const params = useParams().id
  useEffect(() => {
    dispatch(loadImages())
  }, [dispatch]);

  const [text, setText] = useState("");
  const [commit, setCommit] = useState("");
  const [todos, setTodos] = useState([{title: "mrMovsar", commphoto: 'good photo'}])
  
  const clickClose = () => {
    dispatch(closeModal())
  }

  const handleChangeName = (e) => {
    setText(e.target.value)
  }

  const handleChangeComm = (e) => {
    setCommit(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, {title: text, commphoto: commit}])
    setText('')
    setCommit('')
  }

  return (
    <div className="container">
      <Header/>
      <Route path="/:id?">
        <Images/>
      </Route>
      <div className={`modal-wrapper ${isOpen === true? 'open' : 'close'}`}  >
        <div className="modal-body" >
          <div className="modal-close" onClick={clickClose} > × </div>
          <div className="modal-body-flex">
            <div className="modal-left">
              <img src={bigImages} alt="abc"/>
              <input placeholder="Ваше имя"
              type="text"
              value={text}
              onChange={handleChangeName}/>
              <input placeholder="Ваш коммeнтарий"
              type="commit"
              value={commit}
              onChange={handleChangeComm}/>
              <button onClick={handleAdd}>Оставить комментарий</button>
            </div>
            <div className="modal-right">
              <b className="comments">Коммeнтарии</b> 
              {comment.map(comm => {
                return (
                  <div key={comm.id}>
                    <span className="date">{comm.date}</span>
                    {comm.text}
                  </div>
                )
              })}
              <div>
              {todos.map(todo=> {
                return (
                  <div>
                    <span className="date">{todo.title}</span>
                    {todo.commphoto}
                  </div>
                )
              })}
              </div>
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