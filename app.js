document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("year").textContent = new Date().getFullYear();

  const grid = document.getElementById("grid");
  const search = document.getElementById("searchInput");
  const emptyText = document.getElementById("emptyText");
  let allData = [];

  fetch('agencies.json')
    .then(res => res.json())
    .then(data => {
      allData = data;
      renderAgencies();
    });

  function renderAgencies() {
    const query = (search?.value || "").trim().toLowerCase();
    const filtered = allData.filter(a =>
      a.name.toLowerCase().includes(query)
    );

    grid.innerHTML = "";
    if (filtered.length === 0) {
      emptyText.classList.remove("hidden");
      return;
    }
    emptyText.classList.add("hidden");

    for (const a of filtered) {
      const el = document.createElement("div");
      el.className = "agency-card";
      el.innerHTML = `
        <div class="badge">${a.badge}</div>
        <div>
          <h3 class="font-semibold">${a.name}</h3>
          <p class="text-sm text-slate-500">${a.desc || ""}</p>
          <a href="details.html?id=${a.id}" class="view-btn mt-1 inline-block">ดูรายละเอียด</a>
        </div>
      `;
      grid.appendChild(el);
    }
  }

  search?.addEventListener("input", renderAgencies);

  const buttons = document.querySelectorAll(".menu-btn");
  const sections = document.querySelectorAll(".section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active", "bg-slate-200", "font-semibold"));
      sections.forEach(sec => sec.classList.add("hidden"));

      btn.classList.add("active", "bg-slate-200", "font-semibold");
      const targetId = btn.getAttribute("data-target");
      document.getElementById(targetId).classList.remove("hidden");
    });
  });

  document.querySelector('[data-target="newsSection"]').click();
});
