const statusEl = document.getElementById("status");
const swInfoEl = document.getElementById("swInfo");

const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

const STORAGE_KEY = "pwa_count";

// Estado online/offline
function updateOnlineStatus() {
  const online = navigator.onLine;
  statusEl.textContent = `Estado: ${online ? "Con internet ✅" : "Sin internet (offline) ⚠️"}`;
}
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
updateOnlineStatus();

// Contador persistente
function loadCount() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const value = saved ? Number(saved) : 0;
  return Number.isFinite(value) ? value : 0;
}

function saveCount(value) {
  localStorage.setItem(STORAGE_KEY, String(value));
}

let count = loadCount();
countEl.textContent = String(count);

plusBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = String(count);
  saveCount(count);
});

minusBtn.addEventListener("click", () => {
  count -= 1;
  countEl.textContent = String(count);
  saveCount(count);
});

// Registrar Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("./sw.js");
      swInfoEl.textContent = `Service Worker registrado ✅ (scope: ${reg.scope})`;
    } catch (err) {
      swInfoEl.textContent = `Error registrando Service Worker ❌: ${err}`;
    }
  });
} else {
  swInfoEl.textContent = "Tu navegador no soporta Service Workers.";
}
