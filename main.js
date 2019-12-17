document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
  console.log('Calculating...');
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 ;
  const calculatedPayments = parseFloat(years.value);


  const x = (calculatedPayments * 12);

  const monthly = (((principal*calculatedInterest*calculatedPayments)+principal)/x);

  
  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * x).toFixed(2);
    totalInterest.value = ((calculatedInterest*principal)*calculatedPayments).toFixed(2);

  } else {
    // showError('Please check your numbers');
  }

  e.preventDefault();
}