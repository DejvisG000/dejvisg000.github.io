const grid = document.getElementById('grid');
  const success = document.getElementById('success');
  let expected = 1;

  function setupGrid() {
    grid.innerHTML = '';
    success.textContent = '';
    expected = 1;

    const numbers = Array.from({ length: 10 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

    numbers.forEach(num => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = num;

      cell.addEventListener('click', () => {
        if (parseInt(cell.textContent) === expected) {
          cell.classList.add('correct');
          expected++;
          if (expected > 10) {
            success.textContent = 'Úkol splněn!';
            resetPoDesetiSekundach()
          }
        } else {
          cell.classList.add('wrong');
          setTimeout(setupGrid, 800); // reset po 0,8s
        }
      });

      grid.appendChild(cell);
    });
  }

  setupGrid(); // spustit při načtení