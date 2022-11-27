const chalk=require("chalk");
const log=console.log;


//1) Show all the students in table format
const students = [{
    age: 35,
    examScores:[],
    gender: 'male',
    name: 'John'
    },
    {
    age: 21,
    examScores:[],
    gender: 'female',
    name: 'Jane'
    },
    {
    age: 25,
    examScores:[],
    gender: 'female',
    name: 'Greta'
    },
    { 
    age: 27,
    examScores:[],
    gender: 'male',
    name: 'Joe'
    },
    {
    age: 30,
    examScores:[],
    gender: 'female',
    name: 'Maria'
    },
    {
    age: 23,
    examScores:[],
    gender: 'non-binary',
    name: 'Ximena'
    },
    {
    age: 26,
    examScores:[],
    gender: 'female',
    name: 'Laura'
    }]

const availableMaleNames = ['David', 'Juan', 'Víctor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Ana', 'Luise', 'Silvia', 'Isabel', 'Virginia'];
const allAvailableNames = availableMaleNames.concat(availableFemaleNames);

const availableGenders = ['male', 'female', 'non-binary'];


// 1) Mostrar en formato tabla todos los alumnos.
log(chalk.yellow.bold("\n1) Show all the students in table format: "));
console.table(students)


// 2) Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(chalk.yellow.bold(`\n2) Number of students in class: \n   ${students.length}`));


// 3) Mostrar por consola todos los nombres de los alumnos.
function PrintNames(students){
    var listNames = []
    for (let i = 0; i < students.length; i++) {
        listNames.push(students[i].name);
    }
    return listNames;
}
log(chalk.yellow.bold(`\n3) Show per console all the names of the students: \n   ${PrintNames(students)}\n`));


// 4) Remove last student from the list.
students.pop()
log(chalk.yellow.bold(`4) Remove the last student from the list:`));
console.table(students)


// 5) Remove random student from the list.
students.splice(Math.floor(Math.random() * students.length), 1)
log(chalk.yellow.bold(`\n5) Remove a random student from the list:`));
console.table(students)


// 6) Show per console all the data from female students
function printFemaleStudents(students){
    let femaleStudents = students.filter(function(student){
        return student.gender==='female'
    })
log(chalk.yellow.bold(`\n6) Show all the female student's data:\n`), femaleStudents)
}
printFemaleStudents(students)


// 7) Show per console the number of female and male students.
function lengthStudentsGender(students){
    console.log('   Females:', students.filter(function(student){
        return student.gender==='female'
    }).length)  
    console.log('   Males:', students.filter(function(student){
        return student.gender==='male'
    }).length)
    console.log('   Non-binary:', students.filter(function(student){
        return student.gender==='non-binary'
    }).length)
}
log(chalk.yellow.bold(`\n7) Show the number of females, males and non-binary students:`));
lengthStudentsGender(students)


// 8) Show true or false if all students are female.
function allFemale(students){
    console.log('   All students are female: ', students.every(function(student){
        return student.gender==='female'
    }))
}
log(chalk.yellow.bold(`\n8) Show true or false if all students are female:`));
allFemale(students)


// 9) Show the name of students between 20 and 25. 
function studentsBetween20and25(students){
    log(chalk.yellow.bold(`\n9) Show the student's name, who are between 20-25:`));
    let midtwenties = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].age >= 20 && students[i].age <= 25) {
            midtwenties.push(students[i].name);
        }
    }
    log(chalk.yellow.bold(`   ${midtwenties}`));
}
studentsBetween20and25(students)


// Assign name based on gender.
function assign(gender){
    if (gender === 'female') {
        return availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
    } else if (gender === 'male') {
        return availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
    } else {
        return allAvailableNames[Math.floor(Math.random() * allAvailableNames.length)];
    }
}

log(chalk.yellow.bold(`\n# Trying the assign(gender) function.`))
console.log(chalk.blue.bold(`   Assigned name for 🚹 gender: ${assign('male')}`));
console.log(chalk.red.bold(`   Assigned name for 🚺 gender: ${assign('female')}`));
console.log(chalk.green.bold(`   Assigned name for non-binary: ${assign('non-binary')}`));
console.log(chalk.red.bold(`   Assigned name for 🚺 gender: ${assign('female')}`));
console.log(chalk.blue.bold(`   Assigned name for 🚹 gender: ${assign('male')}`));
console.log(chalk.green.bold(`   Assigned name for non-binary: ${assign('non-binary')}`));


// 10) Add a new student to students with aleatory name, aleatory age(20-50), aleatory gender, empty marks array.
function addStudent(students){
    let newStudent = {
        age : Math.floor(Math.random() * 30) + 20,
        examScores:[],
        gender: availableGenders[Math.floor(Math.random() * availableGenders.length)],
        name: assign(availableGenders[Math.floor(Math.random() * availableGenders.length)])
    }
    students.push(newStudent)
    log(chalk.yellow.bold(`\n10) Add a new student to students with aleatory name`));
    }
addStudent(students)
console.table(students)


// 11) Show the name of the youngest student.
function youngestStudent(students){
    console.log('  ',students.sort(function(a,b){
        return a.age - b.age
    })[0])
}
log(chalk.yellow.bold(`\n11) Show the name of the youngest student:`));
youngestStudent(students)


// 12) show the average age of all students.
function averageAge(students){
    let sum = []
    for (let i = 0; i < students.length; i++) {
        sum.push(students[i].age)
    }
    let sumAll = sum.reduce((a,b) => a + b, 0) / sum.length;
    return Math.round(sumAll * 100) / 100
}
log(chalk.yellow.bold(`\n12) Show the average age of all students:\n    ${averageAge(students)}`));


// 13) show only the average of the female students.
function averageFemaleAge(students){
    let sumF = []
    for (let i = 0; i < students.length; i++) {
        if (students[i].gender ==='female') {
            sumF.push(students[i].age)
        }
    }
    let sumFemale = sumF.reduce((a,b) => a + b, 0) / sumF.length;
    return Math.round(sumFemale * 100) / 100
}
log(chalk.yellow.bold(`\n13) Show the average of the female students:\n    ${averageFemaleAge(students)}`));


// 14) Add new random score to every student.
function addRandomScore(students){
    for (let i = 0; i < students.length; i++) {
        students[i].examScores.push(Math.floor(Math.random() * 10) + 1)
    }
}
log(chalk.yellow.bold(`\n14) Add new random score to every student:`));
addRandomScore(students)
console.table(students)


// 15) order the students array alphabetically.
function orderAlphabetically(students){
    return students.sort(function(a,b){
        return a.name.localeCompare(b.name)
    })
}
log(chalk.yellow.bold(`\n15) Order the students array alphabetically:`));
console.log(orderAlphabetically(students))


// 16) show the student with the highest score.
function highestScore(students){
    let highest = students.sort(function(a,b){
        return b.examScores.reduce((a,b) => a + b, 0) - a.examScores.reduce((a,b) => a + b, 0)
    })[0]
    return highest
}
log(chalk.yellow.bold(`\n16) Show the student with the highest score:`));
console.log(highestScore(students), '\n')


