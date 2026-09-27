//functions - reusable
//parameter vs argument
//variable delcared in function definition - parameter.
//variable declared in function call - argument.
//return vs print console value(returns undefined) from function.
// Function Expression
//Arrow function  -->implicit return (single stmt, no use of return keyword.)
//default parameters
//function can also recive array/object as input param, returns array/object as value.
//pure (same input same ouput -> no side effects )vs impure functions(changes value for outisde variable.objetc.array, cause api calls, side effects).

import learningTopics from './day11.js';

function totalNoofTopics(learningTopics) {
  return learningTopics?.length;
}
console.log(`Total Topics: ${totalNoofTopics(learningTopics)}`);

const completedTopicsDet = (learningTopics) =>
  learningTopics?.filter((li) => li.status === 'completed')?.length;
console.log(`Completed: ${completedTopicsDet(learningTopics)}`);

const inProgressTopicsDet = (learningTopics) =>
  learningTopics?.filter((li) => li.status === 'completed')?.length;
console.log(`In progress: ${inProgressTopicsDet(learningTopics)}`);

const completionPercentage = (learningTopics) => {
  const completionTopics = completedTopicsDet(learningTopics);
  const totalTopics = totalNoofTopics(learningTopics);
  let perc = 0;
  if (completionTopics && totalTopics)
    perc = Math.round((completionTopics / totalTopics) * 100);
  return perc;
};
console.log(`Overall Progroess: ${completionPercentage(learningTopics)}%`);

const formattedSummary = (topics = learningTopics) => {
  const op = topics?.map(
    (li) => `${li.name} - ${li.category} - ${li.status} - ${li.progress}%`
  );
  return op;
};
console.log(formattedSummary(learningTopics));

export {
  totalNoofTopics,
  completedTopicsDet,
  inProgressTopicsDet,
  completionPercentage,
};
