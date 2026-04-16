  // Toggle principal de la sección
  document.querySelectorAll('input[name="MaritimeZoneApplies"]').forEach((radio) => {
    radio.addEventListener('change', function() {
      const content = document.getElementById('maritimeZoneFullContent');
      content.style.display = (this.value === 'true') ? 'block' : 'none';
    });
  });

