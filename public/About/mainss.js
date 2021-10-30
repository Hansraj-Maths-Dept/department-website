// Some data from firebase

//Some link to be added in th main .html file


// Some coding which is left is  done here
// Reference messages collection
var messagesRef = firebase.database().ref('messages'); //.ref('messages') is for specific collections




// Listen for form submit
document.getElementById('contact-form').addEventListener('submit',submitform);


// Submit form
function submitform(e){
    e.preventDefault();

    

    // Get values
    var email= getInputVal('email');
    //var name= getInputVal('name'); copy paste and set the values of the id and then variables

    // Save Message
    saveMessage(email); // enter all the varibles in the bracket seperated by comma and space
 

    //Show Alert
    document.querySelector('.alert').getElementsByClassName.display = 'block';
    

    //Hide alert after 3 seconds


    setTimeout(function(){

        document.querySelector('.alert').getElementsByClassName.display = 'none';

    },3000);


    // Clearing all the data which is left out

    document.getElementById('contact-form').reset();

}


// Function to get form values
function getInputVal(id){

    return document.getElementById(id).value;

     
}


// Save the message to firebase

function saveMessage(email){     // all the fields that are required to be saved should be enteered in the saveMessage() function as argument

    var newMessageref = messagesRef.push();
    newMessageref.set({

        email:email // enter all the enteies seperated by comma
    })



}