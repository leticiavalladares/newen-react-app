import React, { useState, useEffect } from "react";
import "./App.css";
import newenLogo from './logo.svg';
import { fetchData, putData } from './AwsFunctions.js';


export const App = () => {
  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    await fetchData('Note-ilnmp32hxreixoxnvn5uvkawrm-main');
  }

  const createNote = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      meaning: form.get("meaning"),
      image: image.name,
    };
    await putData(data);
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
  }


  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   const notesFromAPI = apiData.data.listNotes.items;
  //   await Promise.all(
  //     notesFromAPI.map(async (note) => {
  //       if (note.image) {
  //         const url = await Storage.get(note.name);
  //         note.image = url;
  //       }
  //       return note;
  //     })
  //   );
  //   setNotes(notesFromAPI);
  // }

  // async function createNote(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const image = form.get("image");
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //     meaning: form.get("meaning"),
  //     image: image.name,
  //   };
  //   if (!!data.image) await Storage.put(data.name, image);
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }

  // async function deleteNote({ id, name }) {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  //   await Storage.remove(name);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }

  return (
    <div className="App">
      <br />
      <br />
      <img src={newenLogo}/>
      <br />
      <br />
      <h2>Diccionario Newen</h2>
      <form onSubmit={createNote}>
        <div direction="row" justifyContent="flex-end">
          <form>
            <label>Note Name </label>
            <input name="name" placeholder="palabra mapudungún" />
            <br />
            <br />
            <label>Note Description </label>
            <input name="description" placeholder="significado original" />
            <br />
            <br />
            <label>Note Meaning </label>
            <input name="meaning" placeholder="significado actual" />
          </form>
          <br />
          <input name="image" as="input" type="file" style={{ backgroundColor: "1472FF", alignSelf: "end" }} />
          <br />
          <br />
          <button type="submit" variation="secondary" color="#bdd8ff">
            Crear definición
          </button>
        </div>
      </form>
      <br />
      <br />
      <h3>Definiciones</h3>
      <div margin="3rem 0" style={{ backgroundColor: "#1472FF" }}>
      <button type="submit" onClick={() => fetchNotes()}>Fetch</button>
      {/* {notes.map((note) => (
        <div key={note.id || note.name} direction="row" justifyContent="center" alignItems="center">
          <p as="strong" fontWeight={700} color={"#acceff"}>{note.name}</p>
          <p as="span" color={"#7689a1"}>{note.description}</p>
          <p as="span" color={"#6fa9ff"}>{note.meaning}</p>
          {note.image && (
            <img
              src={note.image}
              alt={`visual aid for ${notes.name}`}
              style={{ width: 40, color: "#bdd8ff" }}
            />
          )}
          <button variation="link" color="#bdd8ff" onClick={() => deleteNote(note)}>
            Borrar definición
          </button>
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default App;
