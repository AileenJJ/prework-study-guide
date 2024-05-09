const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

for(let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}

/*
if (topic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topic === 'Git') {
        console.log("Let's study 'Git!");
    } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again!");
    }
    */