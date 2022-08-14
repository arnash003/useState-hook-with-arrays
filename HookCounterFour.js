import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };
  return (
    <div>
      <button onClick={addItem}> Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;

// Whenever addItem is called, we make a copy of the items in the array using the spread operator.
// To that list of copied items, we append another object. And we dont override the intial array
// useState hook lets you add state to functional components
// Make a copy using the spread operator
// When we call useState we create a single piece of state
// In classes, the state is always an object
// With the useState hook, the state does not have to be an object
// useState hook returns an array with 2 elements
// The first element is the current value of the state, and the second element is a state setter fucntion
// If your new state value depends on the previous state value, you can pass a function to the setter function
