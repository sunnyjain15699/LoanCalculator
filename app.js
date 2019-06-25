// submit
    document.querySelector("#loan-form").addEventListener("submit",function(e){
    document.getElementById('results').style.display ='none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 1000); 
    e.preventDefault();
});

function calculateResults(){
    console.log('calculatie..');
    // UI 
    const amount = document.querySelector("#amount");
    const interest = document.querySelector("#interest");
    const years = document.querySelector("#years");
    const monthlyPayment = document.querySelector("#monthly-payment");
    const totalPayment = document.querySelector("#total-payment");
    const totalInterest = document.querySelector("#total-interest");
    
    const principal = parseFloat(amount.value);
    const calculatedinterest = parseFloat(interest.value)/100 /12;
    const calculatedPayment = parseFloat(years.value)*12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedinterest, calculatedPayment);
    const monthly = (principal*x*calculatedinterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2)

        document.getElementById('results').style.display ='block';
        document.getElementById('loading').style.display = 'none';

    }
    else{
        showError('PLease Check the values');       
    }   
}

// ShOW eRROE
function showError(error){
 document.getElementById('loading').style.display = 'none';
 const card = document.querySelector(".card");
 const heading = document.querySelector("h1");

// create a Div
const errorDiv = document.createElement('div');
errorDiv.className = 'alert alert-danger';
const textNode  = document.createTextNode(error); 
 errorDiv.appendChild(textNode);

card.insertBefore(errorDiv ,heading); 

setTimeout(clearError, 2000);

function clearError(){
    document.querySelector('.alert').remove();
    
}

}
