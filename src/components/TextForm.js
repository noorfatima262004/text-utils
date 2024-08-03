import React, { useState } from "react";

export default function TextForm({ heading, mode }) {
  const upperCaseOnClick = () => {
    settext(text.toUpperCase());
  };

  const upperCaseOnChange = (event) => {
    settext(event.target.value);
  };

  const lowerCaseOnClick = () => {
    settext(text.toLowerCase());
  };

  const clearTextOnClick = () => {
    settext("");
  };

  const InvertTextOnClick = () => {
    settext(text.split("").reverse().join(""));
  };

  const copyTextOnClick = () => {
    let newtext = document.getElementById("textArea");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  };

  const removeExtraSpaceBtwWordsOnClick = () => {
    let newText = text
      .split("\n")
      .map((line) =>
        line
          .split(/\s+/)
          .filter((word) => word !== "")
          .join(" ")
      )
      .join("\n");
    settext(newText);
  };

  const removeExtraSpaceBtwLinesOnClick = () => {
    let newText = text
      .split("\n")
      .filter((line) => line !== "")
      .join("\n");
    settext(newText);
  };

  const TitleCaseOnClick = () => {
    let newText = text
      .split("")
      .map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join("");
    settext(newText);
  };
  const WordCountWithOutSpace = () => {
    return text.split(/\s+/).filter((words) => words !== "").length;
  };
  const [text, settext] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          className="my-4 heading"
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {heading}
        </h1>
        <div className="d-flex boxArea mt-3">
        <div >
          <div className="mb-1">
            <span> {WordCountWithOutSpace() / 125} Minutes To Read </span>{" "}
            &nbsp;&nbsp;&nbsp;
            <span> {(WordCountWithOutSpace() / 125) * 60} seconds To Read</span>
          </div>
          <textarea
            //backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'
            className="form-control"
            style={{
              backgroundColor: mode === "dark" ? `#28597e` : `white`,
              color: mode === "dark" ? `white` : `#042743`,
              width: "60vw",
            }}
            id="textArea"
            rows="10"
            value={text}
            placeholder="Enter Text Here:"
            onChange={upperCaseOnChange}
          ></textarea>
        </div>
        <div className="d-flex flex-wrap box ">
          <button
            type="button"
            className="btn btn-outline-primary rounded-start mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black ` : `rgb(97, 97, 208) `,
            }}
            onClick={upperCaseOnClick}
          >
            Upper Case
          </button>
          <button
            type="button"
            className="btn btn-outline-primary  mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black` : `rgb(97, 97, 208) `,
            }}
            onClick={lowerCaseOnClick}
          >
            Lower Case
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black` : `rgb(97, 97, 208) `,
            }}
            onClick={InvertTextOnClick}
          >
            Invert Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black` : `rgb(97, 97, 208) `,
            }}
            onClick={TitleCaseOnClick}
          >
            Title Case
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black` : `rgb(97, 97, 208) `,
            }}
            onClick={removeExtraSpaceBtwWordsOnClick}
          >
            Remove Extra Space between Words
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black` : `rgb(97, 97, 208) `,
            }}
            onClick={copyTextOnClick}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary rounded-end mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black` : `rgb(97, 97, 208) `,
            }}
            onClick={clearTextOnClick}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary rounded mb-3"
            style={{
              borderColor: mode === "dark" ? `black` : `rgb(97, 97, 208)`,
              color: mode === "dark" ? `black` : `rgb(97, 97, 208) `,
            }}
            onClick={removeExtraSpaceBtwLinesOnClick}
          >
            Remove Extra Space between Lines
          </button>
        </div>
        </div>
        <div>
        <p className="d-flex summary m-0">
            {WordCountWithOutSpace()} words and {text.length} characters
          </p>
          </div>
        <div className="TextPreview">
          <h3>Preview Your Text Here:</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
