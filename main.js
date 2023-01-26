var MABalance = document.getElementById('MABalance');
var MCLFee = document.getElementById('MCLFee');
var BALFee = document.getElementById('BALFee');
var CDRate = document.getElementById('CDRate');
var showResult = document.getElementById('showResult');

var form = document.getElementById('paymentForm');



form.addEventListener('submit', function(event){

    if (!MABalance.value || !MCLFee.value || !BALFee.value || !CDRate.value){
        alert("Please enter Value in to all fields!");
    } else {

        
        var Y = parseFloat(MCLFee.value);
        var Z = parseFloat(BALFee.value);
        var X = parseFloat(MABalance.value);
        var A = parseFloat(CDRate.value);

        var TotalFee = Y + Z;
        var FinalBalance = X - TotalFee;
        var YouWillGet = FinalBalance * A;

        showResult.innerHTML = "Hi, After withdraw, you will recieve : <br><br><span class='amount'>"  + YouWillGet + " Taka </span>";

        event.preventDefault();
    }
});
