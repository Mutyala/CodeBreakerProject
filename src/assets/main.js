let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let input = document.getElementById('user-guess');

function guess() {

    //add functionality to guess function here
    if(answer==''&&attempt==''){
      setHiddenFields();
    }
    if(validateInput(input.value)==false)
    {
      return false;
    }
    else{
      attempt++;
    }
    getResults(String input);
    if(true){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }
    else if(false&&attempt>=10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }
    else {
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields(){
  attempt=0;
  answer=Math.random(10000);
  var input=answer.toString();
  while(input.length()<4)
  {
    input="0"+input;
  }
}

function setMessage(String message){
  console.log(message);
}
function validateInput(String input){
  if(input.length()==4){
    return true;
  }
  else{
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(String results){
  var initial_div=<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">;
  foreach(var i : result){
    initial_div+=<span class="glyphicon glyphicon-ok"></span><span class="glyphicon glyphicon-transfer"></span>
    <span class="glyphicon glyphicon-remove"></span>;
  }
  </div>
  results.innerHTML=initial_div;
  var characters;
}
function showAnswer(boolean val){
  if(val==true){
    code.innerHTML=answer.value;
    code.className=success;
  }
  else {
    code.className=failure;
  }

}
function showReplay(){
  style.display('guessing-div')=none;
  style.display('replay-div')=block;
}
