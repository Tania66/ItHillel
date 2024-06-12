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

for (let i = 0; i <= 10; i++) {
  const element = i;
  let tdHeadEl = document.createElement("th");
  tdHeadEl.textContent = element;
  if (element === 0) {
    tdHeadEl.textContent = " ";
  }
  tableTrHeadEl.appendChild(tdHeadEl);
}

const tableBodyEl = document.createElement("tbody");
tableEl.appendChild(tableBodyEl);

const tableBodyTrEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrEl);

const valueEl = document.querySelectorAll(".tr_head th");

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 1;
  let tdBodyEl = document.createElement("td");
  tdBodyEl.textContent = element;
  if (element === 0) {
    tdBodyEl.textContent = "1";
    tdBodyEl.style.background = "#69BFE1";
    tdBodyEl.style.color = "#fff";
  }
  tableBodyTrEl.appendChild(tdBodyEl);
}

const tableBodyTrSecondEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrSecondEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 2;
  let tdBodySecondEl = document.createElement("td");
  tdBodySecondEl.textContent = element;
  if (element === 0) {
    tdBodySecondEl.textContent = "2";
    tdBodySecondEl.style.background = "#69BFE1";
    tdBodySecondEl.style.color = "#fff";
  }
  tableBodyTrSecondEl.appendChild(tdBodySecondEl);
}

const tableBodyTrThirdEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrThirdEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 3;
  let tdBodyThirdEl = document.createElement("td");
  tdBodyThirdEl.textContent = element;
  if (element === 0) {
    tdBodyThirdEl.textContent = "3";
    tdBodyThirdEl.style.background = "#69BFE1";
    tdBodyThirdEl.style.color = "#fff";
  }
  tableBodyTrThirdEl.appendChild(tdBodyThirdEl);
}

const tableBodyTrFourthEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrFourthEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 4;
  let tdBodyFourthEl = document.createElement("td");
  tdBodyFourthEl.textContent = element;
  if (element === 0) {
    tdBodyFourthEl.textContent = "4";
    tdBodyFourthEl.style.background = "#69BFE1";
    tdBodyFourthEl.style.color = "#fff";
  }
  tableBodyTrFourthEl.appendChild(tdBodyFourthEl);
}

const tableBodyTrFifthEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrFifthEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 5;
  let tdBodyFifthEl = document.createElement("td");
  tdBodyFifthEl.textContent = element;
  if (element === 0) {
    tdBodyFifthEl.textContent = "5";
    tdBodyFifthEl.style.background = "#69BFE1";
    tdBodyFifthEl.style.color = "#fff";
  }
  tableBodyTrFifthEl.appendChild(tdBodyFifthEl);
}

const tableBodyTrSixthEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrSixthEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 6;
  let tdBodySixthhEl = document.createElement("td");
  tdBodySixthhEl.textContent = element;
  if (element === 0) {
    tdBodySixthhEl.textContent = "6";
    tdBodySixthhEl.style.background = "#69BFE1";
    tdBodySixthhEl.style.color = "#fff";
  }
  tableBodyTrSixthEl.appendChild(tdBodySixthhEl);
}

const tableBodyTrSeventhEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrSeventhEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 7;
  let tdBodySeventhEl = document.createElement("td");
  tdBodySeventhEl.textContent = element;
  if (element === 0) {
    tdBodySeventhEl.textContent = "7";
    tdBodySeventhEl.style.background = "#69BFE1";
    tdBodySeventhEl.style.color = "#fff";
  }
  tableBodyTrSeventhEl.appendChild(tdBodySeventhEl);
}

const tableBodyTrEighthEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrEighthEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 8;
  let tdBodyEighthEl = document.createElement("td");
  tdBodyEighthEl.textContent = element;
  if (element === 0) {
    tdBodyEighthEl.textContent = "8";
    tdBodyEighthEl.style.background = "#69BFE1";
    tdBodyEighthEl.style.color = "#fff";
  }
  tableBodyTrEighthEl.appendChild(tdBodyEighthEl);
}

const tableBodyTrNinthEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrNinthEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 9;
  let tdBodyNinthEl = document.createElement("td");
  tdBodyNinthEl.textContent = element;
  if (element === 0) {
    tdBodyNinthEl.textContent = "9";
    tdBodyNinthEl.style.background = "#69BFE1";
    tdBodyNinthEl.style.color = "#fff";
  }
  tableBodyTrNinthEl.appendChild(tdBodyNinthEl);
}

const tableBodyTrTenthEl = document.createElement("tr");
tableBodyEl.appendChild(tableBodyTrTenthEl);

for (let i = 0; i <= valueEl.length - 1; i++) {
  const element = i * 10;
  let tdBodyTenthEl = document.createElement("td");
  tdBodyTenthEl.textContent = element;
  if (element === 0) {
    tdBodyTenthEl.textContent = "10";
    tdBodyTenthEl.style.background = "#69BFE1";
    tdBodyTenthEl.style.color = "#fff";
  }
  tableBodyTrTenthEl.appendChild(tdBodyTenthEl);
}
