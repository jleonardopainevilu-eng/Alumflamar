const WHATSAPP_NUMBER = "56936493037"; // Jaime — cambiar aquí si el número cambia

// ---------- MENÚ MÓVIL ----------
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.getElementById("quote-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const nombre = (data.get("nombre") || "").trim();
  const telefono = (data.get("telefono") || "").trim();
  const trabajo = (data.get("trabajo") || "").trim();
  const ciudad = (data.get("ciudad") || "").trim();
  const detalle = (data.get("detalle") || "").trim();

  let mensaje = `Hola Jaime, quiero cotizar un trabajo en vidrio/aluminio.\n\n`;
  mensaje += `Nombre: ${nombre}\n`;
  mensaje += `Teléfono: ${telefono}\n`;
  mensaje += `Tipo de trabajo: ${trabajo}\n`;
  if (ciudad) mensaje += `Comuna/Ciudad: ${ciudad}\n`;
  if (detalle) mensaje += `Detalle: ${detalle}\n`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});
