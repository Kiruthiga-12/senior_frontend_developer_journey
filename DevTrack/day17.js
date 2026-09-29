const totalTopics = 20;
const completedTopics = 12;
const totalProjects = 5;

const overallProgress = (completedTopics / totalTopics) * 100;

const topics_completed = document.getElementById("topics-completed");
const overall_progress = document.getElementById("overall-progress");
const projects_count = document.getElementById("projects-count");

topics_completed.textContent = completedTopics;
overall_progress.textContent = `${overallProgress.toFixed(2)}%`;
projects_count.textContent = totalProjects;

const completeTopicBtn = document.getElementById("complete-topic-btn");
completeTopicBtn.addEventListener("click", () => {});
