// conditional statements
var age=20;
if(age>=18){
    document.write("<b>You are eligible to cast the vote</b>");
}else{
    console.log("You are a minor.");
}

// switch case
var grade='A';
document.write("Entering switch block<br/>");
switch (grade){
    case 'A':document.write("Good Job<b/>");
    break;
    case 'B':document.write("Pretty Good<b/>");
    break;
    case 'C':document.write("Passed<b/>");
    break;
    case 'D':document.write("Not so good<b/>");
    break;
    default:document.write("Invalid grade");

}