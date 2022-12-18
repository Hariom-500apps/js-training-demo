function encrypt(text, s) {
    //result used for return normal text
    let result=""
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        //using regular expression checking it is alphabate or not 

		if(/[A-Za-z]/.test(char)) {

            /***check character is upper case or not
             * String.fromCharcode() method converting unicode to character
             * .charCodeAT method converting character to unicode
             */

            if (char == char.toUpperCase()) {

                let ch = String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
				result += ch;
            }
			else {
				let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
				result += ch;
			}
		}
		else {
			result+=char;
        }
	}
	return result;
}
/***
 * text : it is a text value taking input from user through myinput1
 * s : it is key for encoding cipher test to normal test given by user
 */

function getOutput() {
    let text = document.getElementById("myInput1").value;
    let s =  document.getElementById("myInput2").value;

    if(text == "" && !s) {
        alert("enter text and key");
    }

    else if(text == "") {
        alert("enter text");
    }

    else if(!s)
    {
        alert("enter key");
    }

    else {
        document.getElementById("output").innerText = encrypt(text,+s);
    }
   /* function clear() {
        document.getElementById('mydiv').reset();
        console.log("clear method");

    }
    function clearcontent(elementID) {
        document.getElementById(elementID).innerHTML = "";
    }*/
    

}


