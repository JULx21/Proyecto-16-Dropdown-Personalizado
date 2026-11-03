// Elementos del DOM
const boton = document.getElementById("dropdown-btn");
const texto = document.getElementById("dropdown-text");
const flecha = document.getElementById("dropdown-arrow");
const lista = document.getElementById("dropdown-list");
const items = document.querySelectorAll("#dropdown-list li");

// Abrir o cerrar el desplegable al hacer clic en el botón
boton.addEventListener("click", function () {
  lista.classList.toggle("open");

  if (lista.classList.contains("open")) {
    flecha.textContent = "^";
  } else {
    flecha.textContent = "v";
  }
});

// Seleccionar un elemento
items.forEach(function (item) {
  item.addEventListener("click", function () {
    // Quitar el resaltado a todos
    items.forEach(function (i) {
      i.classList.remove("selected");
    });

    // Resaltar el elegido y mostrarlo en el boton
    item.classList.add("selected");
    texto.textContent = item.textContent;

    // Cerrar el desplegable
    lista.classList.remove("open");
    flecha.textContent = "v";
  });
});
