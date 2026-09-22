  function reverse(input){
    input = input.split("").reverse().join('');
    console.log(input);
  }

function oddEven(){
  for(let i=0; i<16; i++){
    if(i%2==0){
      console.log(i, " is even");
    }
    else{
      console.log(i, " is odd");
    }
  }
}

function evenDash(input){
  let output = [];
  input = input.split('');
  for(let i=0; i<input.length; i++){
    if((input[i]%2 == 0 && input[i+1]%2==0) && (i != input.length-1)){
      output.push(input[i]);
      output.push("-");
      continue;
    }
    else{
      output.push(input[i])
    }
  }

  output = output.join('');
  console.log(output);

}


function Agechecker(age){
  if(age>=18){
    console.log("The user is Adult");
  }
  else{
    console.log("The user is minor");
  }
}
  
  reverse("532443");
  oddEven();
  evenDash("025468");
  Agechecker(13);