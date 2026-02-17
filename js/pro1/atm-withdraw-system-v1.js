let balance = 10000;
let isCardBlocked = false;
let withdraw = 3000;
let option = 2;

if (isCardBlocked){
    console.log("your card is blocked");
}
else {
    switch(option) {
    case 1:
        console.log("your balance is: " + balance);
        break;

    case 2:
        if (withdraw<=balance){
            balance = balance - withdraw;
        console.log("withdraw is successful");
        console.log("new balance is: " + balance);
    }
        else {
        console.log("insufficient balance");
            }
        break;
        

    case 3:
        balance = balance + withdraw;
        console.log("deposit successful")
        console.log("New balance: " + balance);
        break;

    case 4:
        console.log("Thank you for using ATM");
        break;

    default:
        console.log("Invalid option");
}

}
