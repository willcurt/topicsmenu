document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject");
  subjects.forEach((subject) => {
    subject.addEventListener("click", () => {
      document.querySelectorAll(".topics").forEach((ul) => (ul.style.display = "none"));
      const topics = subject.querySelector(".topics");
      topics.style.display = "block";
    });
  });
});
