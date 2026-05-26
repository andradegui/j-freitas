document.getElementById("ano-atual").textContent = new Date().getFullYear();

const secaoContato = document.getElementById("contato");
const campoNext = document.getElementById("form-next");
const mensagemSucesso = document.getElementById("contato-sucesso");

if (secaoContato && campoNext) {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("contato", "sucesso");
  nextUrl.hash = "contato";
  campoNext.value = nextUrl.toString();
}

const params = new URLSearchParams(window.location.search);
if (params.get("contato") === "sucesso" && secaoContato && mensagemSucesso) {
  mensagemSucesso.classList.add("is-visible");
  secaoContato.scrollIntoView({ behavior: "smooth", block: "start" });

  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete("contato");
  history.replaceState({}, "", `${cleanUrl.pathname}${cleanUrl.hash}`);
}

const emailButton = document.querySelector(".hero .email");
if (emailButton && secaoContato) {
  emailButton.addEventListener("click", (event) => {
    event.preventDefault();
    secaoContato.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
