function countWords() { 
          
    // Get the input text value 
    var text = document.getElementById("textbox").value; 
    text = text.trim();
    // Initialize the word counter 
    var numWords = 0; 
  
    // Loop through the text 
    // and count spaces in it  
    for (var i = 0; i < text.length; i++) { 
        // Check if the character is a space 
        if (text[i] == " "&& text[i+1] != ' ') { 
            numWords += 1; 
        } 
    } 
  
    // Add 1 to make the count equal to 
    // the number of words  
    // (count of words = count of spaces + 1) 
    if(text.length >= 1) {
        numWords += 1;
        } 
        else{
            numWords=0;
        }
  
    // Display it as output 
    document.getElementById("show") 
        .innerHTML = numWords; 
} 



function countletters() { 
          
    // Get the input text value 
    var text = document.getElementById("textbox").value; 
    text = text.trim();
    // Initialize the word counter 
    var numWords = 0; 
    var count=text.length;
    // Loop through the text 
    // and count spaces in it  
    for (var i = 0; i < text.length; i++) { 
        var currentCharacter = text[i]; 
  
        // Check if the character is a space 
        if (currentCharacter == " ") { 
            numWords += 1; 
        } 
    } 
    numWords=count-numWords;
    // Add 1 to make the count equal to 
    // the number of words  
    // (count of words = count of spaces + 1) 
    
    // Display it as output 
    document.getElementById("show1") 
        .innerHTML = numWords; 
} 