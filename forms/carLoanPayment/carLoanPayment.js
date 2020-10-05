

btnBackHomeLoan.onclick=function(){
  ChangeForm(homePage)
}


function carLoan () {
  let p = inptCarLoan.value
  let r = inptCarInterest.value
  let n = inptCarTime.value
  let payments = Number(p*(r*((1+ r)**n))/(((1+r)**n)-1))
  let monthly = payments / 12
  return monthly
 }
 
 
btnCarSubmit.onclick=function(){
lblAnswer.value = "A car loan for $" + inptCarLoan.value + " over " + inptCarTime.value + " years at " + inptCarInterest.value * 100 + "% interest would have monthly payment of $" + carLoan()
}

carReset.onclick=function(){
  inptCarLoan.value = " "
  inptCarInterest.value = " "
  inptCarTime.value = " "
  lblAnswer.value = " "
}
