/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
const patientArr = [];

function addPatient(patientName){
    // Task 2: Add code here
    patientArr.push(patientName);
}

// Task 3: Add code here
function listPatient(){
    
    console.log(JSON.stringify(patientArr)); //to match desired output format. Stringify to convert it into a string.

    /*if want to print each patient's name on a new line - use loop
    for (let i = 0; i < patientArr.length; i++) {
        console.log(patientArr[i]);
    }
    */
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]