document.addEventListener("DOMContentLoaded", function () {
  const table = document
    .getElementById("tombolaTable")
    .getElementsByTagName("tbody")[0];
  let count = 1;

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("td");
      cell.textContent = count;
      row.appendChild(cell);
      count++;
      if (count > 80) break;
    }
    table.appendChild(row);
    if (count > 80) break;
  }

  const estraiNumero = function () {
    const min = 1;
    const max = 80;
    const numeroEstratto = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById(
      "numeroEstratto"
    ).textContent = `Numero estratto: ${numeroEstratto}`;
  };

  const button = document.querySelector("button");
  button.addEventListener("click", estraiNumero);
});
