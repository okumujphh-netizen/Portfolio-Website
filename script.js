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
