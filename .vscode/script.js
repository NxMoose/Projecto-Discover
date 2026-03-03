function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto animada de um menino com guarda-chuva e casaco preto",
    )
  } else {
    img.setAttribute("src", "./assets/avatar-png.png")
    img.setAttribute("alt", "Foto de Patricio Rodrigues em Brasília")
  }
}
