import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if(!name){
      // display alert
    }else if(name && isEditing){
      // edit
    }else{
      // show alert
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('');

    }
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handelSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="eg. Sugar 3Kg" value={name} onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
      <div className="grocery-container">
        <List items={list}/>
        <button className="clear-btn">clear iteam</button>
      </div>
      )}
    </section>
  );
}

export default App;
