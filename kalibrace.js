document.addEventListener('DOMContentLoaded', () => {
  const targetValue = 70; // Cílová hodnota pro kalibraci
  const tolerance = 3;    // Povolený rozdíl od cílové hodnoty

  const sliders = [
    document.getElementById('slider1'),
    document.getElementById('slider2'),
    document.getElementById('slider3'),
  ];
  const checkBtn = document.getElementById('checkBtn');
  const result = document.getElementById('result');

  function isCalibrated() {
    return sliders.every(slider => {
      const val = parseInt(slider.value, 10);
      return Math.abs(val - targetValue) <= tolerance;
    });
  }

  checkBtn.addEventListener('click', () => {
    if (isCalibrated()) {
      result.textContent = 'Úkol splněn! Motor je správně kalibrován.';
      result.style.color = '#2ecc71'; // zelená barva
      resetPoDesetiSekundach()
    } else {
      result.textContent = 'Kalibrace není správná. Nastav posuvníky na modrou značku.';
      result.style.color = '#e74c3c'; // červená barva
    }
  });
});
