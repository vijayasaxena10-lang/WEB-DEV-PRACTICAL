import React from "react";
import Child from "./Child";

function Parent() {
  const name = "Rahul";        // string
  const age = 20;              // number
  const hobby = ["Gaming", "Coding", "Music"];  // array

  return (
    <div>
      <h1>Parent Component</h1>

      <Child 
        name={name} 
        age={age} 
        hobby={hobby} 
      />
    </div>
  );
}

export default Parent;