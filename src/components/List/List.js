import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const List = (props) => {
  const { list } = props;
  let total = 0;
  for (const lis of list) {
    total = total + lis.time;
  }

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
      <div
        className="break"
        style={{
          backgroundColor: "lightGray",
          padding: "5px",
          borderRadius: "5px",
          display: "flex",
        }}
      >
        <h2>10</h2>
        <h2>20</h2>
        <h2>30</h2>
        <h2>40</h2>
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
      <h4>Exercise time: {total}s </h4>
      <h4>Break time: </h4>
      <button
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
