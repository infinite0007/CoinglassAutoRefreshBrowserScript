// Change intervalSeconds to your preferred refresh interval
const intervalSeconds = 30;

const hideLoading = () => {
  // Progress bar
  const progress = document.querySelector('.cg-style-9c5vqi');
  if (progress) progress.style.display = 'none';

  // Blur overlay
  const overlay = document.querySelector('.cg-style-1scqz9h');
  if (overlay) overlay.style.display = 'none';
};

const autoRefresh = setInterval(() => {
  const btn = document.querySelector('button.cg-style-nb177x');

  if (btn) {
    btn.click();
    console.log(`[AutoRefresh] Clicked at ${new Date().toLocaleTimeString()}`);
    // Wait briefly for elements to appear, then hide them
    setTimeout(hideLoading, 300);
    setTimeout(hideLoading, 600);
    setTimeout(hideLoading, 1000);
    setTimeout(hideLoading, 2000);
  } else {
    console.warn('[AutoRefresh] Button not found!');
  }
}, intervalSeconds * 1000);

console.log(`[AutoRefresh] Started – every ${intervalSeconds} seconds.`);
// To stop: clearInterval(autoRefresh)
