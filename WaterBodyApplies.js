// Toggle para cuerpos de agua
document.querySelectorAll('input[name="WaterBodyApplies"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const content = document.getElementById("waterBodyContent");
    content.style.display = this.value === "true" ? "block" : "none";
  });
});
