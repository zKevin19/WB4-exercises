let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

 function getAverage(scores) {
    let sum = 0
    for (let i = 0; i< scores.lenght; i++){
        sum += scores[i];
    }
    return sum / scores.lenght
 }

 letmyAverage = getAverage(myScores);
 let yourAverage = getAverage(yourScores);
 console.log("My average test score is" + myAverage.toFixed(2) + "%")
 console.log("Your average test score is" + yourAverage.toFixed(0)+ "%")