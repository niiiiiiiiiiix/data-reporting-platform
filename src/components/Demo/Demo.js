import React from "react";
import GenderPieChart from "./GenderPieChart";
import IncomeAreaChart from "./IncomeAreaChart";
import ShirtSizeBarChart from "./ShirtSizeBarChart";
import interact from "interactjs";
import "./Demo.css";

// target elements with the "draggable" class
interact(".test").draggable({
  //enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restrictions: "parent",
      endOnly: true,
    }),
  ],
  // enable autoScroll
  autoScroll: true,
  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,
  },
});

function dragMoveListener(event) {
  let target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  //update the position attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

function Demo() {
  return (
    <div>
      <h1 className="test">This is your demo page</h1>
      <div className="container">
        <div>
          <GenderPieChart />
        </div>
        <div>
          <ShirtSizeBarChart />
        </div>
        <div>
          <IncomeAreaChart />
        </div>
      </div>

      <div>
        <data />
      </div>
    </div>
  );
}

export default Demo;
