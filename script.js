const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Git",
    "Github"
];

const skillslist = document.getElementById("skills-list");

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
