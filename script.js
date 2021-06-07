var array1 = [];
// input function

function one() {
  array1.push(1);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function two() {
  array1.push(2);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function three() {
  array1.push(3);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function four() {
  array1.push(4);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function five() {
  array1.push(5);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function six() {
  array1.push(6);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function seven() {
  array1.push(7);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function eight() {
  array1.push(8);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function nine() {
  array1.push(9);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function zero() {
  array1.push(0);
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

function decimal() {
  array1.push(".");
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

// arithemetic function

function add() {
  array1.push("+");
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}
function minus() {
  array1.push("-");
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}
function multiply() {
  array1.push("x");
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}
function divide() {
  array1.push("÷");
  let val = "";
  for (let i = 0; i < array1.length; i++) {
    val = val + array1[i].toString();
  }
  document.getElementById("screen").innerText = `${val}`;
}

// logic
var val1 = 0;
var val2 = 0;
var check = true;
var logic = "";
var ans;
var anss;
function result() {
  for (let k of array1) {
    //   conditional logic for operators

    if (k == "x" || k == "-" || k == "÷" || k == "+") {
      check = false;
      logic = k;
      continue;
    }

    if (check == true) {
      val1 = val1 + k.toString();
    } else {
      val2 = val2 + k.toString();
    }
  }
  let int1 = parseInt(val1);
  let int2 = parseInt(val2);
  console.log(typeof logic);
  console.log(logic);
  switch (logic) {
    case "+": {
      ans = int1 + int2;
      document.getElementById("screen").innerText = `${ans}`;
      break;
    }
    case "-": {
      ans = int1 - int2;
      document.getElementById("screen").innerText = `${ans}`;
      break;
    }
    case "x": {
      ans = int1 * int2;
      document.getElementById("screen").innerText = `${ans}`;
      break;
    }
    case "÷": {
      ans = int1 / int2;
      document.getElementById("screen").innerText = `${ans}`;
      break;
    }
  }
  reset();
}

// reset function

function reset() {
  array1 = [];
  anss = ans.toString();
  console.log(anss);
  for (let i = 0; i < anss.length; i++) {
    array1[i] = anss[i];
  }
  val1 = 0;
  val2 = 0;
  check = true;
  logic = "";
  ans = 0;
  anss = "";
  console.log(array1);
  console.log(typeof anss);
}

// clear function
function clean() {
  array1 = [];
  val1 = 0;
  val2 = 0;
  check = true;
  logic = "";
  ans = 0;
  anss = "";
  console.log("clear");
  document.getElementById("screen").innerText = ``;
}
