// Script para el toggle de Accesos a Playa
document.querySelectorAll('input[name="BeachAccessApplies"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const content = document.getElementById("beachAccessContent");
    content.style.display = this.value === "true" ? "block" : "none";
  });
});
