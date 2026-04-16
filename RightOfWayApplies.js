  // Script para el toggle de Derecho de Vía
  document.querySelectorAll('input[name="RightOfWayApplies"]').forEach((radio) => {
    radio.addEventListener('change', function() {
      const content = document.getElementById('rightOfWayContent');
      content.style.display = (this.value === 'true') ? 'block' : 'none';
    });
  });