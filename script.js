document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id");

    fetch("https://docs.google.com/spreadsheets/d/1N7I1JPB2g_diEI0LzdqrzQzTmnLYFkBVZyYFTSgEVwY/export?format=csv")
        .then(response => response.text())
        .then(data => {
            let rows = data.split("\n");
            rows.forEach(row => {
                let cols = row.split(",");
                if (cols[0].trim() === studentId.trim()) {
                    let imageUrl = cols[4].trim(); // Columna de la foto
                    console.log("Cargando imagen:", imageUrl); // Verifica la URL en consola
                    document.getElementById("student-photo").src = imageUrl;
                    document.getElementById("student-name").innerText = cols[1];
                }
            });
        })
        .catch(error => console.error("Error al obtener datos:", error));
});
