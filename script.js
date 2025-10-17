const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const holo = document.querySelector('.hologram');
const holoResult = document.getElementById('holo-result');
const closeHolo = document.getElementById('close-holo');
const calculator = document.querySelector('.calculator');

let current = '';
let memory = null;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'C') {
      current = '';
      display.textContent = '';
    } else if (value === 'M') {
      if (memory === null) {
        memory = display.textContent;
      } else {
        display.textContent = memory;
        current = memory;
      }
    } else if (value === '=') {
      try {
        const result = eval(current);
        display.textContent = result;
        showHologram(result);
      } catch {
        display.textContent = 'Error';
      }
    } else {
      current += value;
      display.textContent = current;
    }
  });
});

function showHologram(result) {
  calculator.style.transform = 'rotateX(60deg)';
  holoResult.textContent = result;
  holo.classList.remove('hidden');
}

closeHolo.addEventListener('click', () => {
  holo.classList.add('hidden');
  calculator.style.transform = 'rotateX(0deg)';
});
