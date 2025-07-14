const diagnostikaText = document.getElementById("diagnostikaText");
    const result = document.getElementById("result");
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.getElementById("progressBar");

    function spustitDiagnostiku() {
      diagnostikaText.textContent = "Probíhá diagnostika systému...";
      result.textContent = "";
      progressBar.style.width = "0%";
      progressContainer.style.display = "block";

      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + "%";
        if (progress >= 100) {
          clearInterval(interval);
          diagnostikaText.textContent = "Vše je v pořádku.";
          result.textContent = "✔️ Úkol splněn.";
          result.style.color = "#00ff99";
          resetPoDesetiSekundach()
        }
      }, 100); // 100 * 100ms = 10 sekund
    }