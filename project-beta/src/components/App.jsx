import React, { useState } from "react";
import data from "./Data/db.json";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

//CSS Import
import "../css/App.css";
///////////////////////
//Component imports
//import Navigation from './Navigation';
import Footer from "./Footer";
import Header from "./Header";
import Carousel, { CarouselItem } from "./Carousel";
import Content from "./Content";
import SmallHeader from "./SmallHeader";
import TextArea from "./TextArea";
import Note from "./Note";
import CreateArea from "./CreateArea";
//import Login from "./Login/Login";
///////////////////////

function App() {
  let [notes, setNotes] = useState([]);

  //const [token, setToken] = useState();
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  //if (!token) {
  // return <Login setToken={setToken} />;
  //}
  return (
    <>
      <Header />
      <>
        <SmallHeader text="Biisitoiveita" />
        <CreateArea onAdd={addNote} />
        <div style={{ height: "500px" }}>
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                score={noteItem.score}
                onDelete={deleteNote}
              />
            );
          })}
          {data.map((dataItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={dataItem.title}
                content={dataItem.content}
                score={dataItem.score}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </>

      <SmallHeader text="Omia biisejä" />
      <Carousel>
        <CarouselItem>
          <Content
            header="Kelan Anssi"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-LVx_7anSJw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </CarouselItem>
        <CarouselItem>
          <Content header="WIP" />
        </CarouselItem>
        <CarouselItem>
          <Content header="WIP" />
        </CarouselItem>
      </Carousel>

      <SmallHeader text="Tietoja" id="tieto" />
      <TextArea />
      <Footer />
    </>
  );
}

export default App;

/*        THIS IS USED TO READ db.json
          {data.map((dataItem, index) => {
            return (
              <Note 
                key={index}
                id={index}
                title={dataItem.title}
                content={dataItem.content}
                score={dataItem.score}
                onDelete={deleteNote}
                
              />
            );
          })}
*/
