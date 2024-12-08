const minSlider = document.getElementById("min-slider");
const maxSlider = document.getElementById("max-slider");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const sliderFill = document.querySelector(".slider-fill");

function updateSliderFill() {
  const minValue = parseInt(minSlider.value);
  const maxValue = parseInt(maxSlider.value);
  const range = maxSlider.max - maxSlider.min;
  const fillStart = ((minValue - minSlider.min) / range) * 100;
  const fillWidth = ((maxValue - minSlider.min) / range) * 100 - fillStart;

  sliderFill.style.left = `${fillStart}%`;
  sliderFill.style.width =`${fillWidth}%`
}

function updateSlider() {
  let minValue = parseInt(minSlider.value);
  let maxValue = parseInt(maxSlider.value);

  if (minValue >= maxValue) {
    minSlider.value = maxValue - 1;
  }

  minPriceInput.value = minSlider.value;
  maxPriceInput.value = maxSlider.value;

  updateSliderFill();
}

function updateInput() {
  let minValue = parseInt(minPriceInput.value);
  let maxValue = parseInt(maxPriceInput.value);

  if (minValue >= maxValue) {
    minPriceInput.value = maxValue - 1;
  }

  minSlider.value = minPriceInput.value;
  maxSlider.value = maxPriceInput.value;

  updateSliderFill();
}

minSlider.addEventListener("input", updateSlider);
maxSlider.addEventListener("input", updateSlider);
minPriceInput.addEventListener("input", updateInput);
maxPriceInput.addEventListener("input", updateInput);

updateSliderFill();

const checkboxes = document.querySelectorAll('.circle-checkbox');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      checkboxes.forEach((cb) => {
        if (cb !== e.target) {
          cb.checked = false;
        }
      });
    }
  });
});