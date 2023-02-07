$("#btnSend").click(function () {

    var letterGrade = "";

    //calculate weighted grades
    total = (parseFloat($("#assignments").val()) * 0.5) + (parseFloat($("#gp").val()) * 0.1) +
        (parseFloat($("#quizzes").val()) * 0.1) + (parseFloat($("#midterms").val()) * 0.1) +
        (parseFloat($("#final").val()) * 0.1) + (parseFloat($("#intex").val()) * 0.1);

    //assign letter for each grade
    if (total >= 0 && total <= 100) {
        if (total >= 94) {
            letterGrade = "A";
        }
        else if (total >= 90) {
            letterGrade = "A-";
        }
        else if (total >= 87) {
            letterGrade = "B+";
        }
        else if (total >= 84) {
            letterGrade = "B";
        }
        else if (total >= 80) {
            letterGrade = "B-";
        }
        else if (total >= 77) {
            letterGrade = "C+";
        }
        else if (total >= 74) {
            letterGrade = "C";
        }
        else if (total >= 70) {
            letterGrade = "C-";
        }
        else if (total >= 67) {
            letterGrade = "D+";
        }
        else if (total >= 64) {
            letterGrade = "D";
        }
        else if (total >= 60) {
            letterGrade = "D-";
        }
        else {
            letterGrade = "E";
        }

        alert("Your grade is: " + total + " and you got a(n) " + letterGrade);
    }
    
    else {
        alert("The form is incorrect :(");
    }


})