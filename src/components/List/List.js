import './List.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { addToDab, getStoredTime } from "../Database/Database";

const List = (props) => {
  const { list } = props;
  const [breakTime, setBreakTime] = useState([]);

  useEffect(() => {
    const storedTime = getStoredTime();
    const savedBreakTime = [];
    for (const e in storedTime) {
      savedBreakTime.push(e);

      setBreakTime(savedBreakTime);
    }
  }, []);

  const handleToBreak = (e) => {
    setBreakTime(e.target.value);
    addToDab(e.target.value);
  };

  let total = 0;
  for (const lis of list) {
    total = total + lis.time;
  }
  const notify = () => toast("wow done");

  return (
    <div>
      <h3
        style={{
          backgroundColor: "lightGray",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        {" "}
        Tawhidul Islam
      </h3>
      <h4
        style={{
          backgroundColor: "lightGray",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Weight: 70 <small>kg</small>{" "}
      </h4>
      <h4
        style={{
          backgroundColor: "lightGray",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Group: <small>A Section</small>{" "}
      </h4>
      <h4
        style={{
          backgroundColor: "lightGray",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Age: 25 <small>Year</small>{" "}
      </h4>
      <h4
        style={{
          backgroundColor: "lightblue",
          padding: "5px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Added A break{" "}
      </h4>
      <div className="localStorage">
        <input onClick={handleToBreak} value="10" type="button" />
        <input onClick={handleToBreak} value="20" type="button" />
        <input onClick={handleToBreak} value="30" type="button" />
        <input onClick={handleToBreak} value="40" type="button" />
      </div>
      <h3
        style={{
          border: "2px solid gray",
          padding: "5px",
          textAlign: "center",
        }}
      >
        Exercise Details
      </h3>
      <h4>Exercise Time: {total}s </h4>
      <h4>Break Time: {breakTime} </h4>
      <button
        onClick={notify}
        style={{
          backgroundColor: "lightBlue",
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          fontSize: "20px",
        }}
      >
        Activity Done
      </button>
    </div>
  );
};


export default List;
