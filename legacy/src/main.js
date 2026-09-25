const ANTENNES = [
  {
    name: "Saint-Médard-en-Jalles",
    phone: "07 83 51 06 43",
    schedule: [
      { ages: "Adultes", days: "Lundi, Mercredi", hours: "19h30-21h", address: "Salle Louise Michelle" },
      { ages: "Adultes", days: "Samedi", hours: "11h30-13h", address: "Salle Léo Lagrange" },
      { ages: "Enfants 4-6 ans", days: "Mercredi", hours: "16h45-17h30", address: "Salle Louise Michelle" },
      { ages: "Enfants 7-9 ans", days: "Mercredi", hours: "17h30-18h30", address: "Salle Louise Michelle" },
      { ages: "Enfants 10-12 ans", days: "Mercredi", hours: "18h30-19h30", address: "Salle Louise Michelle" },
      { ages: "Enfants 7-12 ans", days: "Samedi", hours: "10h-11h30", address: "Salle Léo Lagrange" },
    ],
  },
  {
    name: "Bordeaux Bastide",
    phone: "06 45 07 96 62",
    schedule: [
      { ages: "Adultes", days: "Mardi", hours: "19h30-21h", address: "Centre d'animation Bastide Queyries" },
      { ages: "Adultes", days: "Jeudi", hours: "20h-21h30", address: "Centre d'animation Bastide Queyries" },
      { ages: "Enfants 4-6 ans", days: "Lundi", hours: "17h-17h45", address: "Le Gymnase rue Jean Sabarots" },
      { ages: "Enfants 7-10 ans", days: "Lundi", hours: "18h-18h45", address: "Le Gymnase rue Jean Sabarots" },
    ],
  },
  {
    name: "Lormont",
    phone: "07 83 51 06 43",
    schedule: [
      { ages: "Enfants 4-6 ans", days: "Lundi", hours: "17h45-18h30", address: "Salle LESCALLE" },
      { ages: "Enfants 7-12 ans", days: "Lundi", hours: "18h45-19h30", address: "Salle LESCALLE" },
      { ages: "Adultes", days: "Lundi", hours: "19h30-21h", address: "Salle LESCALLE" },
    ],
  },
  {
    name: "Lacanau",
    phone: "06 87 04 77 24",
    schedule: [
      { ages: "Enfants 4-6 ans", days: "Jeudi", hours: "17h30-18h15", address: "Dojo du COSEC" },
      { ages: "Enfants 7-12 ans", days: "Jeudi", hours: "18h15-19h30", address: "Dojo du COSEC" },
      { ages: "Adultes", days: "Jeudi", hours: "19h30-21h", address: "Dojo du COSEC" },
    ],
  },
  {
    name: "Le Porge",
    phone: "07 83 51 06 43",
    schedule: [
      { ages: "Enfants 4-6 ans", days: "Mardi", hours: "17h45-18h30", address: "Dojo" },
      { ages: "Enfants 7-12 ans", days: "Mardi", hours: "18h45-19h30", address: "Dojo" },
      { ages: "Ados et Adults", days: "Mardi", hours: "19h30-21h", address: "Dojo" },
    ],
  },
  {
    name: "Le Pian Médoc",
    phone: "06 59 30 82 00",
    schedule: [
      { ages: "Enfants 7-12 ans", days: "Mardi, Jeudi", hours: "18h-19h" },
      { ages: "Adultes", days: "Mardi, Jeudi", hours: "19h-20h30" },
    ],
  },
];

const PIN_ICON = `
  <svg viewBox="0 0 24 24" fill="#EAB81E" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
`;

const PHONE_ICON = `
  <svg viewBox="0 0 24 24" fill="#EAB81E" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
  </svg>
`;

const COLUMNS = [
  { key: "kids", title: "Enfants", match: (ages) => ages.startsWith("Enfants") },
  { key: "adults", title: "Adultes", match: (ages) => !ages.startsWith("Enfants") },
];

function renderSlot(entry, column) {
  const subLabel =
    entry.ages === column.title ? null : entry.ages.replace("Enfants ", "");

  return `
    <div class="card__slot">
      ${subLabel ? `<p class="card__sub-age">${subLabel}</p>` : ""}
      <p class="card__days">${entry.days}</p>
      <p class="card__hours">${entry.hours}</p>
      ${entry.address ? `<p class="card__address">${entry.address}</p>` : ""}
    </div>
  `;
}

function renderColumn(column, schedule) {
  const entries = schedule.filter((entry) => column.match(entry.ages));
  if (entries.length === 0) return "";

  return `
    <div class="card__column">
      <p class="card__column-title">${column.title}</p>
      ${entries.map((entry) => renderSlot(entry, column)).join("")}
    </div>
  `;
}

function phoneHref(phone) {
  return `+33${phone.replace(/\s/g, "").slice(1)}`;
}

function renderCard(antenne) {
  const hasSchedule = antenne.schedule.length > 0;

  return `
    <article class="card">
      <div class="card__header">
        <span class="card__pin">${PIN_ICON}</span>
        <h3 class="card__title">${antenne.name}</h3>
      </div>
      <div class="card__divider"></div>
      ${
        hasSchedule
          ? `
            <div class="card__columns">
              ${COLUMNS.map((column) => renderColumn(column, antenne.schedule)).join("")}
            </div>
          `
          : `<p class="card__empty">Informations à venir</p>`
      }
      ${
        antenne.phone
          ? `
            <div class="card__footer">
              <span class="card__phone-icon">${PHONE_ICON}</span>
              <a href="tel:${phoneHref(antenne.phone)}">${antenne.phone}</a>
            </div>
          `
          : ""
      }
    </article>
  `;
}

function renderAntennes() {
  const grid = document.getElementById("antennesGrid");
  if (!grid) return;
  grid.innerHTML = ANTENNES.map(renderCard).join("");
}

function initBanner() {
  const banner = document.getElementById("banner");
  const closeBtn = document.getElementById("bannerClose");
  if (!banner || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    banner.classList.add("is-hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAntennes();
  initBanner();
});
