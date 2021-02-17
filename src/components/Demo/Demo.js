import React from "react";
import GenderPieChart from "./GenderPieChart";
import IncomeAreaChart from "./IncomeAreaChart";
import ShirtSizeBarChart from "./ShirtSizeBarChart";
import interact from "interactjs";
import "./Demo.css";

interact(".test")
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move(event) {
        let target = event.target;
        let x = parseFloat(target.getAttribute("data-x")) || 0;
        let y = parseFloat(target.getAttribute("data-y")) || 0;

        // update the element's style
        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
          "translate(" + x + "px," + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
        // target.textContent =
        //   Math.round(event.rect.width) +
        //   "\u00D7" +
        //   Math.round(event.rect.height);
      },
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: "parent",
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 },
      }),
    ],

    inertia: true,
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],
  });

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
