const drawMap = () => {
  const input = document.querySelector('#map-input')
  const canvas = document.querySelector('#map-canvas')

  canvas.innerHTML = ''
  const cleanInput = input.value.replace(/\r?\n|\r/g, "")

  for (const c of cleanInput) {
    canvas.insertAdjacentHTML('beforeend', `<div class="dot _${c}"></div`)
  }

}

document.querySelector('#draw').addEventListener('click', drawMap)

