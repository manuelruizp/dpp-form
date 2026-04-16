document.querySelectorAll('input[name="BuildingsWithin60mExist"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const container = document.getElementById("buildingsDescriptionContainer");
    // Mostramos la descripción solo si el valor es "true" (Sí existen)
    container.style.display = this.value === "true" ? "block" : "none";
  });
});
