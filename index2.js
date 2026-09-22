document.body.style.flexDirection = "column";

//part 1
let Burger = {
    name: "Burger", 
    price: "5jd",
    category: "Fast-food", 
    available: true,
}
let Shawarma = {
    name: "Shawarma", 
    price: "4jd",
    category: "Shawarma", 
    available: true,
}
let Zinger = {
    name: "Zinger", 
    price: "3jd",
    category: "Fast-food", 
    available: true,
}
let Pizza = {
    name: "Pizza",
    price: "5jd",
    category: "Italian cuisine",
    available: false,
}
let Pasta = {
    name: "Pasta",
    price: "5jd",
    category: "Italian cuisine",
    available: false,
}

let menu = [Burger, Shawarma, Zinger, Pizza, Pasta];


function showMenu(){
     document.write(`
            <p class="content">MENU: <br></p>
            `)
    menu.forEach(order => {
        document.write(`
            <p class="content">${order.name}<br></p>
            `)
    });
}

function EnterOrder(){
    //part 2
    let foodName = prompt("Enter food name");

    // part 3
    while(!foodName){
        foodName = prompt("Please enter food name");
    }

    return foodName;
}

function MyOrderObject(myorder){
    for(orders in menu){
        if(menu[orders].name == myorder){
            return menu[orders];
            break;
        }
        else{
            continue;
        }
    }
}

function displayProperties(order){
    for(property in order){
        document.write(`
            <p class="content">${property} : ${order[property]}</p><hr>
            `);
    }
}




showMenu();
myorder = EnterOrder();
myorderProperties = MyOrderObject(myorder);
displayProperties(myorderProperties);