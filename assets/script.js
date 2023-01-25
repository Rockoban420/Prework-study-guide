var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopics = topics[Math.floor(Math.random() * topics.length)];
function listTopics(){
for (var y=0; y < topics.length; y++){
    console.log(topics[y]);
}
}
function selectTopic() {
if (randomTopics === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopics === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopics === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopics === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}
function helloworld(){
  console.log("Hello, world, I am a function!")
}

console.log("Here are the topics we learned through Prework:")
listTopics()
console.log("Which topic should we study first?")
selectTopic()