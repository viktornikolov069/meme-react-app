import React from "react";
import "./Meme.css";
import memesData from "./data/memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "Some text",
    bottomText: "Some text",
    randomImage: "https://i.imgflip.com/1c1uej.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} alt="" className="meme--image" />
      </div>
    </main>
  );
}
