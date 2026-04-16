document.querySelectorAll('input[name="MaritimeZoneApplies"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const content = document.getElementById("maritimeZoneContent");
    content.style.display = this.value === "true" ? "block" : "none";
  });
});
