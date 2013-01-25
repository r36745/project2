var hwName = "";
var hwNumber = 3;
var projectGraded = "";
var req = {};



var assignment = {
    name: "",
    assignmentNumber: 3,
    grade: "",
    graded: "",
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
    getGraded: function () {
        return this.graded;
    },
    setGraded: function (isGraded) {
        this.graded=isGraded;
    },
    
    startAssignment: function () {
        return this.graded;
    var hw = getAssignmentNumber;
       
        if ( hw === 1) {
        setAssignmentName("Project 1");
        // setRequirements()
        setGrade("A");
        setGraded("True");
        return true;
    } else if ( hw === 2 ) {
        setAssignmentName ("Project 1");
        // setReuquirements()
        setGrade("A");
        setGraded("True");
        return true;
    } else if ( hw === 3 ) {
        setAssignmentName ("Project 1");
        // setRequirements()
        setGrade("A");
        setGraded("True");
        return true;
    } else {
        return false;
    }
    getInstruction: function () {
        var hw = getAssignmentNumber;
        
        return "HomeWork Instructions";
    }
    createFlowChart: function () {
        console.log("");
    }
    createStory: function () {
        return " The story I've wrote, is a detailed account of the steps, to complete a flow chart project.";
    }
    writeCode: function () {
        return "My Code";
    }
    debugCode: function () {
        var successful = true;
        return successful;
    }
    runAssignment: function () {
        var codeCorrect = true;
        return codeCorrect;
    }
    turnAssignmentIn: function () {
        console.log("The Project is running");
    }
    displayAssignment() {
        // details here
        return {}
    }
    getGrades: function() {
        // details here
        return []
        
    }
    
}

assignment.setAssignment();
console.log("The project has started " + assignment.startAssignment());
console.log("The projects instructions are: " = assignment.getInstructions ());
assignment.createFlowChart();
console.log("Project sourcecode:\n" + assignment.writeCode());
console.log("Running the project. The project ran successful:" + assignment.runAssignment());
assignment.turnInAssignment();
console.log("The project requirements are:\n" + displayAssignment);
console.log("The grade for this project was:" + getGrade();
console.log("The grades for all the project so far are:" + getGrades);




