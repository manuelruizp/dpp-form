// Toggle para mostrar/ocultar linderos
document.querySelectorAll('input[name="SetbacksApply"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.getElementById("setbacksContent").style.display = this.value === "true" ? "block" : "none";
  });
});
