// Question #1

function returnSimilarity(astring, arrayStrings) {
    let output = []
    for (let i = 0; i < arrayStrings.length; i++){
    if (astring.includes(arrayStrings[i])) {
     output.push(arrayStrings[i])
    }
    }
    return console.log(output);
};

returnSimilarity("Come here Fido and Gizmo come here", ["Max","Fido","Gizmo"]);

// Question #2

function convFeet(arrayInches) {
    let output = []
    for (let i = 0; i < arrayInches.length; i++){
        output.push(arrayInches[i]/12)
    }
    return console.log(output);
}

convFeet([66, 64, 60, 52, 72, 80, 51])

// Question #3

var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]

console.log(tmnt.map((x) => x[x.length-1] == 'o' ? `${x} is eating pizza` : `${x} is being rude`));

// Question #4


const findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49];
const max = (findAMax) => {
    let  currentMax = 0
    for (let i = 0; i < findAMax.length; i++){
        if (findAMax[i] > currentMax){
            currentMax = findAMax[i]
        }
    }
    return currentMax
}

console.log(max(findAMax));

// Question #5

// #1: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord( bool ){
    if (bool == true){return "Yes"}
    else {return "No"}
  };

// #2: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
    let output = [];
    for (let i=0; i < n; i++) {
      output.push(s);
    }
    return output.join('');
  }

// #3: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str){
    return str.substring(1,str.length-1)
  };
