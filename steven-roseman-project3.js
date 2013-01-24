//alert("JavaScript works!");


var assignment = {
    name: "Project 3",
    assignmentNumber: 3,
    Requirements: [
        "code",
        "story",
        "instructions"
    ],
    getAssignmentNumber: function () {
        return this.assignmentNumber;
    },
    setAssignmentNumber: function(projectNumber) {
        this.assignmentNumber=projectNumber;
    },
    getAssignmentName: function () {
        return this.name;
    },
    setAssignmentName: function (assignmentsName) {
        this.name=assignmentsName;
    },
    getRequirements: function () {
        return this.requirements;
    },
    setRequirements: function (allRequirements) {
        this.requirements=allRequirements
    }
       
};

assignment.setAssignmentNumber(6);
assignment.setAssignmentName("Last Project");
assignment.setRequirements("code, Story on Project 3, Hopefully followed requirements");

var test = assignment.getAssignmentNumber();
var newTest = assignment.getAssignmentName();
var nextTest = assignment.getRequirements();


console.log(test);
console.log(newTest);
console.log(nextTest);





