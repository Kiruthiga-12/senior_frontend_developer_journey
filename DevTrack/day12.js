//map, filter, find functionsss
import learningTopics from './day11.js';

const topicNames = learningTopics.map((li) => li.name);
console.log(topicNames);

const completedTopics = learningTopics
  ?.filter((li) => li.status === 'completed')
  .map((li1) => li1.name);
console.log(completedTopics);

const javascriptTopic = learningTopics?.find((li) => li.name === 'JS');
console.log(javascriptTopic);

const incompletedTopics = learningTopics
  ?.filter((li) => li.progress < 50)
  .map((li1) => li1.name);
console.log(incompletedTopics);

const topicSummary = learningTopics?.map(
  (li) => `${li.name} - ${li.progress}%`
);
console.log(topicSummary);
