import React from "react";
import GenderPieChart from "./GenderPieChart";
import IncomeAreaChart from "./IncomeAreaChart";
import ShirtSizeBarChart from "./ShirtSizeBarChart";
// import Draggable from "react-draggable";
import "./Demo.css";

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

function Demo() {
  return (
    <div className="bodyy">
      <div className="container">
        <h1 className="draggable" draggable="true">
          This is your demo page
        </h1>
        <div className="draggable" draggable="true">
          <GenderPieChart />
        </div>
      </div>
      <div className="container">
        <div className="draggable" draggable="true">
          <ShirtSizeBarChart />
        </div>
        <div className="draggable" draggable="true">
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
