document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id");

    fetch("https://docs.google.com/spreadsheets/d/1N7I1JPB2g_diEI0LzdqrzQzTmnLYFkBVZyYFTSgEVwY/export?format=csv")
        .then(response => response.text())
        .then(data => {
            let rows = data.split("\n");
            rows.forEach(row => {
                let cols = row.split(",");
                if (cols[0] == studentId) {
                    document.getElementById("student-photo").src = cols[4]; // Enlace a la foto
                    document.getElementById("student-name").innerText = cols[1]; // Nombre del estudiante
                }
            });
        });
});
