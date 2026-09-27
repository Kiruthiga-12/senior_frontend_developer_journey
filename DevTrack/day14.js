//scope --> defined accesibility and visibility of a variable.
//types of scope
//global scope ->variable defined outside of function/block, accessible everywhere.
//function scope --> varibale accessible within function.
//block scope --> anything defined within {} becomes block scope.
//var --> global/function scope.
//let and const -->global/block scope.
//modern approaches prefer const>let>var( avoid).
//scope chain ->if variable can't fnd within block scope, it moves to next level from block ->function->global.

//Hoisting
//JS reads program before executing prgm.
//function definition, hoisted correctly.
//var variable hoisted with undefined value.
//let and const hoisted but in Temporal Dead zone, until it reaches intialization.

//shadowing:
//if variable is present in function scope, global scope also has same variable, then local vraible has precendence called shadowing.

import {
  totalNoofTopics,
  completedTopicsDet,
  inProgressTopicsDet,
  completionPercentage,
} from './day13.js';
import learningTopics, { developer } from './day11.js';

function generateLearningSummary() {
  let totalTopics = totalNoofTopics(learningTopics);
  let currentLearningStatus;
  let completedPercentage = completionPercentage(learningTopics);

  if (completedPercentage === 100) currentLearningStatus = 'completed';
  else if (completedPercentage > 0) currentLearningStatus = 'In Progess';
  else currentLearningStatus = 'Not started';

  function getTopicCounts(learningTopics) {
    let completedTopics = completedTopicsDet(learningTopics);
    let inProgressTopics = inProgressTopicsDet(learningTopics);
    let notStartedTopics = learningTopics.filter(
      (li) => li.status === 'not started'
    ).length;
    return [completedTopics, inProgressTopics, notStartedTopics];
  }

  let [completedTopics, inProgressTopics, notStartedTopics] =
    getTopicCounts(learningTopics);

  let obj = {
    developer: developer.name,
    totalTopics: totalTopics,
    completedTopics: completedTopics,
    inProgressTopics: inProgressTopics,
    notStartedTopics: notStartedTopics,
    completedPercentage: completedPercentage,
    currentStatus: currentLearningStatus,
  };
  return obj;
}
let learningSummary = generateLearningSummary();
console.log('DevTrack Learning Summary \n \n');
console.log(`Developer: ${learningSummary.developer}`);
console.log(`Total Topics: ${learningSummary.totalTopics} `);
console.log(`Completed: ${learningSummary.completedTopics}`);
console.log(`In Progress: ${learningSummary.inProgressTopics} `);
console.log(`Not Started: ${learningSummary.notStartedTopics}`);
console.log(`Overall Progress: ${learningSummary.completedPercentage}%`);
console.log(`Current Status: ${learningSummary.currentStatus}`);
