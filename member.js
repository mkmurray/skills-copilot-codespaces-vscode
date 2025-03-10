function skillsMember() {
  // Skills
  var skills = [
    {
      name: "HTML",
      value: 90,
    },
    {
      name: "CSS",
      value: 80,
    },
    {
      name: "JavaScript",
      value: 70,
    },
    {
      name: "PHP",
      value: 60,
    },
    {
      name: "Python",
      value: 50,
    },
  ];

  // Render skills
  var skillsContainer = document.getElementById("skills");
  skills.forEach(function (skill) {
    var skillElement = document.createElement("div");
    skillElement.className = "skill";
    skillElement.innerHTML = `
      <span class="skill-name">${skill.name}</span>
      <div class="skill-bar" style="width: ${skill.value}%"></div>
    `;
    skillsContainer.appendChild(skillElement);
  });
}