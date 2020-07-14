import React from "react";

// let hello = "Hello component";
const HelloWorld = (props) => {
  return (
    <div>
      <span>
        {props.helloObj.hello + ", "}
        {props.helloObj.firstName + " "}
        {props.helloObj.lastName}
      </span>
    </div>
  );
};

export default HelloWorld;
