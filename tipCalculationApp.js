// I have used function and if else if statement

function tipCalculation(bill,tip){
  let percent = (tip/100);

  let tipAmount = bill * percent;
  let totalBill = bill + tipAmount;

  if(tip<=5){
    console.log("You should pay more than this. "+tip+"% percent is very less. ");
    console.log("You left just a tip of "+tipAmount+ "Euros.");
    console.log("Your total bill is "+totalBill+" Euros");
  }
  else if(tip>20){
    console.log("You are very nice. "+tip+" % percent is very good.");
    console.log("You have given "+tipAmount+"  Euros.");
    console.log("Your total bill is "+totalBill+" Euros.");

  }
  else{
    console.log("You are good "+tip+" %percent is good tip.");
    console.log("You gave a tip amout of "+tipAmount+" Euros.");
    console.log("Your total bill is "+totalBill+" Euros.");

  }
}

tipCalculation(98,4);
tipCalculation(130,25);
tipCalculation(120,15);