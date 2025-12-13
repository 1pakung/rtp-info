document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButtons = document.querySelectorAll(".menu-btn");
  const sections = document.querySelectorAll(".section");

  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sections.forEach(sec => sec.classList.add("hidden"));
      menuButtons.forEach(b => b.classList.remove("active"));

      const targetId = btn.dataset.target;
      document.getElementById(targetId)?.classList.remove("hidden");
      btn.classList.add("active");
    });
  });

  const grid = document.getElementById("grid");
  const search = document.getElementById("searchInput");
  const emptyText = document.getElementById("emptyText");
  let allData = [];

  if (grid) {
    fetch("agencies.json")
      .then(res => res.json())
      .then(data => {
        allData = data;
        renderAgencies();
      });
  }

  function renderAgencies() {
    const query = (search?.value || "").toLowerCase();
    const filtered = allData.filter(a =>
      a.name.toLowerCase().includes(query)
    );

    grid.innerHTML = "";

    if (filtered.length === 0) {
      emptyText.classList.remove("hidden");
      return;
    }
    emptyText.classList.add("hidden");

    filtered.forEach(a => {
      const el = document.createElement("div");
      el.className = "agency-card";

      el.innerHTML = `
  <div class="agency-logo w-16 h-16 rounded-xl bg-slate-100
              flex items-center justify-center overflow-hidden">
    ${a.pic
      ? `<img src="${a.pic}" alt="${a.name}">`
      : `<div class="text-xs text-slate-400">รูปตรา</div>`
    }
  </div>

  <div class="agency-info">
    <h3 class="agency-title">${a.name}</h3>
    <p class="agency-desc">${a.duty || ""}</p>

    <div class="flex gap-2 mt-2">
      <a href="details.html?id=${a.id}" class="view-btn">
        ดูรายละเอียด
      </a>

      ${a.serverLink ? `
        <a href="${a.serverLink}" target="_blank"
           class="view-btn secondary">
          Discord
        </a>` : ""}
    </div>
  </div>
`;

      grid.appendChild(el);
    });
  }

  search?.addEventListener("input", renderAgencies);

  const newsData = [
    {
      text: "🤍 ทีมคณะกรรมการบริหารและพัฒนา และ สมาชิกผู้เล่น ทำงานในรั้วตำรวจไทย น้อมส่งเสด็จสู่สวรรคาลัย สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง ขอถวายความอาลัยอย่างสุดซึ้ง 🖤",
      img: "https://img.pptvhd36.com/thumbor/2025/10/25/news-5df345a.jpg"
    }
  ];

  let newsIndex = 0;
  const newsBox = document.getElementById("newsBox");
  const prevBtn = document.getElementById("prevNews");
  const nextBtn = document.getElementById("nextNews");

  function renderNews() {
    if (!newsBox) return;

    const n = newsData[newsIndex];
    newsBox.style.opacity = 0;

    setTimeout(() => {
      newsBox.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6 items-center">
          ${n.img ? `<img src="${n.img}" class="news-image">` : ""}
          <p class="news-text">${n.text}</p>
        </div>
      `;
      newsBox.style.opacity = 1;
    }, 200);
  }

  prevBtn?.addEventListener("click", () => {
    newsIndex = (newsIndex - 1 + newsData.length) % newsData.length;
    renderNews();
  });

  nextBtn?.addEventListener("click", () => {
    newsIndex = (newsIndex + 1) % newsData.length;
    renderNews();
  });

  renderNews();
});
