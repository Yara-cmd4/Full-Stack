import React from "react";
import UploadFiles from "../UploadFiles/UploadFiles.js";
import CustomizedHook from "./CustomizedHook/CustomizedHook";
import "./SuggestionFrom.css";

export default function SuggestionFrom() {
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="suggestionFromContainer">
    <div className='title'><icon className="fa fa-bullhorn icon" style={{marginRight:"20px"}}></icon>
    <div className="vertical-line"></div><h6>הגשת הצעה</h6></div>
      <form className="suggestionFrom" onSubmit={handleSubmit}>
        <div>
          <label className="suggestionSubject">נושא הצעה לסדר :</label>
          <input className="suggestionSubjectInput"></input>
          <label>דברי הסבר :</label>
          <textarea className="suggestionExplanation"></textarea>
        </div>
        <div>
          <label>ח"כים רלוונטיים :</label>
          <CustomizedHook style={{ width: "fit-content" }}></CustomizedHook>
          <label>קבצים ומסמכים תומכים : </label>

          <UploadFiles></UploadFiles>
          <br />
          <br />
          <br />

          <button className="submitBtn" type="submit">
            שלח
          </button>
        </div>
      </form>
    </div>
  );
}