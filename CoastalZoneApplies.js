document.querySelectorAll('input[name="CoastalZoneApplies"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    const content = document.getElementById('coastalFullContent');
    content.style.display = (this.value === 'true') ? 'block' : 'none';
  });
});