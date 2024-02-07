
import {collection, addDoc} from "firebase/firestore";
import { useState } from "react";
import "./App.css";

import { db} from "./config/firebase";;




function App() {


  const moviesCollectionRef = collection(db, "movies") //collection is the fs method imported - takes db and name of collection as params

 // New Movie States
 const [newMovieTitle, setNewMovieTitle] = useState("");
 const [newReleaseDate, setNewReleaseDate] = useState(0);
 const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

 const onSubmitMovie = async () => {
  try {
    await addDoc(moviesCollectionRef, {
      title: newMovieTitle,
      releaseDate: newReleaseDate,
      receivedAnOscar: isNewMovieOscar,
    });
   
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="App">
  


        <input
          placeholder="Movie title..."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          placeholder="Release Date..."
          type="number"
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label> Received an Oscar</label>
        <button onClick={onSubmitMovie}> Submit Movie</button>
    </div>
  );
}

export default App;
