document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const studentCedula = urlParams.get("id"); // Ahora "id" es la cédula

    fetch("https://docs.google.com/spreadsheets/d/1N7I1JPB2g_diEI0LzdqrzQzTmnLYFkBVZyYFTSgEVwY/export?format=csv")
        .then(response => response.text())
        .then(data => {
            let rows = data.split("\n");
            rows.forEach(row => {
                let cols = row.split(",");
                if (cols[0].trim() === studentCedula.trim()) {
                    document.getElementById("student-id").innerText = "Cédula: " + cols[0]; // Mostrar la cédula
                    document.getElementById("student-name").innerText = cols[1]; // Mostrar el nombre
                    document.getElementById("student-school").innerText = cols[3]; // Mostrar el colegio

                    let imageUrl = cols[6].trim(); // URL de la imagen en la columna correspondiente
                    console.log("Cargando imagen:", imageUrl);
                    document.getElementById("student-photo").src = imageUrl; // Mostrar la imagen
                    found = true;


                }
            });
        })
        .catch(error => console.error("Error al obtener datos:", error));
});
