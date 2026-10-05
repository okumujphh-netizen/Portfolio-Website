// skills array
const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Git",
    "Github"
];

//skill functions

const skillsList = document.getElementById("skills-list");

skills.forEach(function (skill) {
    const listItem = document.createElement("li");

    listItem.textContent = skill;

    skillsList.appendChild(listItem);
});

// project array
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
// project function
const projectsContainer = document.getElementById("projects-container");
projects.forEach(function (project) {
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

 // TESTIMONIALS

const testimonials = [
    {
        text: "John is a dedicated learner who is always willing to improve his skills.",
        author: "Software Engineering Mentor"
    },
    {
        text: "John approaches his projects with creativity and determination.",
        author: "Classmate"
    },
    {
        text: "John is passionate about technology and enjoys building useful digital solutions.",
        author: "Project Collaborator"
    }
];

const testimonialsContainer = document.getElementById("testimonials-container");

testimonials.forEach(function (testimonial) {
    const testimonialCard = document.createElement("div");
    testimonialCard.classList.add("testimonial");

    const testimonialText = document.createElement("p");
    testimonialText.textContent = testimonial.text;

    const testimonialAuthor = document.createElement("h3");
    testimonialAuthor.textContent = `- ${testimonial.author}`;

    testimonialCard.appendChild(testimonialText);
    testimonialCard.appendChild(testimonialAuthor);

    testimonialsContainer.appendChild(testimonialCard);
});


