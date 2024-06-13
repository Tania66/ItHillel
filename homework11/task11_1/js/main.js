const containerEl = document.createElement("div");
containerEl.classList.add("container");
document.body.appendChild(containerEl);

const tableEl = document.createElement("table");
tableEl.classList.add("table");
containerEl.appendChild(tableEl);

const tabletHeadEl = document.createElement("thead");
tabletHeadEl.classList.add("thead");
tableEl.appendChild(tabletHeadEl);

const tableTrHeadEl = document.createElement("tr");
tableTrHeadEl.classList.add("tr_head");
tabletHeadEl.appendChild(tableTrHeadEl);

const tableBodyEl = document.createElement("tbody");
tableEl.appendChild(tableBodyEl);

for (let i = 1; i <= 10; i++) {
  let tdHeadEl = document.createElement("th");
  tdHeadEl.textContent = i;
  tableTrHeadEl.appendChild(tdHeadEl);
  let tableBodyTrEl = document.createElement("tr");
  tableBodyTrEl.classList.add("tr_body");
  for (let j = 1; j <= 10; j++) {
    const element = i * j;
    let tableBodyTdEl = document.createElement("td");
    tableBodyTdEl.classList.add("td_body");
    tableBodyEl.appendChild(tableBodyTrEl);
    tableBodyTdEl.textContent = element;
    tableBodyTrEl.appendChild(tableBodyTdEl);
  }
}
const trBody = document.querySelectorAll(".tr_body");
for (const elem of trBody) {
  elem.firstChild.style.background = "#69BFE1";
  elem.firstChild.style.color = "#fff";
}
