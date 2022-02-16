import React, { useState } from "react";
import data from './Data/db.json';


function CreateArea(props) {
  const [disabled, setDisabled] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    score: 0
  });

  
  


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if(note.content && note.title) {
    props.onAdd(note);
    }else {
      alert('Lisää tieto molempiin kenttiin');
    }
    setNote({
      title: "",
      content: "",
      score: 0
    });
    
    //event.preventDefault();
    
    
  }


  return (
    <div>
      <form action="/post" method="post" >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Artisti/Yhtye"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Kappale"
          rows="1"
        />
        <button type="submit" style={{fontSize: "2em", cursor: disabled ? 'auto' :'pointer'}} onClick={submitNote} disabled={disabled}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
