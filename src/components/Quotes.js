import React, { useState, useEffect } from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { CgTwitter } from "react-icons/cg";
import { FaQuoteLeft } from "react-icons/fa";
import axios from "axios";
const Quotes = () => {
  const [quote, setQuote] = useState("title");
  const [author, setAuthor] = useState("");
  // const[random,setRandom]=useState(0);
  useEffect(() => {
    getQuotes();
  }, []);
  const getQuotes = () => {
    console.log(Math.random().toString(16));
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let random = Math.floor(Math.random() * 100);
        let randomQuote = dataQuotes[random];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };
  const handleClick = () => {
    getQuotes();

    const randomColors = "#" + Math.random().toString(16).slice(2, 8);
    setChangeColor(randomColors);
    // setRandom(random+1);
  };
  const [changeColor, setChangeColor] = useState("#256894");
  return (
    <div
      id="main"
      style={{
        backgroundColor: `${changeColor}`,
        display: "flex",
        justifyContent: "space-around",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2 style={{ fontSize: 40, textAlign: "center" }}>
          Sabari's Quote Generator{" "}
        </h2>
        <div>
          <div
            id="quote-box"
            style={{
              backgroundColor: "lightgrey",
              marginTop: 100,
              // minHeight: "100vh",
            }}
          >
            <div id="text">
              <p>
                <FaQuoteLeft />
                <> </>
                {quote}
              </p>
            </div>
            <div id="author">
              <p>-{author}</p>
            </div>
            <div id="buttons">
              <div className="social">
                <a
                  href={`https://twitter.com/intent/tweet?text=${quote}`}
                  id="tweet"
                  target={"_blank"}
                ></a>
                {/* <a href="https://www.tumblr.com/" id="tumble">
                    <button id="medias" style={{backgroundColor:`${changeColor}`}}><CgTwitter size="small"/></button>
                </a> */}
              </div>
              <button
                onClick={handleClick}
                id="new-quote"
                style={{ backgroundColor: "blue", color: "white" }}
              >
                New Quotes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quotes;
