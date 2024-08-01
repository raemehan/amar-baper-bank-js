function inputnumber(id){
        // input number
        const Input = document.getElementById(id);
        const InputText = Input.value;
        const InputNumber = parseFloat(InputText);

          // clear input
        Input.value = '';
        return InputNumber;
};

function updateField(id, InputNumber){
        const amount = document.getElementById(id);
        const amountText = amount.innerText;
        const amountNumber = parseFloat(amountText);
        amount.innerText = amountNumber + InputNumber;
        
};

function getCurrentBalance(){
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText =  balanceAmount.innerText;
    const balanceAmountNumber =parseFloat(balanceAmountText);
  
}

function balanceUpdate(inputnumber, isAdd){
  const balanceAmount = document.getElementById('balance-amount');
  getCurrentBalance();

  if(isAdd == true){
    balanceAmount.innerText = balanceAmountNumber + inputnumber; 
  }
  else{
    balanceAmount.innerText = balanceAmountNumber - inputnumber; 
  }}

document.getElementById('Deposite-button').addEventListener('click', 
    function(){
        const depositeInputNumber = inputnumber('Deposite-input');
        const depositeAmountNumber = updateField('deposite-amount', depositeInputNumber);
        const balanceAmountNUmber = balanceUpdate( depositeInputNumber, true);
 
    })

    document.getElementById('Withdraw-button').addEventListener('click', function(){
        const WithdrawInputNumber = inputnumber('Withdraw-input');
        const currentBalance = getCurrentBalance();
        if(currentBalance > 0 && currentBalance > WithdrawInputNumber ){
            const WithdrawAmountNumber = updateField('withdraw-amount', WithdrawInputNumber);
            const balanceAmountNUmber = balanceUpdate( WithdrawInputNumber, false);
        }

    })