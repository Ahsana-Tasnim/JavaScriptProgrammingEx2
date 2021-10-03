/* Concatenation-ex1 
Ahsana Tasnim
ITPA-2021 */
let all = "Fred was excited about starting his course at NBCC." + 
"\nWeb and Mobile Application development was the program Fred" +
" entered in the Fall of 2019.\nIntro to Programming is going to be the"
+ " course Fred likes best. Fred is going to study very hard. \n" +
"Each night Fred is going to spend time reviewing all of the course material." +
 "\nFred will be committed to learning as much as possible about C# in 2019.";

 let name = "Fred";

 all = name + " was excited about starting his course at NBCC." +
 "\nWeb and Mobile Application development was the program " + name +
 " entered in the Fall of 2019.\nIntro to Programming is going to be the" +
 " course Fred likes best. " + name + " is going to study very hard." +
 "\nEach night " + name + " is going to spend time reviewing all of the course material." +
 "\n" + name +  " will be committed to learning as much as possible about C# in 2019.";

 all = ` ${name} was excited about starting his course at NBCC.
 Web and Mobile Application development was the program ${name}
 entered in the Fall of 2019.\n Intro to Programming is going to be the
 course ${name} likes best. ${name} is going to study very hard.
 Each night ${name} is going to spend time reviewing all of the course material.
 ${name} will be committed to learning as much as possible about C# in 2019.`;

 console.log(all);
