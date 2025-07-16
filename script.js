const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("activo");
  registerTab.classList.remove("activo");
  loginForm.classList.add("activo");
  registerForm.classList.remove("activo");
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("activo");
  loginTab.classList.remove("activo");
  registerForm.classList.add("activo");
  loginForm.classList.remove("activo");
});
