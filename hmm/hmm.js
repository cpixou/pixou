const c = document.querySelector(".c");
let x = 0,
  y = 0;
document.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  c.style.left = x - 10 + "px";
  c.style.top = y - 10 + "px";
});
const t = document.getElementById("v");
const i = document.getElementById("z");
const b = document.body;
const g = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
let h = localStorage.getItem("theme") || "system";
const a = (m) => {
  if (m === "system") {
    m = g();
  }

  if (m === "light") {
    b.classList.add("l");
    i.src = "hmm/svg/dark.svg";
  } else {
    b.classList.remove("l");
    i.src = "hmm/svg/light.svg";
  }
};
a(h);
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (h === "system") {
      a("system");
    }
  });
t.addEventListener("click", () => {
  if (h === "system") {
    h = g() === "dark" ? "light" : "dark";
  } else if (h === "dark") {
    h = "light";
  } else {
    h = "dark";
  }
  localStorage.setItem("theme", h);
  a(h);
});
