document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id");

    fetch("https://docs.google.com/spreadsheets/d/1N7I1JPB2g_diEI0LzdqrzQzTmnLYFkBVZyYFTSgEVwY/edit?gid=0#gid=0/export?format=csv")
        .then(response => response.text())
        .then(data => {
            let rows = data.split("\n");
            rows.forEach(row => {
                let cols = row.split(",");
                if (cols[0] == studentId) { // La columna ID está en la posición 0
                    document.getElementById("student-photo").src = cols[4]; // Enlace de la foto
                    document.getElementById("student-name").innerText = cols[1]; // Nombre
                }
            });
        });
});
