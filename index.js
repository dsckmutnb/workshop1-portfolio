// Write Javascript code!
(async () => {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = `<h1 id="head">My Portfolio</h1>`;
  const portList = document.getElementById("port-list");
  const data = await (await fetch("./data.json")).json();
  data.forEach((r) => {
    const card = document.createElement("div");
    card.className = "my-card";
    card.innerHTML = `<img src="${r.image}" /><p><b>Project name: </b>${
      r.title
    }</p><p><b>Description: </b>${r.description}</p>
    </b><b>Lang: </b>${r.lang.map((l) => `<span class="lang">${l}</span>`)}`;
    portList.appendChild(card);
  });
})();
