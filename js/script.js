const promoButton = document.querySelector("#promoButton")

promoButton.addEventListener("click", () => {
    promoButton.textContent = "promo : Beli 2 gratis tester!";
    console.log("promo kopi berhasil ditamilkan.")
});

const headings = [...document.querySelectorAll("h1, h2, h3")];

console.log("Daftar heading pada halaman:");
headings.forEach((heading) => {
  console.log(heading.tagName, "-", heading.textContent);
});