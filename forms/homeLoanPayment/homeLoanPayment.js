
btnBackHomeLoan.onclick=function(){
  ChangeForm(homePage)
}




function homeLoan () {
  let p = inptHomeLoan.value
  let r = inptHomeInterest.value
  let n = inptHomeTime.value
  let payments = Number(p*(r*((1+ r)**n))/(((1+r)**n)-1))
  let monthly = payments / 12
  return monthly
 }
 

 
Button1.onclick=function(){
lblHomeAnswer.value = "A home loan for $" + inptHomeLoan.value + " over " + inptHomeTime.value + " years at " + inptHomeInterest.value *100 + "% interest would have monthly payment of $" + homeLoan()
}


homeReset.onclick=function(){
  inptHomeLoan.value = " "
  inptHomeInterest.value = " "
  inptHomeTime.value = " "
  lblHomeAnswer.value = " "
}
