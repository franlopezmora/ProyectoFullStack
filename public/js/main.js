document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("#tabla-locales tbody");
  const filtroTexto = document.querySelector("#filtro-texto");
  const filtroHemisferio = document.querySelector("#filtro-hemisferio");
  const btnFiltrar = document.querySelector("#btn-filtrar");

  function cargarLocales(query = "") {
    fetch(`/api/locales${query}`)
      .then(res => res.json())
      .then(data => {
        tabla.innerHTML = "";
        data.forEach(local => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${local.nombre}</td>
            <td>${local.direccion}</td>
            <td>${local.ciudad}</td>
            <td>${local.pais}</td>
            <td>${local.hemisferio}</td>
          `;
          tabla.appendChild(tr);
        });
      });
  }

  btnFiltrar.addEventListener("click", () => {
    const texto = filtroTexto.value;
    const hemisferio = filtroHemisferio.value;
    const query = `?texto=${texto}&hemisferio=${hemisferio}`;
    cargarLocales(query);
  });

  cargarLocales();
});
