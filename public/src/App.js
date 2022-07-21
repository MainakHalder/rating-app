import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  indian: [
    { name: "Panner Makhani", rating: "4.0" },
    { name: "Curd Rice", rating: "3.8" },
    { name: "Rajma chawal", rating: "3.6" }
  ],
  chinese: [
    { name: "Chicken Manchurian", rating: "3.6" },
    { name: "Grilled Dumplings", rating: "4.4" }
  ],
  mughlai: [
    { name: "Biriyani", rating: "4.8" },
    { name: "Tikka", rating: "4.6" }
  ]
};

export default function app() {
  var [library, setlibrary] = useState("indian");
  function foodLibrary(event) {
    setlibrary(event);
  }

  return (
    <div className="App">
      <h1>Good food🍲</h1>
      <p>These app show ratings of my favourite foods out of 5.</p>
      <p>Click each button to view 👇🏽</p>
      <div>
        {Object.keys(foodDictionary).map((event) => (
          <button
            onClick={() => foodLibrary(event)}
            style={{
              cursor: "pointer",
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "10px"
            }}
          >
            {event}
          </button>
        ))}
      </div>
      <br />
      <div>
        <ul>
          {foodDictionary[library].map((food) => (
            <li
              style={{
                listStyle: "none",
                margin: "0.5rem",
                padding: "0.5rem"
              }}
            >
              <div>🍽️ {food.name}</div>
              <div>Rating-{food.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}