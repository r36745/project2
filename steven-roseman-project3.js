var assignment = {
    name: "Project 3",
    assignmentNumber: 3,
    grade: "A",
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
    },
    getGrade: function () {
        return this.grade;
    },
    setGrade: function (finalGrade) {
        this.grade=finalGrade;
    },
    
    startAssignment: function () {
        
    var hw = getAssignmentNumber;
       
    if ( hw === 1) {
        "setAssignNumber";
    },
    if ( hw === 2 ) {
        "setAssignmentNumber";
    },
    if ( hw === 3 ) {
        "Turn in Project";
    } else {
        "look again"
};

assignment.setAssignmentNumber(6);
assignment.setAssignmentName("Last Project");
assignment.setRequirements("code, Story on Project 3, Hopefully followed requirements");
assignment.setGrade("A");


var test = assignment.getAssignmentNumber();
var newTest = assignment.getAssignmentName();
var nextTest = assignment.getRequirements();
var finalTest = assignment.getGrade();


console.log(test);
console.log(newTest);
console.log(nextTest);
console.log(finalTest);



