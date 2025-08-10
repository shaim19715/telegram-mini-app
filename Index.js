let tg = window.Telegram.WebApp;

document.getElementById("helloBtn").addEventListener("click", () => {
  tg.showAlert("Hello from Mini App!");
});

// Optional: expand app to full height
tg.expand();