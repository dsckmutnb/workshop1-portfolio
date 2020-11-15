// Import stylesheets
import "./style.css";
import data from "./data.json";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1 id="head">My Portfolio</h1>`;
const portList = document.getElementById("port-list");

data.forEach(r => {
  const card = document.createElement("div");
  card.className = "my-card";
  card.innerHTML = `<img src="${r.image}" /><p><b>Project name: </b>${
    r.title
  }</p>`;
  portList.appendChild(card);
});
