let name = prompt("Enter your name");
let age = prompt("Enter your age");
let gender = prompt("Enter your Gender");


//Part 1

if (gender=="male"){
    alert("Welcome Mr. "+name);
}
else if(gender == "female"){
    alert("Welcome Ms. "+ name);
}
else{
    alert("Welcome "+name);
}

//Part 2

if(age<16){
    alert("You are not eligible to place an order")
}else{
    
//Part 3
let order = prompt("Order one of the following\
    \n Burger | Shawarma | Zinger");
let valid = false;

if(order == "Burger"|| order=="Shawarma" || order == "Zinger"){
    alert("Order is being prepared");
    valid = true;
}
else{
    alert("Invalid Order, please try again");
}

//Part 4
if(age>=18 && valid){
    alert("Order Confirmed");
}
else if(age<18 || !valid){
    alert("Order requires verification");
}

//Part 5
let status = "invalid";
if(valid){
    status = "valid";    
}

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Order: ", order);
console.log("Status: ", status);


    document.write(`
    <div class="content">
        <h3>Order Summary</h3>
        <p>Customer: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <hr>
        <p>Order: ${order}</p>
        <p>Status: ${status}</p>
        <p>Thank u♡</p>
    </div>
`);

}


