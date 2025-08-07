export const ProjectsCard = (obj, number) => {
    return `
            <section class="projects-card" data-index="${number}">
                <img src="assets/img/proyecto01.png" alt="...">
                <section class="info">
                    <section class="tecnologias">${obj.languages}</section>
                    <h3>${obj.title}</h3>
                    <p>${obj.description}</p>
                    <section class="btn-links-proyectos">
                        <a href="https://github.com/Dextron03/${obj.title}" class="btn-info-pr"><i class="fa-brands fa-square-github"></i></a>
                        <a href="#" class="btn-info-pr"><i class="fa-solid fa-link"></i></a>
                    </section>
                </section>
            </section>`;
}