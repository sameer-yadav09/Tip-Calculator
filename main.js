let btn = document.getElementById('btn');

btn.addEventListener('click',function(){

    // declaring and initializing variables
    let billAmount = document.getElementById('bill_amount').value;
    let tipPercentage = document.getElementById('tip_percentage').value;
    let numberPeople = document.getElementById('number_people').value;

    // validating inputs
    if (billAmount == 0 || tipPercentage == 0 || numberPeople < 1) {
        alert("Please enter all values");
        return;
      }
    
    // checking if inputs are positive or not
    if (billAmount < 0 || tipPercentage < 0 || numberPeople < 0) {
        alert("Values can't be negative");
        return;
      }
    
    // logic to calculate tip amount per person
    let totalTip = billAmount * (tipPercentage / 100);
    let tipAmount =  totalTip / numberPeople;
    tipAmount = document.getElementById("tip_amount").value = tipAmount.toFixed(2);
    
    // logic to calculate total amount paid by per person
    let totalBill = parseFloat(billAmount) + parseFloat(totalTip);
    let totalAmount = totalBill / numberPeople;
    totalAmount = document.getElementById("total_amount").value = totalAmount.toFixed(2);

});