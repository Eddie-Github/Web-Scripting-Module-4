//add the submit event listener to the form
document.getElementById("palindromeForm").addEventListener("submit", palindromeForm);

//
function palindromeForm(event) 
{
    // preventDefault method prevents the browser from clearing user-input entries when the user submits the form
    event.preventDefault();

    // make a variable for the input
    //get the input from the form
    var input = document.getElementById("input").value;

    // make a variable for the output
    var output;

    //first check if the input is a string
    if (typeof input === 'string') 
    {
        //remove spaces from string
        inputWithoutSpaces = input.split(' ').join('');
        input = inputWithoutSpaces;

        //split input into array of characters
        var inputArray = Array.from(input);
        //reverse the array
        inputArray.reverse();

        //make string with backwards input array
        var inputBackwards = inputArray.join('');

        //check if the strings are the same
        if(input == inputBackwards)
        {
            //output the string is a palindrome
            output = "The String is a Palindrome";
        }
        else
        {
            //output the string is not a palindrome
            output = "The String is Not a Palindrome";
        }

    }
    else
    {
        //user input was not a string
        output = "Please Enter a String";
    }

    //show the output string
    document.getElementById("output").innerHTML = output;
}
