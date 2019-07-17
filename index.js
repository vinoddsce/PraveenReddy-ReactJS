// var yearOfBirth = 2000;

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

// setTimeout(() => {
//     console.log(vinod.calculateAge(2019));
// }, 5000);


function second() {
    setTimeout(() => {
        console.log("How are you doing");
    }, 5000);
}

function first() {
    console.log("Hey There !!!!");
    second();
    console.log("The End !!!!");
}

first();