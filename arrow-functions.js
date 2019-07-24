var vinod = {
    firstName: "Vinod",
    lastName: "Kumar",
    job: "Trainer",
    yearOfBirth: 1990,
    exampleFunction: () => {
        console.log("Inside exampleFunction", this);
    },
    calculateAge: function (currentYear) {
        var innerFunction = (year) => {
            return year - this.yearOfBirth;
        }
        return innerFunction(currentYear);
    }
}

vinod.exampleFunction();