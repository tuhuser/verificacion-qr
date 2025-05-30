document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id");

    fetch("https://docs.google.com/spreadsheets/d/Id/export?format=csv")
        .then(response => response.text())
        .then(data => {
            let rows = data.split("\n");
            rows.forEach(row => {
                let cols = row.split(",");
                if (cols[0] == Id) {
                    document.getElementById("Foto URL").src = cols[6]; // URL de la foto
                    document.getElementById("Nombre").innerText = cols[2]; // Nombre
                }
            });
        });
});
