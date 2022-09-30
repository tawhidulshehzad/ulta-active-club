import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { name, img, time, text } = props.exercise;
  const { handleAddToList } = props;
  return (
    <div className="exercise">
      <img src={img} alt="" />
      <div className="ex-info">
        <p className="exercise-title">{name}</p>
        <p>{text}</p>
        <p>Time Required: {time}s</p>
        <button
          onClick={() => handleAddToList(props.exercise)}
          className="btn-ex"
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Exercise;
