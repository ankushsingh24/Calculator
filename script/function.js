function takeinput(x) {
  console.log("hello");
  var val = (document.getElementById("input").value += x);
  console.log(val);
}

function answer() {
  var value = document.getElementById("input").value;
  console.log(value);
  var answer = eval(value);
  document.getElementById("input").value = answer;
}
