async function loadPartial(slotId, path) {
  const slot = document.getElementById(slotId);
  if (!slot) return;
  const res = await fetch(path);
  slot.innerHTML = await res.text();
}

function wireDropdown() {
  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".dropdown").classList.toggle("open");
    });
  });
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown.open").forEach(d => {
      if (!d.contains(e.target)) d.classList.remove("open");
    });
  });
}

function wireWaitlistForms() {
  document.querySelectorAll("[data-waitlist-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.parentElement.querySelector("[data-waitlist-message]");
      if (msg) msg.textContent = "Thanks — you're on the list! We'll email you when Fruitful launches.";
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadPartial("nav-slot", "partials/nav.html"),
    loadPartial("footer-slot", "partials/footer.html"),
  ]);
  wireDropdown();
  wireWaitlistForms();
  if (typeof onPartialsLoaded === "function") onPartialsLoaded();
});
