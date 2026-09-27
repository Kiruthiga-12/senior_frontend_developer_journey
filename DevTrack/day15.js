//closures-> function which remembers varibale and parameters of outer function eventhough outer function completed its execution.
//lexical scope --> concentrate whereg function is defied rather than where its called, so bcz of that closures can access outer function's variable and parameter.
//examples : API callback, button clieck event handling.

function createLearningTracker() {
  let sessionCount = 0;

  function completeSession() {
    ++sessionCount;
  }

  function getSessionCount() {
    return sessionCount;
  }
  return { completeSession, getSessionCount };
}

let learningTracker = createLearningTracker();
learningTracker.completeSession();
learningTracker.completeSession();
learningTracker.completeSession();
console.log('DevTrack Learning Sessions');
console.log(`Completed Sessions: ${learningTracker.getSessionCount()}`);

let anotherLearningTracker = createLearningTracker();
anotherLearningTracker.completeSession();
anotherLearningTracker.completeSession();
anotherLearningTracker.completeSession();
anotherLearningTracker.completeSession();
anotherLearningTracker.completeSession();
console.log(`Completed Sessions: ${anotherLearningTracker.getSessionCount()}`);
