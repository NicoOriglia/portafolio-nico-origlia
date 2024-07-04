const proyectsContainer = document.querySelector('.swiper-wrapper');

const desiredNumberOfProjects = 3;

const slicedProjects = card.slice(0, desiredNumberOfProjects);

function cardProject(projects) {
  projects.forEach(project => {
    const newProject = document.createElement('div');
    newProject.classList = 'swiper-slide';
    newProject.innerHTML = `
      <div class="card-projet">
        <img src="${project.img}">
        <div class="card__content">
          <p class="card__title">${project.name}</p>
          <p class="card__description">${project.description}</p>
          <button class="card__button"><a href="${project.href}" target="_blank">Live Demo</a></button>
          <button class="card__button secondary"><a href="${project.href2}" target="_blank">Source Code</a></button>
          <div class="categories">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVA SCRIPT</span>
          </div>
        </div>
      </div>
    `;
    proyectsContainer.appendChild(newProject);
  });
}

cardProject(slicedProjects);



