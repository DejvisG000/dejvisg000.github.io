 const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const leftDots = document.querySelectorAll("#left .dot");
    const rightDots = document.querySelectorAll("#right .dot");
    let connections = {};
    let selectedLeft = null;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function getCenter(elem) {
      const rect = elem.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    }

    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let color in connections) {
        const from = getCenter(connections[color][0]);
        const to = getCenter(connections[color][1]);
        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }
    }

    leftDots.forEach(dot => {
      dot.addEventListener("click", () => {
        selectedLeft = dot;
      });
    });

    rightDots.forEach(dot => {
      dot.addEventListener("click", () => {
        if (selectedLeft && selectedLeft.dataset.color === dot.dataset.color) {
          connections[dot.dataset.color] = [selectedLeft, dot];
          selectedLeft = null;
          drawLines();
          checkComplete();
        }
      });
    });

    function checkComplete() {
      if (Object.keys(connections).length === 4) {
        document.getElementById("success").textContent = "✔️ Úkol splněn.";
        resetPoDesetiSekundach()
      }
    }

    