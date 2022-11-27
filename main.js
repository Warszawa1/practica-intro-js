const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


answer = rl.question("What question do you want to check? ", function (answer) {
    console.log("You answered: ", answer
    );
    switch (answer) {
        case 1:
            console.log("1) Show all the students in table format: ");
            console.table(students);
            break;
        case 2:
            console.log("2) Show all the students in table format with their names in upper case: ");
            console.table(students.map(student => {
                return {
                    name: student.name.toUpperCase(),
                    age: student.age,
    
                }
            }));
            break;
            default:
                console.log("Please enter a valid number");
                break;
    }
    rl.close();
}
);




// switch cases taking answer



// case 1: console.table(students)
// case 2: console.table(students)










