let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');


function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here
  if (answer.value == '' && attempt.value == '') {
    setHiddenFields();
  }
  if (validateInput(input.value) == false) {
    return false;
  }
  attempt.value++;

  if (getResults(input.value)) {
    setMessage("You Win! :)");
    showAnswer(true);
    showReplay();
  } else if (attempt >= 10) {
    setMessage("You Lose! :(");
    showAnswer(false);
    showReplay();
  } else {
    setMessage("Incorrect, try again.");
  }
}

//implement new functions here
function setHiddenFields() {
  attempt.value = 0;
  answer.value = Math.floor(Math.random() * 10000).toString();
  while (answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if (input.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  let initial_div = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for (int i = 0; i < input.length; i++) {
    if (input.charAt(i) == answer.value.charAt(i)) {
      initial_div += '<span class="glyphicon glyphicon-ok">';
    } else if (answer.value.indexOf(input.charAt(i)) > -1) {
      initial_div += '</span><span class="glyphicon glyphicon-transfer"></span>';
    } else {
      initial_div += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  initial_div += < /div></div >
    document.getElementById('results').innerHTML += initial_div;
  if (input == answer.value) {
    return true;
  }
  return false;
}

function showAnswer(val) {
  let code = document.getElementById('code');
  code.innerHTML = answer.value;
  if (val) {
    code.className += ' success';
  } else {
    code.className += ' failure';
  }

}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}
