const status = [
  {
    topics: "HTML",
    status: "Completed",
    percentage: 100,
  },
  {
    topics: "CSS",
    status: "Completed",
    percentage: 100,
  },
  {
    topics: "Javascript",
    status: "In Progress",
    percentage: 50,
  },
  {
    topics: "Typescript",
    status: "In Progress",
    percentage: 50,
  },
  {
    topics: "React",
    status: "Not Started",
    percentage: 0,
  },
];

function generateLearningStatus(topic) {
  var currentTopic = "Javascript";
  if (currentTopic === "Javascript") {
    console.log("Var is accessible " + currentTopic);
    let currentProgress = 60;
    console.log("Inside block " + currentProgress);
    const topicCategory = "Frontend";
    console.log("Inside block " + topicCategory);
  }

  if (currentTopic === "Javascript") {
    console.log("--------------------------------------");
    console.log("another block");
    console.log("Var is accessible " + currentTopic);
    let currentProgress = 80;
    console.log("Inside block " + currentProgress);
    const topicCategory = "Frontend";
    console.log("Inside block " + topicCategory);
  }

  //   console.log("outside block " + currentProgress);
  //   console.log("outside block " + topicCategory);

  return status
    .filter((value) => value.topics === topic)
    .map((value) => value.status)
    .toString();
}
// console.log(`HTML : ${generateLearningStatus("HTML")}`); // Completed
console.log(`JavaScript : ${generateLearningStatus("Javascript")}`); // In Progress
// console.log(`React : ${generateLearningStatus("React")}`); // Not Started

function showLearningScope() {
  let topics = "Javascript";
  if (true) {
    let topics = "React";
    console.log("Inside: " + topics);
  }
  console.log("Outside: " + topics);
}

showLearningScope();

//Hoisting experiments
console.log("var variable " + variable);
var variable = "var";

// console.log("let variable " + let_variable);
// let let_variable = "let";

// console.log("const variable " + const_variable);
// const const_variable = "const";

showCompletedTopics();
// callArrowFunction();

function showCompletedTopics() {
  console.log("Hoisting of function");
}

const callArrowFunction = () => {
  console.log("Arrow function hoisting");
};

//devtrack assignment
function showLearningSummary(
  total_topics,
  completed_topics,
  inprogress_topics,
  notstarted_topics,
  overall_percentage,
) {
  console.log("===== DevTrack Learning Summary =====");
  console.log(`Total Topics: ${total_topics}`);
  console.log(`Completed Topics: ${completed_topics}`);
  console.log(`In Progress Topics: ${inprogress_topics}`);
  console.log(`Not Started Topics: ${notstarted_topics}`);
  console.log(`Overall Percentage: ${overall_percentage}%`);
}
showLearningSummary(5, 2, 2, 1, 60);