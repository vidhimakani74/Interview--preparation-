console.log("Question 5:  Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well? ")

var readlineSync=require('readline-sync');
let highestMark=0;
let name='';

for(let i=0;i<5;i=i+1){
    let studentName=readlineSync.question("Enter Student no. "+[i+1]+" Name: ");
    let unitTestMarks=Number(readlineSync.question("Unit test marks: "));
    let preFinalMarks=Number(readlineSync.question("PreFinal marks: "));
    let finalMarks = Number(readlineSync.question("Final marks: "))
    let totalMarks=unitTestMarks+preFinalMarks+finalMarks;
    let avgMarks=(totalMarks/3).toFixed(2);
    console.log("->Total Marks: "+ totalMarks);
    console.log("-->Average Marks: "+avgMarks);
    console.log("======================================");

    if(totalMarks>highestMark){
        highestMark=totalMarks;
        name=studentName;
    }
}

console.log("Congratulations!! "+name+" got the highest marks, which is " + highestMark);