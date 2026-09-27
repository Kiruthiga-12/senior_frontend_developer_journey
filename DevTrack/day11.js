const developer = {
  name: "Kiru",
  role: "Junior Frontend Developer",
  total_Experience: "7 years",
  currentGoal: "Senior Frontend Developer",
};

const learningTopics = [
  {
    name: "HTML",
    category: "Frontend",
    status: "In progress",
    progress: 50,
  },
  {
    name: "CSS",
    category: "Frontend",
    status: "In progress",
    progress: 100,
  },
  {
    name: "JS",
    category: "Frontend",
    status: "not started",
    progress: 0,
  },
];

console.log(developer?.name);
console.log(learningTopics[0]?.name);
if (learningTopics?.length > 0)
  console.log(learningTopics.filter((li) => li.name === "JS")[0].progress);

learningTopics[1] && (learningTopics[1].status = "completed");

developer.currentStreak = 20;

//returns 80
//returns Javascript;

export { developer };
export default learningTopics;
