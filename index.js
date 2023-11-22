document.addEventListener("DOMContentLoaded", function () {
  let idCount = 1;

  const container = document.querySelector("#container");

  const initialBox = document.createElement("div");
  initialBox.className = "box";
  initialBox.style.display = "none"; // Hide the initial box
  initialBox.innerHTML = `
    <p>id: id${idCount}</p>
  `;

  const initialButton = document.createElement("button");
  initialButton.textContent = "Clone Box";
  initialButton.addEventListener("click", cloneBox);

  initialBox.appendChild(initialButton);

  container.appendChild(initialBox);

  function cloneBox() {
    const newBox = document.createElement("div");
    newBox.className = "box";
    newBox.innerHTML = `
      <p>id${idCount}</p>
    `;

    const newButton = document.createElement("button");
    newButton.textContent = "Clone Box";
    newButton.addEventListener("click", cloneBox);

    newBox.appendChild(newButton);
    const imageElement = document.querySelector("#boxImage");

    newBox.appendChild(imageElement.cloneNode(true));
    container.appendChild(newBox);

    idCount++;
  }

  cloneBox();
});
