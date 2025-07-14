const diagnostikaSection = document.getElementById("diagnostika");
const zasobySection = document.getElementById("zasoby");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const diagnostikaText = document.getElementById("diagnostikaText");
const result = document.getElementById("result");

const textInput = document.getElementById("textInput");
const soupInput = document.getElementById("soupInput");

let currentTask = "";

function pickTask() {
  diagnostikaSection.classList.add("hidden");
  zasobySection.classList.add("hidden");
  result.textContent = "";

  const tasks = ["diagnostika", "zasoby"];
  currentTask = tasks[Math.floor(Math.random() * tasks.length)];

  if (currentTask === "diagnostika") {
    taskTitle.textContent = "Diagnostika jádra";
    const textSamples = [
      "Error 0xFFAC - Kernel panic",
      "Core temperature stable",
      "Reboot sequence initiated",
      "System integrity: OK"
    ];
    const sample = textSamples[Math.floor(Math.random() * textSamples.length)];
    diagnostikaText.textContent = sample;
    textInput.value = "";
    diagnostikaSection.classList.remove("hidden");
    taskDescription.textContent = "Přepiš přesně diagnostický výstup systému.";
  }

  if (currentTask === "zasoby") {
    taskTitle.textContent = "Správa zásob";
    soupInput.value = "";
    zasobySection.classList.remove("hidden");
    taskDescription.textContent = "Zjisti kolik porcí guláše máme ve skladu.";
  }
}

function checkDiagnostika() {
  const expected = diagnostikaText.textContent.trim();
  const userInput = textInput.value.trim();
  if (expected === userInput) {
    result.textContent = "✔️ Správně zapsáno.";
    result.style.color = "#00ff99";
  } else {
    result.textContent = "❌ Nesouhlasí, zkus to znovu.";
    result.style.color = "#ff5555";
  }
  setTimeout(pickTask, 10000);
}

function checkZasoby() {
  const value = parseInt(soupInput.value);
  if (value === 42) {
    result.textContent = "✔️ Správně! Ve skladu je 42 porcí guláše.";
    result.style.color = "#00ff99";
  } else {
    result.textContent = "❌ Není správně. Tipni znovu.";
    result.style.color = "#ff5555";
  }
  setTimeout(pickTask, 10000);
}

window.onload = pickTask;
