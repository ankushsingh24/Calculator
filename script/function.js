window.addEventListener("load", createCalculator);
document.getElementById("cal").addEventListener("click", answer);
document.getElementById("clear").addEventListener("click", clearText);

function createCalculator() {
    var arr = ["+", "-", "*", "/", "."];
    for (let i = 9, j = 0; i >= 0 || j < arr.length; i--) {
        createButton(i);
        if (i % 2 == 0) {
            createButton(arr[j]);
            j++;
        }
    }
}

var count = 0;

function createButton(number) {
    var button = document.createElement("button");
    button.innerHTML = number;
    button.addEventListener("click", function() {
        add_to_cal(number);
        document.getElementById("input").value = to_cal;
    });
    var b = document.getElementById("buttons").appendChild(button);
    count++;
    if (count % 3 == 0) {
        b.after(document.createElement("br"));
    }
}

function answer() {
    var val = document.getElementById("input").value;
    console.log(val);
    var answer = eval(val);
    document.getElementById("input").value = answer;
}

function clearText() {
    document.getElementById("input").value = "";
    console.log("Cleared");
}