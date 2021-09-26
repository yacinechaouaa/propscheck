import React from "react";
const MyComponent = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    alert(`the name is ${props.fullName}`);
  };

  return (
    <div>
      <p className="myText">
        Hello , am{" "}
        <span style={{ textDecoration: "underline" }}>
          {props.fullName} , {props.bio}{" "}
        </span>{" "}
        <br /> and I am{" "}
        <span style={{ textDecoration: "underline" }}>{props.profession}</span>
      </p>
      <div>{props.children}</div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "green" /* Green */,
          border: "none",
          color: "white",
          padding: "20px",
          textAlign: "center",
          textDecoration: "none",
          marginTop: "20px",
          borderRadius: "8px",
          marginLeft: "50%",
          marginBottom: "30px",
        }}
      >
        click me
      </button>
    </div>
  );
};
export default MyComponent;
