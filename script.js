const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Git",
    "Github"
];

const skillsList = document.getElementById("skills-list");

skills.forEach(function(skill) {
    const listItem = document.createElement("li");

    listItem.textContent = skill;

    skillsList.appendChild(listItem);
});

const projects = [
    {
        title: "Pet Store",
        description: "A website for a pet store with information about pets and services.",
        tech: "HTML, CSS, JavaScript"
    },
    {
        title: "Akan Name Generator",
        description: "A web application that generates an Akan name based on a person's date of birth.",
        tech: "HTML, CSS, JavaScript"
    }
];

const projectsContainer = document.getElementById("projects-container");
projects.forEach(function(project) {
    const projectCard = document.createElement("div");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    const projectTech = document.createElement("p");
    projectTech.textContent = `Tech used: ${project.tech}`;

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectTech);

    projectsContainer.appendChild(projectCard);
});
