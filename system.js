function resetPoDesetiSekundach() {
  setTimeout(() => {
    location.reload();
  }, 5000); // 5 000 ms = 5 sekund
}

const menu = document.getElementById("menu"); //menu

    function odemknoutMenu() {
      const kod = prompt("Zadej kód pro přístup k menu:");
      if (kod === "1234") {
        menu.style.display = "flex";
      } else {
        alert("Nesprávný kód.");
      }
    }

    function zmenStranku(nazev) {
      if (nazev === 'sprava') {
        window.location.href = "sprava_zasob.html";
      } else if (nazev === 'diagnostika') {
        window.location.href = "diagnostika.html";
      } else if (nazev === 'spojovani') {
        window.location.href = "index.html";
      }
    } 
      //menu konec


    