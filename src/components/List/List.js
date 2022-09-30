import React from "react";

const List = () => {
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
      <h4>Exercise time: </h4>
      <h4>Break time: </h4>
    </div>
  );
};

export default List;
