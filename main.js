// Get references to form elements
const billTotalInput = document.getElementById('billTotal');
const tipInput = document.getElementById('tipInput');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalBillInput = document.getElementById('totalBill');

// Function to calculate tip amount and total bill
function calculateTip() {
  // Get the values from input fields
  const billTotal = parseFloat(billTotalInput.value);
  const tipPercentage = parseInt(tipInput.value);
  
  // Calculate tip amount and total bill
  const tipAmount = (billTotal * tipPercentage) / 100;
  const totalBill = billTotal + tipAmount;

  // Update disabled input fields with calculated values
  tipPercentageInput.value = tipPercentage + '%';
  tipAmountInput.value = tipAmount.toFixed(2);
  totalBillInput.value = totalBill.toFixed(2);
}

// Event listeners for input and change events
// Event listener for input event on billTotalInput
billTotalInput.addEventListener('input', function() {
  
    // Get the value entered by the user
    let billTotalValue = billTotalInput.value;
  
    // Check if the value has more than two decimal places
    const decimalIndex = billTotalValue.indexOf('.');
    if (decimalIndex !== -1 && billTotalValue.length - decimalIndex > 3) {
      // Truncate the value to two decimal places
      billTotalValue = parseFloat(billTotalValue).toFixed(2);
      // Update the input field with the truncated value
      billTotalInput.value = billTotalValue;
    }
  });
tipInput.addEventListener('input', calculateTip);