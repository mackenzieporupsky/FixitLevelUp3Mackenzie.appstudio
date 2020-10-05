
btnBackHomeLoan.onclick=function(){
  ChangeForm(homePage)
}


function carLoan (p, r, n) {
  return Number(p*(r*((1+ r)**n))/(((1+r)**n)-1))
 }
 
 
btnCarSubmit.onclick=function(){
lblAnswer.value = "A car loan for $" + inptCarLoan.value + " over " + inptCarTime.value + " years at " + inptCarInterest.value + "% interest would have monthly payment of $" + carLoan(Number(inptCarLoan.value, inptCarInterest.value, inptCarTime.value))
}
