// https://www.coinglass.com/pro/futures/LiquidationHeatMapNew

const intervalSeconds = 30;

const hideLoading = () => {
  // Fortschrittsbalken
  const progress = document.querySelector('.cg-style-9c5vqi');
  if (progress) progress.style.display = 'none';
  
  // Blur-Overlay
  const overlay = document.querySelector('.cg-style-1scqz9h');
  if (overlay) overlay.style.display = 'none';
};

const autoRefresh = setInterval(() => {
  const btn = document.querySelector('button.cg-style-nb177x');

  if (btn) {
    btn.click();
    console.log(`[AutoRefresh] Geklickt um ${new Date().toLocaleTimeString()}`);
    // Kurz warten bis Elemente erscheinen, dann verstecken
    setTimeout(hideLoading, 300);
    setTimeout(hideLoading, 600);
    setTimeout(hideLoading, 1000);
    setTimeout(hideLoading, 2000);
  } else {
    console.warn('[AutoRefresh] Button nicht gefunden!');
  }
}, intervalSeconds * 1000);

console.log(`[AutoRefresh] Gestartet – alle ${intervalSeconds} Sekunden.`);
// Zum Stoppen: clearInterval(autoRefresh)
