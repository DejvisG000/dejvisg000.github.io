function overZasobu() {
      const input = document.getElementById("zasoba");
      const vysledek = document.getElementById("vysledek");
      if (input.value && parseInt(input.value) == 5694) {
        vysledek.textContent = "✔️ Úkol splněn.";
        vysledek.style.color = "#00ff99";
        resetPoDesetiSekundach();
      } else {
        vysledek.textContent = "Špatný kód.";
        vysledek.style.color = "#ff4444";
        resetPoDesetiSekundach();
      }
    }