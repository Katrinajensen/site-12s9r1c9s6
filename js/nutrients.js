const NUTRIENTS = {
  vitC:      { label: "Vitamin C",   emoji: "🍊", bright: "#FF8C42", jewel: "#C1571A", shape: "sun-half" },
  vitD:      { label: "Vitamin D3",  emoji: "☀️", bright: "#FFD23F", jewel: "#C99A1E", shape: "sun" },
  multi:     { label: "Multi",       emoji: "⭐", bright: "#2EC4B6", jewel: "#176F66", shape: "star" },
  elderberry:{ label: "Elderberry",  emoji: "🫐", bright: "#9B5DE5", jewel: "#5B2C77", shape: "berry" },
  vitA:      { label: "Vitamin A",   emoji: "🥕", bright: "#FF9F5B", jewel: "#C96A2E", shape: "carrot" },
  calcium:   { label: "Calcium",     emoji: "🦴", bright: "#CFEFFF", jewel: "#8FB8CE", shape: "pill" },
  zinc:      { label: "Zinc",        emoji: "🛡️", bright: "#9FB8C8", jewel: "#4F6B7A", shape: "shield" },
  omega3:    { label: "Omega-3",     emoji: "🐟", bright: "#4FD1E8", jewel: "#1C8DA0", shape: "droplet" },
  biotin:    { label: "Biotin",      emoji: "🌸", bright: "#FF6FA5", jewel: "#B23A6B", shape: "flower" },
  folate:    { label: "Folic Acid",  emoji: "🍃", bright: "#67C23A", jewel: "#3D7A1F", shape: "leaf" },
  b12:       { label: "B12",         emoji: "⚡", bright: "#FFC93C", jewel: "#C99400", shape: "bolt" },
  magnesium: { label: "Magnesium",   emoji: "⛰️", bright: "#8FA3B0", jewel: "#4A5C68", shape: "mountain" },
  turmeric:  { label: "Turmeric",    emoji: "🫚", bright: "#F2994A", jewel: "#B5651D", shape: "root" },
};

const LINES = {
  women: { key: "women", label: "Women's", accent: "var(--women)", tone: "jewel",
    blurb: "Biotin, folic acid, and calcium alongside the daily core four.",
    nutrients: ["vitC","vitD","multi","elderberry","biotin","folate","calcium","b12"] },
  men: { key: "men", label: "Men's", accent: "var(--men)", tone: "jewel",
    blurb: "Zinc, magnesium, and turmeric alongside the daily core four.",
    nutrients: ["vitC","vitD","multi","elderberry","zinc","magnesium","b12","turmeric"] },
  kids: { key: "kids", label: "Kids", accent: "var(--kids)", tone: "bright",
    blurb: "Vitamin A, calcium, zinc, and omega-3 — no iron, kept fun and safe.",
    nutrients: ["vitC","vitD","multi","elderberry","vitA","calcium","zinc","omega3"] },
};

function renderGummyGrid(container, lineKey) {
  const line = LINES[lineKey];
  container.innerHTML = line.nutrients.map(key => {
    const n = NUTRIENTS[key];
    const color = n[line.tone];
    return `
      <div class="gummy-cell">
        <div class="gummy shape-${n.shape}" style="background:${color}">${n.emoji}</div>
        <div class="gummy-label">${n.label}</div>
      </div>`;
  }).join("");
}
