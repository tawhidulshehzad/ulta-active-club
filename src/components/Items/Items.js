import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import List from "../List/List";
import "./Items.css";

const Items = () => {
  const [exercises, setExercises] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  const handleAddToList = (exercise) => {
    const newList = [...list, exercise];
    setList(newList);
  };

  return (
    <div className="items-container">
      <div className="exercises-container">
        {exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
            handleAddToList={handleAddToList}
            name={exercise.name}
          ></Exercise>
        ))}
      </div>
      <div className="summarie">
        <List list={list}></List>
      </div>
    </div>
  );
};

export default Items;
