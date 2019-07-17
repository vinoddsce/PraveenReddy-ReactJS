// var arrowFunction = () => {
//     console.log("Hi, This Is Arrow Function", this);
// }
// arrowFunction();

var yearOfBirth = 2000;

var vinod = {
    firstName: "Vinod",
    lastName: "Kumar",
    job: "Trainer",
    yearOfBirth: 1990,
    calculateAge: function (currentYear) {
        // function innerFunction(year) {
        //     return year - this.yearOfBirth;
        // }
        var innerFunction = (year) => {
            return year - this.yearOfBirth;
        }
        return innerFunction(currentYear);
    }
}



console.log(vinod.calculateAge);



// function f1(f) {
//     f();
// }
// function f2() {
//     console.log("f2");
// }
// f1(f2);