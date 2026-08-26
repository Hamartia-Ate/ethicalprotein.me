(function () {
  const MEAT_IMAGES = [
    "assets/meat-fly/poultry-leg.svg",
    "assets/meat-fly/meat-bone.svg",
    "assets/meat-fly/bacon.svg",
    "assets/meat-fly/hotdog.svg",
    "assets/meat-fly/burger.svg",
    "assets/meat-fly/pig.svg",
  ];

  const overlay = document.createElement("div");
  overlay.id = "meat-frenzy-overlay";
  document.body.appendChild(overlay);

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function spawnFrenzy() {
    const banner = document.createElement("div");
    banner.className = "meat-frenzy-banner";
    banner.textContent = "WE LOVE MEAT!";
    overlay.appendChild(banner);
    setTimeout(() => banner.remove(), 1400);

    const count = window.innerWidth < 500 ? 8 : 14;
    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      img.src = MEAT_IMAGES[Math.floor(Math.random() * MEAT_IMAGES.length)];
      img.className = "meat-frenzy-piece";

      const startX = rand(0, window.innerWidth);
      const startY = window.innerHeight + rand(20, 200);
      const endX = rand(0, window.innerWidth);
      const endY = -rand(100, 300);
      const size = window.innerWidth < 500 ? rand(36, 70) : rand(50, 110);
      const rotStart = rand(-60, 60);
      const rotEnd = rotStart + rand(360, 1080) * (Math.random() < 0.5 ? 1 : -1);
      const duration = rand(900, 1600);
      const delay = rand(0, 200);

      img.style.width = size + "px";
      img.style.height = size + "px";
      img.style.setProperty("--start-x", startX + "px");
      img.style.setProperty("--start-y", startY + "px");
      img.style.setProperty("--end-x", endX + "px");
      img.style.setProperty("--end-y", endY + "px");
      img.style.setProperty("--rot-start", rotStart + "deg");
      img.style.setProperty("--rot-end", rotEnd + "deg");
      img.style.animationDuration = duration + "ms";
      img.style.animationDelay = delay + "ms";

      overlay.appendChild(img);
      setTimeout(() => img.remove(), duration + delay + 100);
    }
  }

  document.querySelectorAll(".meat-cta").forEach(function (btn) {
    btn.addEventListener("click", spawnFrenzy);
  });

  window.addEventListener("load", function () {
    setTimeout(spawnFrenzy, 400);
  });
})();
