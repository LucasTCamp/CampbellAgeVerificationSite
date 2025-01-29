const myText = document.getElementById("InputofAge");
const mySubmit = document.getElementById("AgeCheck");
const myResult = document.getElementById("result");

let age;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);

    if (age < 13) {
        myResult.textContent = "Too young brutha";
    } else {
        if (age === 13) {
            myResult.textContent = "Getting there";
        } else {
            if (age > 13 && age < 18) {
                myResult.textContent = "So close";
            } else {
                if (age === 18) {
                    myResult.textContent = "You are an adult, and now you can gamble";
                } else {
                    myResult.textContent = "You are an adult. How is Vegas treating you?";
                }
            }
        }
    }
};
