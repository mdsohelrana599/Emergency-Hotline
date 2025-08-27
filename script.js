const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistoryBtn");
const state = {
  hearts: 0,
  coins: 100,
  copies: 0,
  history: [],
};
function updateNavbar() {
  heartCountEl.textContent = state.hearts;
  coinCountEl.textContent = state.coins;
  copyCountEl.textContent = state.copies;
}
function renderHistory() {
  historyList.innerHTML = "";
  if (state.history.length === 0) {
    const p = document.createElement("p");
    p.className = "text-sm text-slate-500";
    p.textContent = "No calls yet.";
    historyList.appendChild(p);
    return;
  }
  state.history.forEach((item) => {
    const row = document.createElement("div");
    row.className =
      "flex items-start justify-between gap-3 p-4 mt-2 rounded-xl bg-[#F2F2F2]";
    row.innerHTML = `
          <div>
            <div class="text-[13px] font-medium">${item.name}</div>
            <div class="text-xs text-slate-500">${item.number}</div>
          </div>
          <div class="text-xs text-slate-500">${item.time}</div>
        `;
    historyList.appendChild(row);
  });
}
function telSanitize(num) {
  return String(num).replace("");
}
document.getElementById("cardsGrid").addEventListener("click", function (e) {
  const btn = e.target.closest("button");
  if (!btn) return;
  const body = e.target.closest(".card-body");
  if (!body) return;
  const serviceName = body.dataset.name;
  const serviceNumber = body.dataset.number;
  const action = btn.dataset.action;
  if (action === "heart") {
    state.hearts += 1;
    updateNavbar();
    btn.classList.add("scale-110");
    setTimeout(() => btn.classList.remove("scale-110"), 150);
  } else if (action === "copy") {
    const textToCopy = serviceNumber;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert(`Copied ${serviceName} number: ${textToCopy}`);
        })
        .catch(() => {
          fallbackCopy(textToCopy);
        });
    } else {
      fallbackCopy(textToCopy);
    }
    state.copies += 1;
    updateNavbar();
  } else if (action === "call") {
    if (state.coins < 20) {
      alert("Not enough coins to make a call. You need 20 coins.");
      return;
    }
    const pretty = `${serviceName} (${serviceNumber})`;
    alert(`Calling ${pretty}...`);
    state.coins -= 20;
    updateNavbar();
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    state.history.unshift({
      name: serviceName,
      number: serviceNumber,
      time: timeStr,
    });
    renderHistory();
  }
});
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (_) {}
  document.body.removeChild(ta);
  alert(`Copied number: ${text}`);
}
clearBtn.addEventListener("click", function () {
  state.history = [];
  renderHistory();
});
updateNavbar();
renderHistory();
