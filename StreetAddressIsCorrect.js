// Toggle para notas de dirección
document.querySelectorAll('input[name="StreetAddressIsCorrect"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const container = document.getElementById("AddressNotesContainer");
    // Mostramos notas SOLO si la respuesta es "false" (No)
    container.style.display = this.value === "false" ? "block" : "none";
  });
});
