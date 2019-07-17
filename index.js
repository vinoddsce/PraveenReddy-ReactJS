var yearOfBirth = 2000;

// var vinod = {
//     firstName: "Vinod",
//     lastName: "Kumar",
//     job: "Trainer",
//     yearOfBirth: 1990,
//     calculateAge: function (currentYear) {
//         var innerFunction = (year) => {
//             return year - this.yearOfBirth;
//         }
//         return innerFunction(currentYear);
//     }
// }

var Person = function (firstName, lastName, yearOfBirth, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.display = function () {
    console.log(this.firstName, this.lastName, this.job);
}

Person.prototype.calculateAge = function (currentYear) {
    var innerFunction = (year) => {
        return year - this.yearOfBirth;
    }
    return innerFunction(currentYear);
}

var vinod = new Person("Vinod", "Kumar", 1990, 'Teacher');
console.log(vinod.calculateAge(2019));
vinod.display();
var praveen = new Person("Praveen", "Reddy", 1995, 'Designer');
console.log(praveen.calculateAge(2019));
praveen.display();






setTimeout(() => {
    console.log(vinod.calculateAge(2019));
}, 5000);

