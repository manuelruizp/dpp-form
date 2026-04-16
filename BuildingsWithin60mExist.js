// Toggle específico para descripción de edificaciones
document
  .querySelectorAll('input[name="BuildingsWithin60mExist"]')
  .forEach((radio) => {
    radio.addEventListener("change", function () {
      const container = document.getElementById(
        "buildingsDescriptionContainer",
      );
      container.style.display = this.value === "true" ? "block" : "none";
    });
  });
