const containerProyects = document.getElementById('container-proyects')

function cardProyect(proyects) {
    proyects.forEach(proyect => {
        const newProyect = document.createElement('div')
        newProyect.classList = 'card-project-container'
        newProyect.innerHTML = `
          <div class="card">
            <img src = '${proyect.img}'>
            <div class="card__content">
              <p class="card__title">${proyect.name}</p>
              <p class="card__description">${proyect.description}</p>
              <button class="card__button"><a href='${proyect.href}' target="_blank">Live Demo</a></button>
              <button class="card__button secondary"><a href='${proyect.href2}' target="_blank">Source Code</a></button>
                  <div class="categories">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVA SCRIPT</span>
              </div>
            </div>
          </div>
        `
        containerProyects.appendChild(newProyect)

    });
}

cardProyect(card)

